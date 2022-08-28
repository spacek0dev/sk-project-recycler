const morgan = require("morgan");
const express = require("express");
const routes = require("../routes");
var app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT , DELETE");
  res.header("Allow", "GET,POST,OPTIONS,PUT,DELETE");
  next();
});

app.get("/", (req, res) => {
  res.status(201).send({ code: 201, data: "server running 1.0" });
});
app.get("/health", async (_req, res, _next) => {
  const healthcheck = {
    uptime: process.uptime(),
    connected: process.connected,
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});
const base = "/api/v1";
routes.forEach((value) => {
  app.use(base, value);
});

module.exports = app;
