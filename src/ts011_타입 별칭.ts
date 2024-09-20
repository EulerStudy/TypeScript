// 타입 별칭(alias)

type TypeA = string
type TypeB = string | number | boolean
type UserC = {
  name: string
  age: number
  isValid: boolean
} | [string, number, boolean]

const User7: UserC = {
  name: 'euler',
  age: 20,
  isValid: true,
}
const User8: UserC = ['Even', 30, false]

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case 'string':
      return param.toUpperCase()
    case 'number':
      return param.toFixed(2)
    default:
      return 'Boolean'
  }
}

type TypeUser = {
  name: string
  age: number
  isValid: boolean
}
interface InterfaceUser {
  name: string
  age: number
  isValid: boolean
}

const euler5: InterfaceUser = {
  name: 'Euler',
  age: 20,
  isValid: true,
}