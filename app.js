

const obj1 = {
    name:'konain'
}

const obj2 = {
    age: 29,

    job:function(){
        return this.networth
    },
    __proto__:obj1

}

const ob3 = {
    networth :`$90000000`,
    
    __proto__:obj2

}

console.log(ob3.job())