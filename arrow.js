let adt =(f,w)=> f+w;

// console.log(adt(2,4));


// let mt=(x,y,z)=>{
//     let d=x+y;
//     let f=d*z;
//     return f;
// }
// // console.log(mt(12,3,2));

// let array=[23,54,334,53,3,2]
// array.unshift(1)
// console.log(array);
// // console.log(...array);
// let f=`thid is leargest ${Math.max(...array)}`
// // console.log(f);
// let array2=[...array,23,55]
// array2.push(23)
// console.log(array2);

// // object destructuring
// let fish={
// name:'ktD',
// ID:345
// ,adress:'3t,sdg,sd'


// }
// let g=fish.name;
// // console.log(g);

// let {name}={name:'ktd', id:234, adress:'feni'}
//  console.log(name );

// function getSum(a, b=9)
// {return a+b;}


// // const y = x => x*x; const z = y(5);console.log(z);
// const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ]. 
// let a=...nayikas;

// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.
// let l=(x,y,z)=> x*y*z ;
// console.log(l(1,3,4));

let my=`
I am a web developer. 
I love to code.
 I love to eat biryani.

`;
// console.log(my);

// let ar=(x,y=2)=> x+y;
// console.log(ar(18));\

// let friend=['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']
// let fuc=(array)=>{
//     let a=[];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if(element.length %2==0){
//             a.push(element);
//         }
        
//     }
//     return a;
// }
// console.log(fuc(friend));

// let data={
// data:{
// id:23,
// adress:{
//     first:'len',
//     second:'right'
// }
// }

// }

// let g=data.data.adress?.secnd
// console.log(g);

// let mar=[2,4,6,9,12];
// let out=[]
// for (const num of mar) {
//     let duble=num*2;
// out.push(duble);
// }
// console.log(out);

// let mp=mar.map(x=>x*2);


// let friend=['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']
// let f=friend.map(x=> x[1]);
// // console.log(f);

// let friend2=['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']
// let fr=friend2.filter(fri=> fri.length %2== 0);
// // console.log(fr);


// let mar3=[2,4,6,9,12];
// let mr=mar3.find(f=> f %3==0)
// let ob={
//     name:'fs', age:23
// }

// const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
// // console.log(friends.find(friend.length ===5));

// const product = {
//     name: 'Laptop',
//  model:'Yoga 3',
//   price:49000, 
//   dusk: '512SSD'
// }

// const {price}=product;
// console.log(price);

// let x=20; let y=30; let z=x+y;
// console.log(`the sum of ${x} & ${y} is= ${z}`);

let ab=(a,b)=> a+b;  
//no param
let ab2 =()=>1234;
// one pram
let as=num=> num*2;


// let me={
//     name:'araf',
//     location(){
//         console.log(`this my loc = ${this.name}`);
//     }
// }
// me.location()
//object destructuring
// let fish={
// name:'hilsah',
// color:'red',
// size:24, 
// phone:02342463
// }
// let colo=fish.color;
//console.log(fish.phone,color);
// let {name,color,size}=fish;
//console.log(` color of ${name} is = ${color}` );

//array
// let myArry=[12,43,56,88,79,57];
// let [fq,f2]=myArry
// console.log(fq,f2);

// function getnam() {
//     return [12,43,56,88,79,57];
// }

// let [f,f1]=getnam()
// console.log(f,f1,f);
//obj chain
// let all=[
//     {
//         id:1,name:'bulbul',adress:'feni',salary:12000
//     }
// ]
// //console.log(all[0].salary);

// let ob={
//     id:23,
//     name:'ashraf',
//     location:{
//         street:{
//             basa:'anwor mansion,academy road',
//             unit:'2nd'
//         }
//     }
// }
// console.log(ob.location?.street);
// array map

// let mapar=[2,3,5,6,8,9,79]
// // let ms=mapar.find(x=> x %2 != 0 )
// let ms=mapar.filter(x=> x %2 != 0 )
// let ms2=mapar.map(x=> x*2 )
// // console.log(ms,ms2);

// // let product=[
// //     {id:2 ,name:'iPhone',price:120000},
// //     {id:3 ,name:'iPhonex',price:120000},
// //     {id:62 ,name:'samsung',price:120000}
// // ]

// // let fcx=product.filter(p => p.price > 20000);
// // // console.log(fcx);
// // let f=product.map(x=> x.name);
// // let ec=product.forEach(x=>console.log(x))

// let v=[1,2,3,4,5]
// let red=v.reduce((prev,current) =>prev+current ,0);
// console.log(red);

// class instructor{
// name;
// location;
// member='web'
// constructor(name,location){
//     this.name=name ;
//     this.location=location;

// }
// startquiz(time){
//     console.log(`dear ${this.name} start Quiz at ${time}`);
// }


// }

// let me=new instructor('me','feni')
// console.log(me);
// me.startquiz(9)


// const stuInfo = JSON.stringify(
//     {
//      name: "James",
//         roll: 3 }); 
// console.log(stuInfo.name); 

// const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
// console.log(bondCode);
// const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
// console.log(data.result[0].userName.name);
// const p=[1,2,3]; const q=p.find( n=> Math.pow(n, 3))
// console.log(q);


// const array = { hobbies: ["dancing", "singing", "acting"] };
// console.log(JSON.stringify(array));

// const dreamGirl = [
//     {
//      sokina: {
//       name: "bbu",
//       height: "5.4",
//       family: [{ father: "rock", mother: "shila", sister: "chinki" }],
//       age: undefined,
//       contactInfo: [
//        {
//         facebook: {
//          link: "https://www.facebook.com/",
//          followers: "12545",
//          status: "single",
//          friendsList: [{ name: "rofik" }, undefined],
//         },
//        },
//        { instagram: "https://www.instagram.com/" },
//       ],
//      },
//     },
//    ];
//    console.log(dreamGirl[0].sokina.contactInfo[1].instagram);


// const phones = [
//     { name: "sony", price: 500 },
//     { name: "apple", price: 700 },
//     { name: "sony", price: 700 },
//    ];

//    lo

// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q,p);

// const isTrue='false'; 
// if(!isTrue){
// console.log('hello');
// } else {
// console.log('world'); 
// }

// function sum(p, q) {
//    return p + q;
//    }
//    const result = sum(2, 3);
//    console.log(result);

// if ("2" === 2) {
//     console.log("Inside if");
//    } else {
//     console.log("Inside else");
//    }

// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32);


// let arr=[2,6,7,8,4,7,57,45,23]

// let to= arr.map(x=> x/2);
// console.log(to);

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// console.log(3);

// const sum = (p, q) => parseInt(p) + q;
// const total = sum("h", 1);
// console.log(total);

// const marks= 60;
// const resubmit = -5; 
// console.log(!(marks > 0 || resubmit > 0));

// const person = {
//     name: "hero", 
//     id: 101, 
//     address: "BD",
//     postalCode: 40321
//   };

//   console.log(Object.length(person).keys);

// const animals = ['cat', 'dog', 'rat'];
// console.log(animals.includes('Cat'));
// const add =(para1 , para2) => para2 + para1;
// console.log(add('2',3));




let st=' এই মাইলস্টোনসহ চার মাইলস্টোন ধরে জাভাস্ক্রিপ্ট দেখতেছো। কিছু সহজ আর কিছু কঠিন মিলিয়ে কোনরকম পারতেছো। হয়তো ভালো, না হয় খারাপ-ভালো মিলিয়ে। এইবার তোমার কাজ হচ্ছে রিভিশন দেয়া। এই এসাইনমেন্ট এর আগে রিভিশন দাও। এসাইনমেন্ট এর পরেও দুই দিন রিভিশন দিতে পারবে। তখন স্পেশাল দুই দিন দেয়া হবে। সো, চাপ নেয়ার কিছু নাই। আমি সিম্পল একটা লিষ্ট দিয়ে দিচ্ছি। যাতে তোমার ঘাটতি থাকলে নেক্সট এক সপ্তাহের মধ্যে পুষিয়ে নিতে পারো। '

// console.log(st.length);
// if (st.length > 30 ){
//    let sts=st.slice(0,10)
//    console.log( sts);

// } else {
//     console.log(st);
// }

// const emptyArr = [];

// const mappedArr = emptyArr.map((element) => {
//   return element * 2;
// });

// // console.log(mappedArr); // []

// emptyArr.forEach((element) => {
//   console.log(element);
// });
// const obj = {a:1};
// console.log(Object.keys(obj).length===0);
// // (nothing is logged to the console)

const obj = {name :'jack',age:27}
const a= 'name' in obj;
console.log(a)