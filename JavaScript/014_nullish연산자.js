// https://ko.javascript.info/nullish-coalescing-operator
//나온지 얼마되지 않았기 때문에 선임이 모를 수 있다.

let firstname = null
let lastname = null
let nickname = 'licat'

firstname ?? lastname ?? nickname ?? '익명의 사용자'

let a = null
let b = 10
let c = null

a ?? 100 // if null 이냐? 그렇다면 100을 넣겠다!
a ?? b
a ?? b ?? c // => (a ?? b) ?? c


//nullish 연산자와 단락평가의 차이점
let height = 0

height || 100 // 100
height ?? 100 // 0

// || : 0, null, undefined
// ?? : null, undefined