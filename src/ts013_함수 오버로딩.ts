// 함수 - 오버로딩(Overloading)

// 1)
function add3(a: string, b: string) {
  return a + b

}
function add4(a: number, b: number) {
  return a + b
}
add3('hello ', 'world')
add4(1, 2)

// 2)
function add5(a: string, b: string): string  // 타입 선언
function add5(a: number, b: number): number  // 타입 선언
function add5(a: any, b: any) {  // 함수 구현
  return a + b
}
add5('hello ', 'world')
add5(1, 2)
