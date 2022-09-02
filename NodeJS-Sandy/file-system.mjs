import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("tempt.txt", "Hello World ini Sandy, lagi Belajar Node JS")