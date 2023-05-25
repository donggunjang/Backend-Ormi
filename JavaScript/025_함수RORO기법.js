// 참고
// https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/
function mob(
    x,
    y,
    hp,
    mp,
    attack,
    depence,
    name,speed
) {
    console.log(x,y,hp,mp,attack,depence,name,speed)
}

mob(10, 20, 100, 200, 100, 10, '고블린', 100)
mob(x=10, y=20, 100, 200, 100, 10, '고블린', 100)
mob(y=10, x=20, 100, 200, 100, 10, '고블린', 100)

// 내가 원하는 곳에 값을 주는 것이 불가
// 그래서 RORO 기법이 생겼다.

function mob({
    x: 100,
    y: 200,
    hp: 300,
    mp: 300
}) {
    console.log(x, y, hp, mp)
}

mob({x:200, y:200, hp:300, mp:400})


///////////

// 초깃값이 입력이 안된 것들은 undefined
function mob({
    x = 100,
    y = 200,
    hp = 300,
    mp = 300
}) {
    console.log(x, y, hp, mp)
}

mob({x:200, y:200, hp:300, mp:400})

////////

let one
let two
let three

let test = {one, two, three}

   // 파라미터                // 아규먼트
let {one, two, three} = {one:10, two:20, three:30}

// one은 변수
let {one=100, two, three} = {one:10, two:20, three:30}

// 값을 안 넣었을 때에도 나오게 하는 방법
function mob({
    x = 100,
    y = 200,
    hp = 300,
    mp = 300
} = {}) {
    console.log(x, y, hp, mp)
}