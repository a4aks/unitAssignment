
class Rectangle{
    #length;
    #breadth;
    constructor(x,y){
        this.#length = x;
        this.#breadth = y;
    }

    getArea(){
        console.log(`the area is: ${this.#length * this.#breadth}`)
    }
}

class Square extends Rectangle {
     constructor(x){
         super(x,x)
     }
}

var rec = new Rectangle(10,20)
var sqr = new Square(50)
rec.getArea()
sqr.getArea()