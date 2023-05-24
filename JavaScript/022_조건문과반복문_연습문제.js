// 1부터 100까지 더하는 예제
// for(초깃값;조건;증감값)

// 1번 풀이
let s = 0
for (let i = 0; i < 101; ++i){
    s += i
}
s

// 2번 풀이
let s = 0
let i = 1
while (i < 101){
    s += i
    ++i
}
s

new Array(10)
new Array(10).fill(1)
new Array(10).fill(1)
new Array(10).fill(1).map((_, i) => i)
new Array(10).fill(1).map((_, i) => i+1)

// 3번 풀이
let range = new Array(100).fill(1).map((_, i) => i+1)
let s = 0
for (const i of range) {
    s += i
}

// 4번 풀이
new Array(100).fill(1).map((_, i) => i+1).reduce((a, c) => a + c, 0)

// 1부터 100까지 짝수만 더하는 예제
s = 0
for (let i = 0; i < 101; i++) {
    if (i % 2 === 0){
        s += i
    }
}

let s = 0
for (let i = 0; i < 101; i += 2) {
    s += i
}
s

let s = 0
let i = 0
while (i < 101) {
    if (i % 2 === 0) {
        s += i
    }
    ++i
}
s


// [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]에서 5보다 작은 수만 다 더해주세요.
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s = 0
for (const i of data) {
    if (i < 5) {
        s += i
    }
}

let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s = 0
while (i < data.length) {
    if (data[i] < 5) {
        s += data[i]
    }
    i++

}
s

data.filter(v => v < 5).reduce((a, c) => a + c, 0)

data.map(v => v < 5? v : 0)
data.map(v => v < 5? v : 0).reduce((a, c) => a + c, 0)

data.reduce((a, c) => c < 5 ? a + c: a, 0)

data.map(v => {
    if (v < 5){
        return v
    }
    return 0
})

// forEach
let s = 0
data.forEach(v => v < 5 && (s += v))

// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']에서 모든 숫자를 다 더해주세요.
// 다양하게 풀어보세요. for, while, filter, map, reduce...

let data2 = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
let s = 0
for (const i of data2){
    s += parseInt(i)
}

function typeCheck(value){
    return Object.prototype.toString.call(value).slice(8, -1)
}

for (const i of data2){
    if (typeCheck(i) === 'Number'){
        s += i
    }
}
s

let data2 = [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
let s = 0
let i = 0
while (i < data2.length) {
    if (typeof(data2[i]) === 'number') {
        s += data2[i]
    }
    i++
}
s

//
data2.reduce((a, c) => a + parseInt(c), 0)
data2.map(v => parseInt(v)).reduce((a,c) => a+c, 0)

// 모음 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

// 정답
function solution(my_string) {
    return Array.from(my_string).filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join('')
}

//
new Array('hello world')
'hello world'.split('')
Array.from('hello world')

// v in 'aeiou' 이렇게 쓰고 싶을때
Array.from('hello world').filter(v => ['a', 'e', 'i', 'o', 'u'].includes(v))

Array.from('hello world').filter(v => ['a', 'e', 'i', 'o', 'u'].includes(v).joun(''))

// 용돈은 매년 2배씩 오른다.
// 올해 받은 용돈은 10000원
// 나이는 8살
// 30만원 이상이 되면 용돈이 더이상 오르지 않는다.
// for와 continue 문법을 써서 8살부터 35살까지 받은 용돈의 종합을 구하세요.

money = 10000
sum = 0
for (i=8; i < 36; i++){
    sum += money
    if (money >= 300000) {
        continue
    }
    money *= 2
}

// 문제 링크
// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string){
    my_string
        .split("")
        .filter((v) => !isNaN(v))
        .map((v) => v * 1)
        .sort((a, b) => a - b);
}
