// 문자
let str: string
let red: string = "Red"
let green: string = 'Green'
let myColor: string = `My color is ${red}.`
let yourColor: string = 'Your color is' + green

// 숫자
let num: number
let integer: number = 6
let float: number = 3.14
let infinity: number = Infinity
let nan: number = NaN

// 불린
let isBoolean: boolean
let isDone: boolean = false

// Null / Undefined
let nul: null
let und: undefined
nul = null
console.log(nul)
console.log(und)

// 배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry']
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
const union: (string | number)[] = ['Apple', 1, 2, 'Banana']

// 객체
const obj: object = {}
const arr: object = []
const func: object = function () {}

interface User {
  name: string
  age: number
  isValid: boolean
}

const userA: User = {
  name: 'Euler',
  age: 20,
  isValid: true
}

const userB: User = {
  name: 'Wisely',
  age: 20,
  isValid: true
}

// 함수
const add: (x: number, y: number) => number = function(x, y) {
  return x + y
}
const add2 = function(x: number, y: number): number {
  return x + y
}
const ad: number = add(1, 2)

const hi: () => void = function () {
  console.log('Hi')
}
const hi2 = function (): void {
  console.log('Hi')
}
const h: void = hi()

// Any
let hello2: any = 'Hellow world'
hello2 = 123
hello2 = false
hello2 = null
hello2 = {}
hello2 = []
hello2 = function() {}

// Unknown
const a: any = 123
const u: unknown = 123

const any: any = a
const boo: boolean = a
const num2: number = a
const arr2: string[] = a
const obj2: {x: string, y: string} = a

// Tuple
const tuple: [string, number, boolean] = ['a', 1, false]
const user: [number, string, boolean][] = [[1, 'Euler', true], [2, 'Wisely', false]]

// Void
function hihi(msg : string): void {
  console.log(`Hello ${msg}`)
}
const hi3: void = hihi('world')

// Never
const nev: [] = []
const nev2: never[] = []
nev.push(3)   // error, 아무런 데이터도 넣을 수 없다.

// Union
let uni: string | number
uni = 'Hello World'
uni = 123

// Intersection
interface User {
  name: string,
  age: number
}

interface Validation {
  isValid: boolean
}

const he: User & Validation = {
  name: 'Euler',
  age: 20,
  isValid: true
}


