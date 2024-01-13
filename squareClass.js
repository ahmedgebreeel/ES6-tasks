import { Shape } from "./shapeClass.js";

 export class Square extends Shape{
    constructor(w){
        super();
        this.width = w;
    }
    area(){
        return this.width * this.width ;
    }
    perimeter(){
        return 4 * this.width ;
    }
    toString(){
        return `square with width: ${this.width} and its area: ${this.area()}`;
    }
}