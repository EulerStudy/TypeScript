// npm i lodash
// lodash.d.ts 파일 만들기
import _ from 'lodash'

const str = 'the brown fox jumps ovr the lazy dog.'

console.log(_.camelCase(str))
console.log(_.snakeCase(str))
console.log(_.kebabCase(str))

// 파일의 이름이 lodash.d.ts가 아니고 main.d.ts라면 경로 설정을 따로 명시해줘야 한다.
/// <reference path="./main.d.ts" />