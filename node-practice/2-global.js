// GLOBALS  - NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require   - function to use modules (Common Js)
// module    - info about current module (file)
// process   - info about env where the program is being executed

console.log(require);
var count = 0;
setInterval(() => {
  if (count == 5) {
    count = 0;
    console.log("Good bye");
    process.exit();
  }
  console.log("Hello World!");
  count++;
}, 1000);
