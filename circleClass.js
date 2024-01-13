import {Shape} from './shapeClass.js';

export class Circle extends Shape {
    constructor(r){
        super();
        this.radius = r ;
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2) ;
    }
    perimeter(){
        return 2 * Math.PI * this.radius ;
    }
    toString(){
        return `circle with radius: ${this.radius} and its area: ${this.area()}`;
    }
}