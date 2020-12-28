import Counter from "./Counter.js"
import Storage from "./Storage.js"

const storage = new Storage("first", 100)
storage.get().then(count => {
  const counter = new Counter(counterWrapper, count)
  counter.onchange = val => storage.set(val)

  const counter2 = new Counter(counterWrapper, count)
  counter2.onchange = val => storage.set(val)

  storage.onchange = val => {
    counter.countOut.innerText = val
    counter2.countOut.innerText = val
  }
})

const storage2 = new Storage("second", 100)
storage2.get().then(count => {
  const counter = new Counter(counterWrapper, count)
  counter.onchange = val => storage2.set(val)
})

const storage3 = new Storage("third", 100)
storage3.get().then(count => {
  const counter = new Counter(counterWrapper, count)
  counter.onchange = val => storage3.set(val)
})