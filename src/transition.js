export default (currentPage, nextPage) => {
  return config(currentPage, nextPage, [
    {
      name: {
        'Home': ['MyBill', 'Mine'],
        'MyBill': ['Home', 'Mine'],
        'Mine': ['Home', 'MyBill']
      },
      direction: 'fade'
    },
    {
      name: {
        'Auth': ['MyBill']
      },
      direction: 'slide-right'
    }
  ])
}

function config (currentPage, nextPage, arr) {
  for (let n = 0; n < arr.length; n++) {
    let obj = arr[n]
    let keys = Object.keys(obj.name)
    for (let index = 0; index < keys.lenght; index++) {
      if (currentPage === keys[index]) {
        let len = obj.name[keys[index]].length
        for (let i = 0; i < len; i++) {
          if (nextPage === obj.name[keys[index]][i]) {
            return obj.direction
          }
        }
      }
    }
  }

  return 'slide-left'
}
