const mediasFuntion = (ar1)=>{
    let i = ar1.length
    let index = 0
    for(index; i> index; index++){
        if(ar1[index]%2===0){
            console.log(ar1[index], 'es par');
        }
        else{
            console.log(ar1[index], 'es impar'); 
        }
    }
}

module.exports = {
    mediasFuntion
}