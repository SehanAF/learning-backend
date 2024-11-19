import { doSomething } from "./utils.mjs";

function onFulfilled(doSomethingData) {
 console.log(doSomethingData);
}

function onRejected(doSomethingDataError) {
 console.error(doSomethingDataError);
}

doSomething().then(onFulfilled, onRejected);