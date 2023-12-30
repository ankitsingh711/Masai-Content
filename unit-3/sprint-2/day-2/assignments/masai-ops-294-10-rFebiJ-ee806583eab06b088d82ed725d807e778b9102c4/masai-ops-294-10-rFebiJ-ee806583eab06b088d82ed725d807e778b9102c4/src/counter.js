
class Counter {
  constructor(){
    this.counter=0;
  }
  addValue(x){
    this.counter+=x;
    return this.counter;
  }
  reduceValue(x){
    this.counter-=x;
    return this.counter;
  }
  resetValue(){
    this.counter = 0;
    return this.counter;
  }
  getValue(){
    return this.counter;
  }
}

const c = new Counter();
c.addValue(5)
c.reduceValue(1)
c.resetValue()
c.getValue()

// Do not change this
export default Counter;
