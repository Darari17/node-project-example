// bentuk common js, tanpa menggunakan ekstensi bisa
const useIntlFormat = require("./src/intlFormat");

// bentuk esmodule, harus pakai ekstensi
// import useIntlFormat from "./src/intlFormat.js"

const date = Date.now();
console.log(date);
const formattedDate = useIntlFormat(date, "en-US");
console.log(formattedDate);
