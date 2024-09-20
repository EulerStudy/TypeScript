// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface User2 {
  name: string
  readonly age: number
  isValid?: boolean
}

const euler: User2 = {
  name: 'Euler',
  age: 20,
  isValid: true,
}

euler.isValid = false
euler.age = 22    // error

const Wisley: User2 = {
  name: 'Wisley',
  age: 20
}
