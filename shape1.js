// Shape Class
class Shape {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    allShapes([square, rectangle, circle, triangle]) {
  
      console.log(`The Area of Square having length ${square.x}cm is ${Math.pow(square.x, 2)}cm²`);
  
      console.log(`The Area of Rectangle having length ${rectangle.x}cm & breadth ${rectangle.y}cm is ${rectangle.x * rectangle.y}cm²`);
  
      console.log(`The Area of Circle havind radius ${circle.x}cm is ${3.14 * Math.pow(circle.x, 2)}cm²`);
  
      console.log(`The Area of Triangle having base ${triangle.x}cm & height ${triangle.y}cm is ${0.5 * triangle.x * triangle.y}cm²`);
  
      console.log(`Cumilative Area:-${(Math.pow(square.x, 2)) + (rectangle.x * rectangle.y) + (3.14 * Math.pow(circle.x, 2)) + (0.5 * triangle.x * triangle.y)}`);
  
    }
  }
  
  // Square
  class Square extends Shape {
    constructor(length) {
      super(length);
    }
  }
  
  // Rectangle
  class Rectangle extends Shape {
    constructor(length, breadth) {
      super(length, breadth);
    }
  }
  
  // Circle
  class Circle extends Shape {
    constructor(radius) {
      super(radius);
    }
  }
  
  // Triangle
  class Triangle extends Shape {
    constructor(base, height) {
      super(base, height);
    }
  }
  
  
  let square = new Square(20);
  
  let rectangle = new Rectangle(5, 3);
  
  let circle = new Circle(5);
  
  let triangle = new Triangle(7, 4);
  
  let shape = new Shape();
  
  // Output
  shape.allShapes([square, rectangle, circle, triangle])
  
  