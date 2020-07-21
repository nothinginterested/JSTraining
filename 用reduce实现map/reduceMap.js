function reduceMap1(fn ,thisArg ) {
  return (list)=>{
    const result=new Array(list.length)
    return  list.reduce((arr,current,index)=>{

      arr[index]=fn.call(thisArg,current,list,index)
      return arr
    },result)
  }

}
const reduceMap = (fn, thisArg /*真想去掉thisArg这个参数*/ ) => {
  return (list) => {
    const result = new Array(list.length);
    console.log(thisArg);
    return list.reduce((acc, value, index) => {
      // fix稀疏数组的情况
      if (index in list) {

        acc[index] = fn.call(thisArg, value);
      }
      return acc;
    }, result);
  }
}


const arr=reduceMap(function (item) {
  // console.log(this)
  return  item+1
},)([1,2,4,4])
console.log(arr);
