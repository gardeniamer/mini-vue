let bucket = new Map()

let fnData

function watch(data, fn, config) {
    if (typeof (data) != "object") {
        throw ("please write the data about the object")
    }
    if (typeof (fn) != "function") {
        throw ("please write the function")
    }
    if (config && typeof (config) != "object") {
        throw ("please write the config with { }")
    }

    fnData = fn

    if (!bucket[data]) {
        bucket[data] = data
    }

}

function reactive(data) {
    if (typeof (data) != "object") {
        throw ("please write the data about the object")
    }
    else {
        return new Proxy(data, {
            get(target, key) {

                return target[key]

            },

            set(target, key, value) {

                if (target[key] == bucket[target][key]) {
                    bucket[target] = target
                    fnData(value, target[key])
                    target[key] = value
                }

                return true

            }

        })
    }
}

export { reactive, watch }