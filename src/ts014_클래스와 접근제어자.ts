// 클래스

// 접근 제어자(Access Modifiers)
// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
//          접근제어자를 붙이지 않으면 기본적으로 public
//          하지만 매개변수에서는 생략할 수 없음
// protected - 나와 파생된 후손 클래스 내에서 접근 가증
// private - 내 클래스만 접근 가능

class A {
  public first: string = 'euler'
  public last: string
  age: number
  constructor(first: string, last: string, age: number) {
    this.first = first
    this.last = last
    this.age = age
  }
  protected getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class B extends A {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class C extends B {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}

const eul = new A('euler', 'kim', 20)
console.log(eul.first)
console.log(eul.last)
console.log(eul.age)

// class A와 같다.
// public 매개변수에서는 생략할 수 없다.
class D {
  constructor(
    public first: string, 
    public last: string, 
    public age: number) {
  }
  protected getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
