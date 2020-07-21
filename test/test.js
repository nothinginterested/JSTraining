const deepClone=require('../函数深拷贝/ar')
  
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const assert = chai.assert;

describe('deepclone',()=>{
 it('这是一个函数',()=>{
     assert.isFunction(deepClone)
 }
 )
it('复制基本类型',()=>{
    const n=1234
    const n2=deepClone(n)
    assert(n===n2)

})
it('复制普通对象',()=>{
    const a={name:'222',children:{ll:'lzz'}}
    const a2=deepClone(a)
    assert(a['name']===a2['name'])
    assert(a.children!==a2.children)
    assert.deepEqual(a,a2)
})

it('复制普通数组',()=>{
    const a = [[11, 12], [21, 22], [31, 32]];
    a2=deepClone(a)
    assert(a[0]!==a2[0])
    assert(a[0][0]===a2[0][0])
    assert.deepEqual(a,a2)
})
it('复制函数',()=>{
    const a = function(x, y) {
        return x + y;
      };
      a.xxx = { yyy: { zzz: 1 } };
    const a2=deepClone(a)
      assert(a !== a2);
      assert(a.xxx.yyy.zzz === a2.xxx.yyy.zzz);
      assert(a.xxx.yyy !== a2.xxx.yyy);
      assert(a.xxx !== a2.xxx);
      assert(a(1, 2) === a2(1, 2));

})
})