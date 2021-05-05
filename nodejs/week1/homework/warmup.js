console.log("inside warmup file");

class Circle{
    constructor(radius){
        this.radius = radius
    } 
    getDiameter(){
        let diameter = this.radius * 2
        return diameter;
    }
    getCircumference(){
        let circumference = this.radius * Math.PI * 2
        return circumference
    }
    getArea(){
        let area = Math.PI * Math.pow(this.radius, 2)
        return area
    }
}

const myCircle = new Circle(5)
const myCircle2 = new Circle(10)
console.log(myCircle.getDiameter(5))
console.log(myCircle.getCircumference(5))
console.log(myCircle.getArea(5))

console.log(myCircle2.getDiameter(10))
console.log(myCircle2.getCircumference(10))
console.log(myCircle2.getArea(10))