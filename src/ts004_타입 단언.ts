// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
const el = document.querySelector('body') as HTMLBodyElement
el.textContent = 'Hello World!'

const e2 = document.querySelector('body')
if (e2) {
  e2!.textContent = 'Hello World!'
}

// 2)
function getNumber(x: number | null | undefined) {
  return Number((x as number).toFixed(2))
}
getNumber(3.1415926535)
getNumber(null)

function getNumber2(x: number | null | undefined) {
  if(x) {
    return Number(x!.toFixed(2))
  }
}
getNumber2(3.1415926535)
getNumber2(null)

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2))
  }
  return (x as string).toUpperCase()
}

getValue('hello world', false)
getValue(3.1415926563, true)
