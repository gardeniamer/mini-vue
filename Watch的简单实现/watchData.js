const app = document.getElementById("app")
const app2 = document.getElementById("app2")

import { reactive, watch } from "./watch.js"

const obj = reactive({ name: "myj", age: 20 })
const obj2 = reactive({ name: "myj", age: 20 })

watch(obj, (newValue, oldValue) => {
    console.log("newValue-->", newValue);
    console.log("oldValue-->", oldValue);
})

// watch(obj2, (newValue, oldValue) => {
//     console.log("newValue-->", newValue);
//     console.log("oldValue-->", oldValue);
// })




setTimeout(() => {
    obj.name = "bcd"
}, 2000)

setTimeout(() => {
    obj2.name = "bcdw"
}, 3000)

setTimeout(() => {
    obj.name = "bcd2"
}, 4000)


