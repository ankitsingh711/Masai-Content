class Counter {
  constructor(){
    this.value=0;
  }
  getValue(){
    return this.value;
  }
  reduceValue(x){
    let ans = this.value-=x;
    return ans;
  }
  addValue(x){
    let ans = this.value+=x;
    return ans;
  }
  resetValue(){
    this.value=0
  }
}

// Do not change this
export default Counter;
