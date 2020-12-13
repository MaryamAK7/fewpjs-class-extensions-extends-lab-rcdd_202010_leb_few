// Your code here
class Polygon {
  constructor(array){
    this.array =array;
  }
  
  get countSides(){
    return this.array.length;
  }
  
  get perimeter(){
    let sum = 0;
    for(let val of this.array){
      sum+=val;
    }
    return sum;
  }
  
}
class Triangle extends Polygon{
  get isValid(){
    for(let val of this.array){
      if()
    }
  }
  
}