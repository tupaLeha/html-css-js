let letters = []
let y = 'Backend As A Service'
let anotherY = y.split(' ')
anotherY.forEach(function (el){
    letters.push(el[0])
})
console.log(letters)
let lettersNew = letters.join('')
console.log(lettersNew)
//
function newFunction(ArGuMeNt) {
    if(Number.isInteger(ArGuMeNt)) {
        return alert(new Date())
    } else {
        alert('Неверный тип данных')
    }
}

console.log(newFunction(5))