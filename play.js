const connect = require("./client");
const net = require("net");



const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }

};





const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;

};
setupInput();