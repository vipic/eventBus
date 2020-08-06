class EventBus {
  constructor() {
    this.cache = {}
  }

  on(eventName, fn, ctx = null) {
    if (typeof fn !== 'function') return console.log('arguments[1] must be a function')

    this.cache[eventName] = this.cache[eventName] || [];

    if (!this.cache[eventName].find(item => item.fn === fn)) {
      this.cache[eventName].push({ctx, fn});
    }
  }

  emit(eventName, ...args) {
    if (!this.cache[eventName]) {
      return console.log("can't emit an empty event")
    }
    this.cache[eventName].forEach(item=>item.fn.apply(item.ctx, args))
  }

  has(eventName) {
    return !!this.cache[eventName] && !!this.cache[eventName].length
  }

  off(eventName, fn) {
    const index = (this.cache[eventName] || []).find(item=>item.fn === fn) || -1
    if (index === -1) return
    this.cache[eventName].splice(index, 1)
  }
}

export default new EventBus()
