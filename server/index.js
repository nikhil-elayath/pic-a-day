const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db-init/dbConn");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
app.use(cors());
app.disable("etag");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const entry = require("./routes/Entry");

app.use("/api/entry/", entry);

const port = process.env.PORT || 5000;

db.connect()
  .then((obj) => {
    obj.done(); // success, release connection;
    if (process.env.NODE_ENV !== "test")
      app.listen(port, () =>
        console.log(`Server is listening at http://localhost:${port}`)
      );
  })
  .catch((error) => {
    console.log("ERROR:", error.message);
  });

module.exports = app;
