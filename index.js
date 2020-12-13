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
    if(this.array[0]+this.array[1] > this.array[2]) return "valid";
    else return "unvalid";
  }
  
}

class Square extends Polygon{
  get isValid(){
    if(this.array[0] === this.array[1] && this.array[1] === this.array [2]&& this.array[2] === this.array[3])
    return "valid"
    else return "unvalid"
  }
  
}






