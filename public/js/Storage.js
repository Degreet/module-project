export default class Storage {
  constructor(name, defaultValue) {
    if (!localStorage[`${name}-counter`])
      localStorage[`${name}-counter`] = defaultValue
    this.name = name
  }

  async set(value) {
    if (this.onchange) this.onchange(value)
    return localStorage[`${this.name}-counter`] = value
  }

  async get() {
    return localStorage[`${this.name}-counter`] || 0
  }

  async plus() {
    return ++localStorage[`${this.name}-counter`]
  }

  async minus() {
    return --localStorage[`${this.name}-counter`]
  }
}