let arr = [2,3,0,1,4,1]
console.log(arr.map((it)=>it*2));
console.log(arr.filter((it)=>it%2))
console.log(arr.filter((it)=>it==1))
console.log(...arr)   //spread operator ==array to value print
console.log(arr.reduce((it,acc)=>it+acc,0)) //reduce() sume of array
console.log(arr.reverse());
// program to reverse a string
let str = "welcome to Appinventive";
console.log(str.split('').reverse().join(''));
// program to reverse a word
function reverseInPlace(str) {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    for (var i = 0; i < words.length; i++) {
       result += words[i].split('').reverse().join('') + " ";
    }
    return result
  }
  console.log(reverseInPlace("abd fhe kdj"))
  
//reference types
let newarr = [...arr]; //arr
newarr.pop();
console.log(newarr)
arr.push(10);
console.log(arr)
console.log(newarr)

//rest parameter
function add(...number)
{
    let sum=0
    console.log(number)
    for(let num of number)
    {
        sum+=num;
    }
console.log(sum)
}
add(1,2,3)

//DOT VS BRACKET NOTATION
let fruits ={
    apple:"1",
    mango:"2",
    orange:"3"
}
console.log(fruits.apple)
let seletedFruit ='mango';
console.log(fruits[seletedFruit])

//js argument
function adds()
{
    let sum=0;
    console.log(arguments)
    for(let arg of arguments)
    {
        sum+=arg
    }
    console.log(sum)
}
adds(2,3,5,6)

//DEEP VS SHALLOW COPY
const cart={
    fruits:['a','b'],
    total:2,
};
const items = {...cart};//cart
items.total=4;
items.fruits.pop()
console.log(cart);

const deep = JSON.parse(JSON.stringify(cart));
deep;
cart.fruits.pop()
deep;
cart;

//BIND VS CALL VS APPLY
var name = 'x';
function say(title = 'mr')
{
    return title +' '+ this.name;
}

const person = {
    name:'aswin',
    age:26,
}

const tell =say.bind(person)
console.log(tell());
console.log(say.call(person,'mrs'));
console.log(say.apply(person,['mrs']));

//Object shorthand
const names = 'ashwani';
const age = 3;
const persons ={names,age};
persons
console.log({names,age}) //identify multiple variable

//////second profit export me
function sum(a,b)
{
    return a+b;
}

function product(a,b)
{
    return a*b;
}
export {sum, product}

// SET DATA TYPE
const set = new Set();
set.add(1);
set.add(2); // set m humar dobara wahi cheej nahi add kar sakte hai unique hi aaigi
set;
set.add(1);
set.add(3);
set;

const food = [
    {name:'a',type:'fruit'},
    {name:'b',type:'fruit'},
    {name:'c',type:'fruit'},
    {name:'d',type:'fast'},
    {name:'e',type:'fast'},

];
const types= food.reduce((acc,it)=>acc.add(it.type),new Set());
console.log(types)
console.log([...types])

//De-structuring
const arr1 =[3,4,5,6];
let [a,b,...c]=arr1
a;
b;
c;

[a,b] =[b,a] //swape
a;
b;

//De-structuring Object
const person1={name2:"x",age2:"y"}
const {age2,name2} = person1;
name2;
age2

const obj = {x:1,y:2,z:{c:3}}
const {x,y,z:{c:d}} = obj;
x;
y;
d;

const obj2 = {A:1,b:2,c:3,d:4}
const {A , ...rest} = obj2;
A;
rest;

//CURRYING fn(a)(b)(c)





///Random generate otp 4 digit
const r = Math.random();
r;
const otp= Math.round(r*9000+1000);
otp;

//split and join





//Array sorting number/string
const arr2 = [1,3,4,1,2];
arr2.sort((a,b)=>{
    return b-a;//asending order a-b , descending order = b-a
})
arr2;

const str2 = ['adc','aaa','acd'];
str2.sort((a,b)=>{
    return (a>b)-(a<b);//asending order a-b , descending order = b-a
})
str2;

//slice vs splice
const arr3 = ['a','b','c','d'];
console.log(arr3.slice(0,3))
console.log(arr3)//not orignal aaray modify
console.log(arr3.splice(0,3))
console.log(arr3)//orignal aaray modify

//array length
const arr_length = [1,2,3,4,5];
console.log(arr_length.length)
arr_length.length=10
arr_length
arr_length.length=0
arr_length

//find unique 
let arr4 = ['a','b','c','d','a'];
console.log([...new Set(arr4)])

//find duplicate 
const arr5 = ['a','b','c','d','a'];
const hasMap ={};
arr5.forEach(it=>{
    if(it in hasMap){
        hasMap[it]++;
    }
    else
    {
        hasMap[it]=1;
    }
})
hasMap;
for(let key in hasMap)
{
    if(hasMap[key]>1)
    console.log(key)
}

//floating Point
const r3 = 0.1+0.2 ===.3
r3
const r4 = 0.1*10+0.2*10 ===.3*10
r4

//toString
Object.prototype.toString = function(){
    return this.name;
}
var a1={};
var b1 = {name:'b'};
var c1 = {name:'c'};

a[b] =111;
a[c]=222;
console.log(a[b]) //object ko as a key de diya hai string m convert ho jaiga



