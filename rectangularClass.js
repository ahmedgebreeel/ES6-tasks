import { Shape } from "./shapeClass.js";

export class Rectangular extends Shape {
    constructor(w, h){
        super();
        this.width = w;
        this.height = h;
    }
    area(){
        return this.width * this.height ;
    }
    perimeter(){
        return 2*(this.width + this.height);
    }
    toString(){
        return `rectangular with width: ${this.width} and height: ${this.height} and its area : ${this.area()}`;
    } 
}