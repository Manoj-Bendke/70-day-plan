// 1.
// console.log("hii1");
// console.log("hii2");
// setTimeout(() => {
//   console.log("hii5");
// }, 1000);
// console.log("hii3");
// console.log("hii4");

// 2.
// const a = new Promise((resolve,reject)=>{
//   console.log("hello")
//   resolve("manoj")
// }).then((v)=>{
//  console.log("hello",v)
// })

// 3.
// setTimeout(()=>{
//   console.log("hii");
// },0)
// const b = new Promise((resolve,reject)=>{
//   console.log("hello")
//   resolve("manoj")
// }).then((v)=>{
//  console.log("hello",v)
// })

// 4.
// const b = new Promise((resolve,reject)=>{
//   console.log("hello")
//   resolve("manoj")
// }).then((v)=>{
//   console.log("hello",v);
//  return new Promise((resolve,reject)=>{
//   console.log("hello2")
//   reject("manoj2")})
// }).catch((e)=>{
//   console.log(e);
// })

// 5.
// async function demo(v) {
//   console.log("hii")
//   await null;
//   console.log(v)
// }
// demo("manoj")
// console.log("hello")