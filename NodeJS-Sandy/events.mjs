import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", (nama) =>{
    console.info(`Hello ${nama}`);
})
emitter.addListener("hello", (nama) =>{
    console.info(`Hello ${nama}`);
})

emitter.emit("hello", "Sandy")