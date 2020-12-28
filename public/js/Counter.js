export default class Counter {
  constructor(parent, count) {
    this.render(parent, count)
  }

  render(parent, count) {
    const div = document.createElement("div")

    const plusBtn = document.createElement("button")
    const countOut = document.createElement("output")
    const minusBtn = document.createElement("button")

    plusBtn.innerText = ">"
    countOut.innerText = count || 0
    minusBtn.innerText = "<"

    plusBtn.onclick = () => this.set(++count)
    minusBtn.onclick = () => this.set(--count)

    div.append(plusBtn, countOut, minusBtn)
    parent.append(div)

    this.countOut = countOut

    return {
      container: div,
      plusBtn,
      countOut,
      minusBtn
    }
  }

  get count() {
    return +this.countOut.value
  }

  set(count) {
    if (this.onchange) this.onchange(count)
    this.countOut.value = count
  }
}