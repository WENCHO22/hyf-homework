const myCanvas = document.getElementById("my-canvas")
myCanvas.style.width = "100%"
myCanvas.style.width = "100%"
const context = myCanvas.getContext("2d")
context.beginPath()
context.arc(100, 75, 50, 0, 2 * Math.PI);
context.strokeStyle = "black"
context.lineWidth = 8
context.stroke();
context.fillStyle = "blue"
context.fill()


class Circle{
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x,
        this.y = y,
        this.r = r,
        this.startAngle = startAngle,
        this.endAngle = endAngle,
        this.fillColor = fillColor
    }
    draw(){
        context.beginPath()
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle)
        context.stroke()
        context.fillStyle = this.fillColor
        context.fill()
    }
 
}

//draw one circle
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();

//Draw circles every 100ms
const drawRandomCircles = setInterval(()=>{
    let randomX = Math.random() * 300
    let randomY = Math.random() * 150
    let randomRadio = Math.random() * 150
    let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
    let circle = new Circle(randomX, randomY, randomRadio, 0, 2 * Math.PI, randomColor)
    circle.draw()      
}, 100)
//Stops the previous function after 20 seconds
setTimeout(()=>{clearInterval(drawRandomCircles)}, 20000)


