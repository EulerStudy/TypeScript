// 타입 가드(Guards)

function logText(el: Element) {
  console.log(el.textContent)
}

const h1El = document.querySelector('h1') as HTMLHeadingElement
logText(h1El)

const h2El = document.querySelector('h1')
if (h2El) {
  logText(h2El)
}

const h3El = document.querySelector('h1')
if (h3El instanceof HTMLHeadingElement) {
  logText(h3El)
}

function add3(val: string | number) {
  let res = 'Result => '
  if (typeof val === 'number') {
    res += val.toFixed(2)
  } else {
    res += val.toUpperCase()
  }
  console.log(res)
}

add3(3.141592)
add3('Hello World')

