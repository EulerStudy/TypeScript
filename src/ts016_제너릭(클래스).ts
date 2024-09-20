// 제너릭(Generic)
// 클래스

class E<T> {
  constructor(public payload: T) {}
  getPayload() {
    return this.payload
  }
}
const abc = new E({
  name: 'Wisley',
  // ?
  emails: ['wisly@naver,com']
})

interface userAType {
  name: string
  age: number
  isValid: boolean
}
interface userBtype {
  name: string
  age: number
  emails: string[]
}
const euler6 = new E<userAType>({
  name: 'Euler',
  age: 20,
  isValid: true,
})
const wisley3 = new E<userBtype>({
  name: 'Wisley',
  age: 20,
  emails: ['wisly@naver,com']
})
