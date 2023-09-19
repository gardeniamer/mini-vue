let bucket = new WeakMap()
let active;

function effect(fn) {
    active = fn
    fn()
    active = null
}

function classification(target, key) {
    if (active) {
        let single
        if (!bucket.get(target)) {
            bucket.set(target, new Map())
        }
        single = bucket.get(target)
        if (!single.get(key)) {
            single.set(key, new Set())
        }

        single.get(key).add(active)

    }
}

function dispatch(target, key) {
    let dispatching = bucket.get(target).get(key)

    dispatching.forEach(item => {
        item()
    });
}

function reactive(data) {
    if (typeof (data) != "object") {
        return
    }

    return new Proxy(data, {
        get(target, key) {

            classification(target, key)

            return target[key]
        },

        set(target, key, value) {
            target[key] = value

            dispatch(target, key)

            return true
        }

    })

}

export {
    reactive,
    effect
}