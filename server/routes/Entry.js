const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const db = require("../db-init/dbConn");

// api to get all the user entry
router.get("/all-entry", async (req, res, next) => {
  console.log("all entry api");

  try {
    const result = await db.any(`select * from user_entry`);
    // console.log("result", result)
    if (result.length == 0) {
      res.status(400).json({
        status: 400,
        message: "No Entry found",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Fecthed all entry successfully",
        data: { result },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Error",
    });
  }
});

// get user entry by id
router.get("/get-entry/:id", async (req, res, next) => {
  console.log("get entry by id", req.params);

  try {
    var userEntryId = req.params.id;
    const result = await db.any(
      `select * from user_entry where id = '${userEntryId}';`
    );
    console.log("result", result);
    if (result.length == 0) {
      res.status(400).json({
        status: 400,
        message: "No Entry found",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "Fecthed all entry successfully",
        data: { result },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Error",
    });
  }
});

// create a new entry
router.post("/create-entry", async (req, res, next) => {
  console.log("create entry api", req.body);

  try {
    var imageUri = req.body.imageUri;
    var imageDescription = req.body.imageDescription;
    var imageLocation = req.body.imageLocation;
    var imageTemperature = req.body.imageTemperature;
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Data missing",
    });
  }

  try {
    var date = new Date();

    var mon = "" + (date.getMonth() + 1);
    var dy = "" + (date.getDate()+1);
    var yr = date.getFullYear();

    if (mon.length < 2) mon = "0" + mon;
    if (dy.length < 2) dy = "0" + dy;

    let userEntryDate = [yr, mon, dy].join("-");
    const result = await db.any(
      `INSERT INTO user_entry(image_uri, image_description, entry_date, image_location, temperature) VALUES('${imageUri}', '${imageDescription}','${userEntryDate}','${imageLocation}','${imageTemperature}')  RETURNING id`
    );
    console.log("redult", result);
    res.status(200).json({
      status: 200,
      message: "Created entry successfully",
      data: result[0],
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 400,
      message: "Error",
    });
  }
});

router.put("/update-entry", async (req, res, next) => {
  console.log("update entry api", req.body);

  try {
    var imageUri = req.body.imageUri;
    var imageDescription = req.body.imageDescription;
    var userEntryId = req.body.userEntryId;
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Data missing",
    });
  }

  try {
    var date = new Date();

    var mon = "" + (date.getMonth() + 1);
    var dy = "" + date.getDate();
    var yr = date.getFullYear();

    if (mon.length < 2) mon = "0" + mon;
    if (dy.length < 2) dy = "0" + dy;

    let userEntryDate = [yr, mon, dy].join("-");
    const result = await db.any(
      `update user_entry set image_uri='${imageUri}', image_description='${imageDescription}', entry_date='${userEntryDate}' where id = '${userEntryId}';`
    );

    res.status(200).json({
      status: 200,
      message: "Created entry successfully",
      // data:result[0]
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 400,
      message: "Error",
    });
  }
});

module.exports = router;
