// 인터페이스(Interface)
// 함수 타입 - 호출 시그니처(Call Signature)

interface GetName {
  (param: string): string
}
interface User3 {
  name: string
  age: number
  getName: GetName
}
interface User4 {
  name: string
  age: number
  getName: (param: string) => string
}
const euler2: User3 = {
  name: 'Euler',
  age: 20,
  getName(message: string) {
    console.log(message)
    return this.name
  }
}

euler2.getName('Hello')
