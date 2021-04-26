const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const db = require("../db-init/dbConn");

// api to get all the user entry
router.get("/all-entry", async (req, res, next) => {
  console.log("all entry api");

  try {
    const result = await db.any(`select * from user_entry`);
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
    var dateValue = new Date().toISOString();
    console.log("date", dateValue);

    // var mon = "" + (date.getMonth() );
    // var dy = "" + (date.getDate() );
    // var yr = date.getFullYear();

    // if (mon.length < 2) mon = "0" + mon;
    // if (dy.length < 2) dy = "0" + dy;

    // let userEntryDate = [yr, mon, dy].join("-");
    const result = await db.any(
      `INSERT INTO user_entry(image_uri, image_description, entry_date, image_location, temperature) VALUES('${imageUri}', '${imageDescription}','${dateValue}','${imageLocation}','${imageTemperature}')  RETURNING id`
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

// getting the summary details
router.get("/get-summary", async (req, res, next) => {
  console.log("get-summaryy api");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    const result = await db.any(`select * from user_entry `);
    const temperatureData = await db.any(
      `select * from user_entry ORDER BY temperature DESC`
    );
    var totalEntriesMadeByUser = result.length;
    var dateOfFirstUserEntry;
    var currentDate = new Date();
    var numberOfDaysSinceFirstEntry;
    var highestTemperatureData;
    var lowestTemperatureData;
    // making sure there are entries present inside the result
    if (result.length != 0) {
      // getting the first entry made by the user and using the date
      dateOfFirstUserEntry = new Date(result[0].entry_date);
      // getting the streak count
      const diffTime = Math.abs(dateOfFirstUserEntry - currentDate);
      numberOfDaysSinceFirstEntry = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      // fetched the temperature data in descending order
      // so first entry has highest temp and last entry has least temp
      var dateOfLastEntry = new Date(
        temperatureData[temperatureData.length - 1].entry_date
      );
      var weekDay = days[dateOfLastEntry.getDay()];
      var nameOfTheMonth = months[dateOfLastEntry.getMonth()];
      var dateOfTheEntry = dateOfLastEntry.getDate();
      var yearOfTheEntry = dateOfLastEntry.getFullYear();
      lowestTemperatureData = {
        lowestTemperature:
          temperatureData[temperatureData.length - 1].temperature,
        lowestTemperatureDate:
          weekDay +
          " " +
          nameOfTheMonth +
          " " +
          dateOfTheEntry +
          "," +
          yearOfTheEntry,
      };
      var dateOfFirstEntry = new Date(temperatureData[0].entry_date);

      var weekDay = days[dateOfFirstEntry.getDay()];
      var nameOfTheMonth = months[dateOfFirstEntry.getMonth()];
      var dateOfTheEntry = dateOfFirstEntry.getDate();
      var yearOfTheEntry = dateOfFirstEntry.getFullYear();
      highestTemperatureData = {
        highestTemperature: temperatureData[0].temperature,
        highestTemperatureDate:
          weekDay +
          " " +
          nameOfTheMonth +
          " " +
          dateOfTheEntry +
          "," +
          yearOfTheEntry,
      };
    }

    res.status(200).json({
      status: 200,
      message: "Fecthed all entry successfully",
      data: {
        totalEntriesMadeByUser,
        numberOfDaysSinceFirstEntry,
        highestTemperatureData,
        lowestTemperatureData,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 400,
      message: error,
    });
  }
});

module.exports = router;
