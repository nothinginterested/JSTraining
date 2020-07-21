
class EventHub{
    cache={}
    emit(EventName:string){
        if(this.cache[EventName]){
            this.cache[EventName].forEach(Fn=>Fn());
        }

    }
    on(EventName:string,Fn){
        if(!this.cache[EventName]){
            this.cache[EventName]=[]
        }
        this.cache[EventName].push(Fn)    

    }
    off(EventName:string,fn){
        if(!this.cache[EventName]){
            return
        }
        this.cache[EventName]

    }
    
}
export default EventHub