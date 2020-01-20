let _counter = 1

const Counter = {
  setCounter (counterStart) {
    _counter = counterStart
  },

  increment () {
    return 'id-' + String(_counter++)
  },

  currentId () {
    return 'id-' + String(_counter)
  }
}

export default Counter
