function f(x, y) {
    return x + y
}




// 1. 중괄호가 없고 return 되는 코드 1줄이면 return을 생략 
let f2 = (x, y) => x * y
// python에서는 lambda의 위상이 재상용하지 않는 함수에서 많이 사용
// JavaScript에서는 화살표 함수가 일반함수 만큼 자주사용됩니다.

// 2. 중괄호가 생기면 return이 있어야 한다.
let f3 = (x, y) => {
    let z = x + y
    return z
}

// 3. 파라미터가 1개이면 소괄호도 생략할 수 있다.
let f4 = x => x + x

// 연습 문제 1. 반지름이 입력되면 원의 넓이를 구하는 함수
let circle = x => (x ** 2) * 3.14

// 연습 문제 2. 여러 값이 입력되었을 때, 가장 큰값과, 가장 작은 값 총합을 출력하는 함수
// 입력 값 10, 20, 30 ,40

function f6(a, b, c, d) {
    max = Math.max(a, b, c, d)
    min = Math.min(a, b, c, d)
    sum = a + b + c + d
    return [max, min, sum]
}

let f7 = (a, b, c, d) => {
    max = Math.max(a, b, c, d)
    min = Math.min(a, b, c, d)
    sum = a + b + c + d
    return [max, min, sum]
}