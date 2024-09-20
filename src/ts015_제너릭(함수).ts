// 제너릭(Generic)
// 함수

interface Obj {
  x: number
}
type Arr = [number, number]

function toArray(a: string, b: string): string[]
function toArray(a: number, b: number): number[]
function toArray(a: boolean, b: boolean): boolean[]
function toArray(a: Obj, b: Obj): Obj[]
function toArray(a: Arr, b: Arr): Arr[]
function toArray(a: any, b: any) {
  return [a, b]
}

console.log(
  toArray('Euler', 'Anderson'),
  toArray(1,2),
  toArray(true, false),
  toArray({ x: 1}, { x: 2}),
  toArray([1, 2], [3, 4])
)

function toArr<T>(a: T, b: T) {
  return [a, b]
}

console.log(
  toArr<string>('Euler', 'Anderson'),
  toArr(1,2),
  toArr(true, false),
  toArr<Obj>({ x: 1}, { x: 2}),
  toArr([1, 2], [3, 4, 5]),
  toArr<Arr>([1, 2], [3, 4])
)
