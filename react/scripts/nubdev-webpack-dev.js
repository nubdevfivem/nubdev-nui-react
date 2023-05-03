const { webpack } = require("webpack");
const webpackClient = require('../webpack/webpack.config')
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var Rcon = require('rcon');
const { name } = require('../package.json')


/* Rcon คือ protocol การยิง Command เข้า Server Runtime */

let fivem_server_runtime = {
  host: "localhost",
  port: 30120,
  pass: '123456789'
}

var conn = new Rcon(fivem_server_runtime.host, fivem_server_runtime.port, fivem_server_runtime.pass, {
  tcp: false,
  challenge: false 
});

/* คำสั่งที่จะยิงเมื่อ Complie เสร็จ*/
commands = [`restart ${name}`,'notify restart']

conn.on('auth', function() {
  console.log("[RCON] connection successfull!!!");
}).on('response', function(str) {
    console.log("[RCON] Restart Script successfull");
}).on('error', function(err) {
  console.log("[RCON] Error ???");
});

conn.connect();

const compiler = webpack([ /* เรื่มทำการ Complie */
    {
        ...webpackClient,
        mode: process.env.NODE_ENV,
        plugins:
          [...webpackClient.plugins, new WebpackBar({
            name: webpackClient.name,
            color: 'green',
          }),
          new CleanWebpackPlugin(),
        ]
    }
])

var sendCount = 0

compiler.watch({}, (err, stats) => {

    if (err) { /* เมื่อ Complie แล้วเกิด Error*/
      console.error(err);
    } else if (stats.hasErrors()) { /* เมื่อ Complie แล้วเกิด Error*/
      console.error(stats.toString('errors-only'));
    } else { /* เมื่อ Complie สำเร็จ */
      console.log(stats.toString({ colors: true }));
      sendCount = 0

      for (let i = 0; i < commands.length; i++) { /* ยิงคำสั่ง */
        const element = commands[i];
        conn.send(element)
        sendCount++
      }
    }
  });