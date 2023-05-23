import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

//READ FILE
fs.readFile("./files/starter.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log("Number 1a", data); //returns <Buffer 45 65 45> if no utf8
  console.log("Number 1b", data.toString());
});

//__dirname chyba nie dziala z Node type Module (import) ale  znalazlem obejscie w necie.
// Sami tworzymy swoja zmienna __dirname
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log("directory-name 👉️", __dirname);

// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
console.log(path.join(__dirname, "/dist", "index.html"));

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (error, data) => {
    if (error) throw error;
    console.log("Number 2a", data); //returns <Buffer 45 65 45> if no utf8
    console.log("Number 2b", data.toString());
  }
);

//WRITE FILE
fs.writeFile(
  "./files/reply.txt",
  "This is reply inside the file: Nice to meet YOU",
  (error) => {
    if (error) throw error;
    console.log("WRITE COMPLETE");
  }
);

//exit on uncaught errors
process.on("uncaught error", (error) => {
  console.log(`There was uncaught error: ${error}`);
  process.exit(1);
});
