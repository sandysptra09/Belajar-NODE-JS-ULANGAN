
function samplePromise(){
    return Promise.resolve("Sandy");
}

async function run(){
    const nama = await samplePromise();
    console.info(nama)
}

run()