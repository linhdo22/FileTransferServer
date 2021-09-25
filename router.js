module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("home");
  });
  app.route("/get-public-ip").get((req, res) => {
    const ip = (req.connection && req.connection.remoteAddress) || "";
    const port = (req.connection && req.connection.remotePort) || "";
    res.json({ ip, port });
  });
};
