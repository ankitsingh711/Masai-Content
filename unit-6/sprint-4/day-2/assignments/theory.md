Question-1 : What is the difference between Props and State? 
Solution -> Props are knows as properties it can be used to pass data from one component to another. Props can be modified, read-only, and immutable. Whereas State represents a part of the application that can change. Each component can have its State. The State is Mutable and It is local to component only.

Question-2 : Explain the useState API?
Solution: useState takes initial state as parameter and returns array with two values and they are state and setState means what is the value of variables we want to change and one function which will take changes value of state and useState will return both the variable and the function. It is used to change the state inside the components.

Question-3 : Explain the how map, filter, reduce ?
Solution : Map, filter and reduce all will return an array. If we talk about map then map iterate over the array and change the value of the array but it doesn't effect the length of the array. 

e.g -> let arr = [2,3,4,5,6];
let mappedArray = arr.map((elem)=> { return  elem*2 });
console.log(mappedArray); 
// Output will be -> [4,6,8,10,12];

Filter : Filter iterate over the array but it returns the array with the decreased length of the original array what we have filtered. 

e.g -> let arr = [3,54,234,09,23,56,87];
let filteresArray = arr.filter((elem) => {
    return elem % 2==0;
})// It will return those numbers which is even;

output -> [54,234,56];

Reduce : It receives three value as a parameter, first is elem and second is array and third is initial value in which we want to iterate over the array and wants to do the operation.

let arr = [34,55,21,345,67,7,88,64];
let reducedArray = arr.reduce((elem,arr)=>{
    return sum+elem;
}, sum)
// The output will retrun the value by adding all the values of the array.

