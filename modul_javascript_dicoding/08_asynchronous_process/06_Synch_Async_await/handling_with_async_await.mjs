import { doSomething } from "./utils_async.mjs";

async function promiseWithAsyncAwait(){
 console.log("Starting async")
 
 const result = await doSomething();
 
 console.log(result);
 
 console.log("Ending async");
}

promiseWithAsyncAwait();