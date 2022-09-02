function samplePromise(){
    return Promise.resolve("Sandy");
}

const nama = await samplePromise();
console.info(nama)