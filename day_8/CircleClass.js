class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    Circle();
    Circle(radius) {
        return radius;
    }

    Circle(radius,color) {
        
        return radius,color;
    }

    getRadius() {
        console.log(this.radius);
    }


    getColor() {
        console.log(this.color);
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        let Circle = [this.radius,this.color];
        let string =  Circle.toString();
        return string;
    }

    getArea() {
        let area = 3.14*this.radius*this.radius;
        console.log(area);
    }

    getCircumference() {
        let Circumference = 2*3.14*this.radius;
        console.log(Circumference);
    }

}