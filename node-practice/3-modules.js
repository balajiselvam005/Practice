// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names.js"); // OR const {balaji, joel} = require("./4-names.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alt-flavours.js");
require("./7-mind-grenade.js");

console.log(data);
sayHi(names.balaji);
sayHi(names.joel);
