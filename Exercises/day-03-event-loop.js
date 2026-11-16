import express from 'express';
import { Worker } from 'node:worker_threads';
const app = express();
//1.
// const a = new Promise((resolve, reject) => {
//     resolve('Promise resolved');
//   }).then((result) => {
//     console.log(result);
//   });
// process.nextTick(() => {
//     console.log('Next tick callback');
//   });

//2.
// async function fileReader(path) {
//   try {
//   const result =await fs.readFile(path,'utf-8');
 
//   setTimeout(() => {
//     console.log(result)
//   }, 1000);
//   setImmediate(()=>{
//     console.log(result)
//   })
//   } catch (error) {
//     console.log("something went wrong",error);
//   }
// }
// fileReader("./heelloo.txt")

//3.  
// setTimeout(() => {
//     console.log('setTimeout callback');
//     setImmediate(() => {
//       console.log('setImmediate callback');
//       setTimeout(() => {
//         console.log('setTimeout callback inside setImmediate');
//         setImmediate(() => {
//           console.log('setImmediate callback inside setImmediate');
//         })
//       }, 0);
//     })
//   }, 0);

//4.

// const worker = new Worker("./worker.js");



app.get('/slowres',async(req,res)=>{
  try {
    worker.postMessage('./322405402_681135746890269_2039315934542679114_n.mp4');
worker.on("message", (result) => {
     res.json({"message" : result})
});
   
  } catch (error) {
    console.log("something went wrong",error)
  }
})

app.get('/fastres',async(req,res)=>{
     res.json({message:"fast response"})
})

app.listen(3000)