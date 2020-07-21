import EventHub from './src/index'

const eventhub=new EventHub()

eventhub.on('xx',()=>{
    console.log('hhhh')
})
eventhub.on('xx',()=>{
    console.log('fffff')
})

eventhub.emit('xx')