//柯里化
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const assert = chai.assert;
const flatten = require('../数组扁平化/arr')

describe(
    '验证数组扁平化', () => {
it('这是一个函数',()=>{
    assert.isFunction(flatten)
})

it('能够将一层数组柯里化',()=>{
    const a=[1,[2,3,[3,4]]]
    const b=flatten(a)

 assert.deepEqual([1,2,3,3,4],b)
})

    }
)
