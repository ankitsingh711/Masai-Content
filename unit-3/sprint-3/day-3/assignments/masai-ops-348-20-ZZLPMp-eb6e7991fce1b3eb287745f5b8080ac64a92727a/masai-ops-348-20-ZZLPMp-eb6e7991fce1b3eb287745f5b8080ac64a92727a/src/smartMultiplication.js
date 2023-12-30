function smartMultiply(param1, param2, param3) {
   function one(x=1)
   {
    return param1*param2*param3*x;
   }
   function two(){
    return param1*param2;
   }
   function three(){
    return param1*2;
   }
   if(param1 && param2 && param3)
   {
    return one;
   }
   else if(param1 && param2){
    return two;
   }else{
    return three;
   }
}

export default smartMultiply
