// 함수 - 명시적 this

interface Cat {
  name: string
  age: number
}
const cat: Cat = {
  name: 'Lucy',
  age: 3
}
function hello3(this: Cat, message: string) {
  console.log(`Hello ${this.name}, ${message}`)
}
hello3.call(cat, 'You are pretty awesome!')
