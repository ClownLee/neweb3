const obj1 = {
    a: { a1: 1 },
    b: { b1: 1 },
    c: { c1: {
        cc1: 1,
    }, c2: { cc1: '啊哈哈哈' } },
    d: { d1: 1 },
}
const obj2 = {
    a: { a2: 2 },
    b: { b2: 2 },
    c: { c1: {
        cc2: 2
    }, c2: { cc2: '啊哈哈哈' } },
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
        const diff = [...new Set(fKey.concat(sKey).filter(item => !sKey.includes(item)))]
        diff.forEach(key => {
            obj[key] = first[key] || second[key]
        })

        const common = [...new Set(fKey.concat(sKey).filter(item => sKey.includes(item)))]

        common.forEach(key => {
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

const deleteObjectSomeItems = (main, ...args) => {
    let first = args.shift()
    
    if(first) {
        const mKey = Object.keys(main)
        const fKey = Object.keys(first)
        const keys = [...new Set(mKey.concat(fKey).filter(item => fKey.includes(item)))]
        
        keys.forEach(key => {
            if(typeof main[key] === 'object' && typeof first[key] === 'object') {
                deleteObjectSomeItems(main[key], first[key])
            } else {
                delete main[key]
            }
        })

        deleteObjectSomeItems(main, ...args)
    }
    
    return main
}

// console.log(multidimensionalObjectMerging(obj1, obj2, obj3, obj4))

const main = {
    a1: '1000',
    a: { a1: 1, a2: 2, a3: 3, a4: 4 },
    b: { b1: 1, b2: 2, b3: 3, b4: 4 },
    c: {
        c2: { cc1: '啊哈哈哈', cc2: '啊哈哈哈' },
        c1: { cc1: 1, cc2: 2, cc3: 3, cc4: 4 }
    },
    d: { d1: 1, d2: 2, d3: 3, d4: 4 },
    e: { e3: 3, e4: 4 }
}

console.log(deleteObjectSomeItems(main,  obj2))
