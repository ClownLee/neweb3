const obj1 = {
    a: { a1: 1 },
    b: { b1: 1 },
    c: { c1: {
        cc1: 1,
    } },
    d: { d1: 1 },
}
const obj2 = {
    a: { a2: 2 },
    b: { b2: 2 },
    c: { c1: {
        cc2: 2
    } },
    d: { d2: 2 },
}
const obj3 = {
    a1: '1000',
    a: { a3: 3 },
    b: { b3: 3 },
    c: { c1:  {
        cc3: 3
    } },
    d: { d3: 3 },
    e: { e3: 3 },
}
const obj4 = {
    a: { a4: 4 },
    b: { b4: 4 },
    c: { c1: {
        cc4: 4
    } },
    d: { d4: 4 },
    e: { e4: 4 },
}

const multidimensionalObjectMerging = (...args) => {
    if(args.length >= 2) {
        let first = args.shift()
        let obj = {}
        let second = args.shift()

        const fKey = Object.keys(first)
        const sKey = Object.keys(second)

        fKey.concat(sKey).filter(item => !sKey.includes(item)).forEach(key => {
            obj[key] = first[key] || second[key]
        })

        fKey.concat(sKey).filter(item => sKey.includes(item)).forEach(key => {
            if(typeof first[key] === 'object' && typeof second[key] === 'object') {
                obj[key] = multidimensionalObjectMerging(first[key], second[key])
            } else {
                obj[key] = first[key] || second[key]
            }
        })

        return multidimensionalObjectMerging(obj, ...args)
    }else {
      return args.shift()  
    }
}

console.log(multidimensionalObjectMerging(obj1, obj2, obj3, obj4))