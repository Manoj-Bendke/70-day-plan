import fs from 'fs'
import express from 'express'

// const buf = Buffer.from("Full Stack Developer")
// const buf2 = Buffer.from(" with AI")
// const buf3 = Buffer.concat([
//   buf,
//   buf2
// ])
// console.log(buf);
// console.log(buf.length);
// console.log(buf.toString());
// console.log(buf3.toString());

// External diff (bytes): 104870386
// ArrayBuffers diff (bytes): 104857581
// RSS diff (bytes): 316076032
// External diff (bytes): 206411
// ArrayBuffers diff (bytes): 196636
// RSS diff (bytes): 8634368

// async function readfilefunc(path) {
//   try {
//     const before = memoryUsage();
//     fs.readFile(path, "utf-8", (err, data) => {
//       if (data) {
//         console.log(data);
//         const after = memoryUsage();
//         console.log("afterr");
//         console.log("External diff (bytes):", after.external - before.external);
//         console.log(
//           "ArrayBuffers diff (bytes):",
//           after.arrayBuffers - before.arrayBuffers,
//         );
//         console.log("RSS diff (bytes):", after.rss - before.rss);
//       } else if (err) {
//         console.log("something went wrong", err);
//       }
//     });
//   } catch (error) {
//     console.log("something went wrong while reading the file", error);
//   }
// }

// readfilefunc("./Reading-stuff/100mb-examplefile-com.txt");

// const result = new Transform({
//   transform(chunk, encoding, callback) {
//     const transformedData = chunk.toString("utf-8").toUpperCase();
//     callback(null, transformedData);
//   },
// });

// async function run() {
//   try {
//     await pipeline(
//       createReadStream("./Reading-stuff/100mb-examplefile-com.txt"),
//       result,
//       createWriteStream("./Reading-stuff/writingstuff.txt")
//     );
//     console.log("Done!");
//   } catch (err) {
//     console.error("Pipeline failed:", err);
//   }
// }

// run();

// async function manualstream() {
//   const read = fs.createReadStream('./Reading-stuff/100mb-examplefile-com.txt')
//   const writef = fs.createWriteStream('./Reading-stuff/writingstuff.txt')

// read.on('data',(chunk)=>{
//   const works = writef.write(chunk)
//   if(!works){
//     read.pause();
//   } 
// })
// writef.on('drain',()=>{
//   read.resume();
// })
//   writef.on('finish', () => {
//     console.log('Writing completed'); // Fires once writef.end() completes
//   });
// read.on('end',()=>{
//   console.log("reading completed")
//    writef.end();
// })

// }
// manualstream('./Reading-stuff/100mb-examplefile-com.txt')
