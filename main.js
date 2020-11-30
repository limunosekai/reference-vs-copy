// Start with strings, numbers and booleans

let age = 100;
let age2 = age;

console.log(age, age2); //100, 100
age = 200;
console.log(age, age2); //200, 100

let name = 'lim';
let name2 = name;

console.log(name, name2); //lim lim
name = 'kim';
// 출력값으로 kim kim을 얻기 위해선 name2 = name;을 다시 걸어줘야한다.
console.log(name, name2); //kim lim
// original을 바꾸어도 reference는 바뀌지 않는다.

// Array reference
const players = ['lim', 'kim', 'park', 'hong'];
const team = players;

console.log(players, team);

players[3] = 'yang';        //위의 string,number와는 다르게

console.log(players, team); //original 혹은 reference를 update하면 두 값이 모두 바뀌어있다.

// Array copy
// 1. slice 활용 
const team2 = players.slice(); //slice는 새로운 배열 반환, 원본 변경 x
team2[3] = 'bang';
console.log(players, team2);

// 2. concat 활용
const team3 = [].concat(players); //concat은 추가된 새로운 배열 반환, 원본이 변경 x
team3[3] = 'lee';
console.log(players, team3);

// 3. ES6 spread 활용
const team4 = [...players]; // 새로운 배열 객체 생성
team4[3] = 'kang';
console.log(players, team4);

// 4. ES6 Array.from() 활용
const team5 = Array.from(players);
team5[3] = 'han';
console.log(players, team5);


// Object Reference

const person = {
  name: 'lim boss',
  age: 30
};

const boss = person;
boss.number = 99;

console.log(person); //array와 마찬가지로 object도 original 혹은 reference를 update하면 두 값이 모두 바뀌어있다.

// Object copy
// 1. ES6 Object.assign 활용
const boss2 = Object.assign({}, person, { number: 1});
console.log(person, boss2); // person에 속성을 '덮어쓰기'하여 병합한 새로운 target 반환 / output: boss2의 number값만 바뀌어있음

// 2. ES6 spread 활용
let boss3 = {...person}; //person을 가져와서 새로운 object 생성
boss3.age = 99;
console.log(person, boss3); // output: boss3의 age만 바뀌어있음

// 위의 방법은 1 level deep이므로 객체 안의 객체까지 copy하지 못한다.

const lim = {
  name: 'lim',
  age: 30,
  social: {
    twitter: '@31999213',
    facebook: 'powerlsh0103'
  }
};

const dev = Object.assign({}, lim);
dev.social.twitter = '@26059213';
console.log(lim.social.twitter); // output: '@26059213', Object.assign을 사용하였음에도 original도 바뀌어있다.

// Deep clone을 위해서 약간의 trick을 이용

const dev2 = JSON.parse(JSON.stringify(lim));
dev2.social.twitter = '@wow';
console.log(lim.social.twitter); // output: '@26059213', 원본이 @wow로 바뀌지 않았다.