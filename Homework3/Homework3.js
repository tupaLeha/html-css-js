x =  prompt('Enter your num')
if (x >=0) {
    alert('Число положительное!')
} else if (x<0) {
    alert('Число отрицательное')
} else {
    alert('Pls enter the number')
}
//
let sum = [5,10,15,20,25,30,35,40,45,50].reduce(add,0)
function add(accumulator,a) {
    return accumulator + a
}
console.log(sum)
//
let numbers = [254,115,78,25,91,45,37]
numbers.forEach(function (num){
    if(num > 50) {
        console.log(num)
    }
})