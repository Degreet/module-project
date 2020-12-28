export default class Storage {
  set(value) {
    return localStorage.counter = value
  }

  get() {
    return localStorage.counter || 0
  }

  plus() {
    return ++localStorage.counter
  }

  minus() {
    return --localStorage.counter
  }
}