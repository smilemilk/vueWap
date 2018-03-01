export default (currentPage, nextPage) => {
  let direction = 'slide-left'
  switch (currentPage) {
    case 'Other': {
      switch (nextPage) {
        case 'Main':
          direction = 'slide-right'
          break
      }
    }
  }
  return direction
}
