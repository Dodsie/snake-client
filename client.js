const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.0.159',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Sucessfuly connected to game server');
    conn.write('Name: BCD');
  });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;