const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
arr.pop();
console.log(arr); // [1, 2, 3]

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2);

arr1[0] = 10;
// arr1 = [10, 20];
console.log(arr2);

// 비교해보세요.
let value1 = 10;
let value2 = value1;
console.log(value2);

value1 = 20;
console.log(value2);

const arr4 = [1, 2, 3, 4, 5];
// splice() 메소드는 배열의 요소를 추가, 제거 또는 교체
// array.splice(start, deleteCount, chageitem)


const arr5 = [1, 2, 3, 4, 5];
// splice() 메소드는 배열의 요소를 추가, 제거 또는 교체
// array.splice(start, deleteCount, changeitem)
arr5.splice(1, 0, 100);
arr5

arr5.splice(1, 0, 1000);
arr5

arr5.splice(1, 2, 10000, 20000)
arr5

const arr6 = [10, 20, 30, 40, 50, 60]
arr6.slice(2, 5)

// 사전식 정렬 
const arr7 = [1, 11, 2, 3, 7, 8, 22, 5]
arr7.sort()

arr7.sort((a, b) => a - b)
arr7.sort((a, b) => b - a)

// forEach 자주사용합니다.
// forEach는 반복만 합니다.
// 새로운 arr를 만들고 싶다면 map을 이용

const arr8 = [1, 11, 2, 3, 7, 8, 22, 5]
arr8.forEach((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr)
})

const arr9 = [1, 11, 2, 3, 7, 8, 22, 5]
arr9.forEach((v, i) => {
    console.log(v)
    console.log(i)
})

/* 
<body>
    <div id="0"></div>
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
    <div id="4"></div>
    <div id="5"></div>
    <div id="6"></div>
    <div id="7"></div>
</body> 
*/

const arr10 = [1, 11, 2, 3, 7, 8, 22, 5]
arr10.forEach((v, i) => {
    const tag = document.getElementById(i)
    tag.innerHTML = v
})

const arr11 = [1,2,3,4,5,6,7,8,9,10];
const newArr = arr11.filter(el => el % 2 === 0);

console.log(newArr);

// https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript
function solution(array, n) {
    return array.filter(v => v == n).length;
}

[10, 20, 30, 40].reduce((a,c)=> {
    console.log(a, c)
    return a + c
})

[10, 20, 30, 40].reduce((a,c)=> a + c, 0)

// 여기서 in 앞에 나오는 값은 key(index) 값
10 in [10, 20, 30, 40]

const arr12 = ['hello', 'world', 'hojun']
arr1.join('!') // hello!world!hojun

// map은 아래 형태보다, 데이터를 뽑아내는 형태로 많이 사용.
[1, 2, 3, 4].map(x => x**2)
[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map(x => x.age)

////

[[10, 20], [20,30], [30, 40]].map(v => v)
[[10, 20], [20,30], [30, 40]].map(v => v[0])

// 성이 3글자라는 전재를 하고
// 3글자씩만 뽑아내기ㅣ
['leedonggun', 'sindonggun', 'kimdonggun'].map(v=>v[0])
['leedonggun', 'sindonggun', 'kimdonggun'].map(v=>v.slice(0,3))
['leedonggun', 'sindonggun', 'kimdonggun'].map((v, i) => [v.slice(0,3), i])

[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map(v => v['age'])


////
[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map((v, i, obj) => {
    console.log(v, i, obj)
    return v
})


// python : map(function, iterable)
// javascript : iterable.map(function)

let data = [{
    name: 'lee hojun',
    age: 10
}, {
    name: 'kim junho',
    age: 20
}, {
    name: 'sin sunghun',
    age: 30
}]



// 원하는 데이터
// 위 데이터를 가지고 아래와 같이 새로운 array를 만들기
data.map((v, i) => [i, v.name.split(" ")[1], v.age -1])

fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=> {
        let pd = data.length;
        let price_avg = data.map((x) => x["price"]).reduce((a, c) => a + c, 0) / pd;
        console.log(`product: ${pd}개 평균가격: ${price_avg}`)
    })

