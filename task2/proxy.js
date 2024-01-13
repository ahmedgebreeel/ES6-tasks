let target = {
    name : "ahmed" ,
    address : "ismailia",
    age : 25 
}

let handler = {
    get : function(target, property, proxy){
        if(!(property in target)){
            throw "this property is not in the object";
        }
        return target[property];
    },
    set : function(target, property, value, proxy){
        if(!(property in target)){
            throw "this property is not in the object";
        }
        else if(property === "name"){
            if(typeof value === "string" && value.length === 7){
                target[property] = value;
                console.log(target[property]);
            }
            else {
                throw "please enter only a string of 7 characters.";
            }
        }
        else if(property === "address") {
            if(typeof value === "string"){
                target[property] = value;
                console.log(target[property]);
            }
            else {
                throw "please enter only a string value.";
            }
        }
        else if(property === "age"){
            if(typeof value === "number" && value >= 25 && value <= 60){
                target[property] = value;
                console.log(target[property]);
            }
            else {
                throw "please enter only a numerical value between 25 and 60.";
            }
        }
    } 
}



let p = new Proxy(target, handler);

p.name = "asdfghj";    /// it will print it

p.address = "cairo" ; //it will print it

p.age = 30 ;  //it will print it
  


