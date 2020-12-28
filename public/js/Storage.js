export default class Storage {
  async set(value) {
    return localStorage.counter = value
  }

  async get() {
    return localStorage.counter || 0
  }

  async plus() {
    return ++localStorage.counter
  }

  async minus() {
    return --localStorage.counter
  }
}