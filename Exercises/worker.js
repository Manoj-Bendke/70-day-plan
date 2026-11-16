import { parentPort } from 'worker_threads';
import fs from 'fs/promises';

parentPort.on("message", async(path) => {
   const result = await fs.readFile(path)
    parentPort.postMessage(result);
});