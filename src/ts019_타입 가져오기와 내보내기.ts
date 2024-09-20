import { getFullName, User } from './ts019_user'

const euler: User = {
  firstName: 'euler',
  lastName: 'kim',
  age: 20,
  isValid: true
}
const fullName = getFullName(euler)

console.log(fullName)
console.log(euler.isValid)