const add = (a, b, c) => {
    return a + b + c
}

function curry(fn) {
    let _arg = []
    function _curry(...args) {
        _arg = _arg.concat(args)
        if (_arg.length  >= fn.length) {
            const result=fn(..._arg)
            _arg=[]
            return result  

        } else {
            return _curry
        }


    }
    return _curry
}

let a = curry(add)

console.log( a(1)(2)(3))
console.log(a(1,2)(3));
