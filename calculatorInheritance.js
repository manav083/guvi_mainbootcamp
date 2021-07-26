class operations{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    addition(){
        var add = this.num1 + this.num2;
        console.log(add);
    }
    subtraction(){
        var difference = this.num1 - this.num2;
        console.log(difference);
    }
    multiplication(){
        var product = this.num1 * this.num2;
        console.log(product);
    }
    divsion(){
        var divide = this.num1/this.num2;
        console.log(divide);
    }
}

class display extends operations{
    constructor(num1,num2){
        super(num1,num2);
    }
    getData(){
        this.addition();
        this.subtraction();
        this.multiplication();
        this.divsion();
    }

}

var dd = new display(20,5);
dd.getData();
