const numbers = [1,2,3,4]
const fruits = ['apple','banana','cherry']

const a = numbers.map(numbers => {
  return number < 3
})
console.log(a) // [true, true, false, false]

const b = numbers.filter(number => {
  return number < 3
})
console.log(b) // [1,2]