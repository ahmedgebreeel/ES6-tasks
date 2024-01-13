//// abstract class

export class Shape{
    constructor() {
        if (this.constructor === Shape){
            throw "this is an abstract class";
        }
    }
    toString(){
        return "this is the parameter of this shape";
    }
}


 