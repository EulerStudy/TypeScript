// 인터페이스(Interface)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

// 배열
interface Fruits {
  [item: number]: string
}
const fruits2: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits2[1])

// 객체
interface User5 {
  [key: string]: unknown
  name: string
  age: number
}
const euler3: User5 = {
  name: 'euler',
  age: 20,
}
euler3['isValid'] = true
euler3['emamil'] = ['eulerlab@naver.com', 'euleroj@naver.com']
console.log(euler3)

interface Payload {
  [key: string]: unknown
}
function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key])
  }
}

interface User6 {
  [key: string]: unknown
  name: string
  age: number
  isValid: true
}
const wisley: User6 = {
  name: 'wisley',
  age: 20,
  isValid: true,
}
logValues(wisley)