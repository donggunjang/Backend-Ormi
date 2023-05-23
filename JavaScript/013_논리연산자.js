// 논리 연산자(&&, ||, !)
let x = true; // 1
let y = false; // 0

// && 는 곱
// || 는 합
// ! 는 부정

x && y;
x || y;
!y;
// 실무에서 많이 사용.
!!y;
!!'hello'

!!NaN // false
!!null // false
!!undefined // false

!![] // true // 이렇게 사용 X
Number.isNaN({})
Number.isNaN([])
// 와 object의 길이를 함께 판단하면 된다.

////
// javascript에서는 아래와 같은 단락평가를 자주 사용

null && 'hello'
'world' && 'hello'

// 단락 평가는 거의 || 를 사용합니다.

// let name = ''
// name = name || '이름이 입력되지 않음'

// let name = 'hojun'
// name = nmae || '이름이 입력되지 않음'

// 보통은 3항 연산자 + 단락평가로 사용합니다.
let 로그인여부 = true
로그인페이지 = 로그인여부 && '<h1>환영합니다 고객님</h1>'
로그인페이지

let pw = ''
pw = pw || 'pw가 입력되지 않았습니다.'


