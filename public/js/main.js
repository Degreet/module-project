import Counter from "./Counter.js"
import Storage from "./Storage.js"

const storage = new Storage
storage.get().then(count => {
  const counter = new Counter(counterWrapper, count)
  counter.onchange = val => storage.set(val)
})