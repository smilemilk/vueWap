// ios: https://github.com/marcuswestin/WebViewJavascriptBridge
// android: https://github.com/lzyzsd/JsBridge
function setupWebViewJavascriptBridge (callback) { // 调用原生ios的方法（不能更改） /*这段代码是固定的，必须放到js中*/
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function() {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

/**
 * JS调用原生
 * @param {String} functionName
 * @param {Object} params
 * @param {Function} backFunction
 */
export function callNative (functionName, params, backFunction) {
  setupWebViewJavascriptBridge(function(bridge) {
    // Initialize your app here
    bridge.callHandler(functionName, {...params}, function callback(response) {
      if (versions().android) {
        backFunction(JSON.parse(response))
      } else {
        backFunction(response)
      }
    })
  })
}

// 注册事件监听
function connectWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    callback(WebViewJavascriptBridge)
  } else {
    document.addEventListener('WebViewJavascriptBridgeReady', function() {
      callback(WebViewJavascriptBridge)
    }, false)
  }
}

// 注册回调函数，第一次连接时调用初始化函数
export function initNative () {
  connectWebViewJavascriptBridge(function(bridge) {
    // 初始化
    bridge.init(function(message, responseCallback) {
      var data = {
        'Javascript Responds': 'Wee!'
      }
      responseCallback(data)
    })

    // 接收安卓发来的消息并返回给安卓通知
    // bridge.registerHandler('functionInJs', function(data, responseCallback) {
    //   var responseData = '我接受了安卓的调用'
    //   responseCallback(responseData)
    // })
  })
}

// callNative('login', {name: 'ge'}, function (response) {
// })

function versions () {
  var u = navigator.userAgent.toLocaleLowerCase()
  // app = navigator.appVersion
  return { // 移动终端浏览器版本信息
    ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), // ios终端
    android: u.indexOf('android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
    iPhone: u.indexOf('iphone') > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('ipad') > -1 // 是否iPad
  }
}
