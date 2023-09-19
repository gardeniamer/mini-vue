import {reactive, effect} from "./reactive.js"

const app = document.getElementById("app")
const app2 = document.getElementById("app2")

const p = reactive({ name: "我是初始数据01", age: 100 })

const p2 = reactive({ name: "我是初始数据02", age: 200 })


function trial1() {
    app.innerText = p.name
    console.log("p数据--->",p.name);
}

function trial2() {
    app2.innerText = p2.name
    console.log("p2数据--->", p2.name);
}

effect(trial1)
effect(trial2)

// setTimeout(() => {
//     p.name = "我是变化数据1"
// }, 2000);
