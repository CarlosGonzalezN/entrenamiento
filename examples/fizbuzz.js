
const fizzBuzz=(ar) =>{
let c = ar.length
let i = 0
let result = []
for(i;c>i;i++){
  if(ar[i]%3 && ar[i]%5 ===0){
    result.push('FizzBuzz 2')
  }
  if(ar[i]%3){
     result.push('Fizz 3')
  }
  if(ar[i]%5){
    result.push('Buzz 5')
  }
}
console.log(result);
return result

}
module.exports={
    fizzBuzz
}