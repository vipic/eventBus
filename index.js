class EventBus {
  cache = {};
  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName) {
    this.cache[eventName].forEach(fn=>fn())
  }
  off(eventName, fn) {
    const index = (this.cache[eventName] || []).find(item=>item === fn) || -1
    if (index === -1) return
    this.cache[eventName].splice(index, 1)
  }
}
