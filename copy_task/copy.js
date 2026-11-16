export function deepClone(obj, cache = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (cache.has(obj)) {
        return cache.get(obj);
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof Map) {
        const copy = new Map();
        cache.set(obj, copy);

        obj.forEach((value, key) => {
            copy.set(deepClone(key, cache), deepClone(value, cache));
        });

        return copy;
    }

    if (obj instanceof Set) {
        const copy = new Set();
        cache.set(obj, copy);

        obj.forEach(value => copy.add(deepClone(value, cache)));

        return copy;
    }

    const copy = Array.isArray(obj)
        ? []
        : Object.create(Object.getPrototypeOf(obj));

    cache.set(obj, copy);

    Reflect.ownKeys(obj).forEach(key => {
        copy[key] = deepClone(obj[key], cache);
    });

    return copy;
}
