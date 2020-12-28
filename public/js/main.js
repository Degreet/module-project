import Counter from "./Counter.js"
import Storage from "./Storage.js"

const storage = new Storage
const counter = new Counter(counterWrapper, storage.get())
counter.onchange = val => storage.set(val)