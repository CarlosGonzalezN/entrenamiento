const expess = require('express')
const { listen } = require('express/lib/application')
const app = expess()
const port = 3001
const { mediasFuntion } = require('./examples/medias')
const { arrFuntion } = require('./examples/frutas')
const {fizzBuzz}= require('./examples/fizbuzz')
const {tabalMult}= require('./examples/victor-robles/ejer1')

app.listen(port,()=>{
/*     ar1=['banana', 'anana', 'frutilla']
    arrFuntion(ar1)
    
 */
  /*   const ar1 =[1,2,3,4,5,6,7,1,3,4,5,6,6,2,1,7,3,3]
    mediasFuntion(ar1) */
   tabalMult(2)
}

)