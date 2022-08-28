const app = require("./src/configs/server");
const { StartConnection } = require("./src/configs/database");

async function start() {
  try {
    const db = await StartConnection();
    if (db) console.log("DATA BASE READY");
    const server = await app.listen(3000);
    if (server) console.log("SERVER READY");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

start();
