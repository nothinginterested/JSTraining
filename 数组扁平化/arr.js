function flatten(arr) {
        let arrs=[...arr]
        let newArr=[]

        while(arrs.length){
            const item=arrs.shift()
            if(Array.isArray(item)){
                arrs.unshift(...item)
            }else{
                newArr.push(item)
            }
        }
        console.log(newArr)
        return newArr
  }

  module.exports=flatten