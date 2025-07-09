// bentuk common js, tanpa menggunakan ekstensi bisa
// const useIntlFormat, { Pi } = require("./src/intlFormat");

// bentuk esmodule, harus pakai ekstensi
import useIntlFormat, { Pi } from "./src/intlFormat.js";
import { sebuahProgram } from "./src/testError.js";
// untuk unname export, ketika di import namanyanya terserah
// untuk named expor, harus menggunakan nama export nya ketika di import , kalau mau menggunakan nama lain, berikan alias (as untuk esmodule, destructuring alias untuk commonjs)

const date = Date.now();
console.log(date);
const formattedDate = useIntlFormat(date, "en-US");
console.log(formattedDate);
console.log(Pi);

try {
  console.log(sebuahProgram(1));
} catch (error) {
  if (error instanceof Error) {
    console.log(error.stack);
  }
}
