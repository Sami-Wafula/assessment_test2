function nearestInt(x){
    let num = Math.sqrt(x);
    if (num > 0 && num % 2 === 0 ){
        return num;
    } else {
        num = (num / 2)
    }
}

console.log(nearestInt(25))
