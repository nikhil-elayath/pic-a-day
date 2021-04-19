const express = require("express");
const app = express();
const db = require("./db-init/dbConn");

const entry = require("./routes/Entry");

app.use("/api/entry/", entry);






app.disable("etag");



const port = process.env.PORT || 5000;

db.connect()
  .then(obj => {
    obj.done(); // success, release connection;
    if (process.env.NODE_ENV !== "test")
      app.listen(port, () =>
        console.log(`Server is listening at http://localhost:${port}`)
      );
  })
  .catch(error => {
    console.log("ERROR:", error.message);
  });

module.exports = app;
