import { Shape } from "./shapeClass.js";

import { Rectangular } from "./rectangularClass.js";
import { Square } from "./squareClass.js";
import { Circle } from "./circleClass.js";



let rectangular = new Rectangular(10,5);
let square = new Square(5);
let circle = new Circle(5);

console.log(rectangular.toString());
console.log(square.toString());
console.log(circle.toString());

