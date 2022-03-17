const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    
    console.log(data.toString());
    conn.end();
  });

  conn.on('connect', () => {
    console.log('Sucessfuly connected to game server');
    conn.write('Name: BCD');
  //   conn.write("Move: up");
  });
  return conn;
};

console.log("Connecting ...");


module.exports = connect;