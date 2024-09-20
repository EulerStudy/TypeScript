// 인터페이스(Interface)
// 확장

interface FullName {
  firstName: string
  lastName: string
}
interface FullName {
  middleName: string
}
const fullName: FullName = {
  firstName: 'Tomas',
  middleName: 'Sean',
  lastName: 'Connery',
}

// 인터페이스(Interface)
// 상속

interface UserA {
  name: string
  age: number
}
interface UserB extends UserA {
  isValid: boolean
}
const euler4: UserA = {
  name: 'euler',
  age: 20,
}
const wisley2: UserB = {
  name: 'wisley',
  age: 20,
  isValid: false,
}
