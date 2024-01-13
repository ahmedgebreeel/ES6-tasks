let obj = {
    name : "ahmed",
    age : 26
}
function create(){
    let keys = Object.keys(this);  //// ["name", "age]
    let i = 0 ;
    let result = {};

    let obj = {
        next : function () {
            if(i < keys.length){
                result = {
                    value : [keys[i], this[keys[i]]],
                    done : false
                }
                i++;
            }else{
                result = {
                    value : undefined,
                    done: true
                }
            }
            return result;
            
        }
    };
    return obj;
}

obj[Symbol.iterator] = create ;
for (const el of obj) {
    console.log(el);    /// ["name", "ahmed"]
}