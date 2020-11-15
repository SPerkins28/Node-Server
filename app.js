require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");

let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller");


// sequelize.sync({force: true})
app.use(require('./middleware/headers'));

app.use(express.json());

/*******************
 * Exposed Route *
 *******************/
app.use("/user", user);

/*******************
 * Protected Route *
 *******************/

app.use("/journal", journal);

sequelize
  .authenticate()
  .then(function () {
    sequelize.sync();
  })
  .then(function () {
    app.listen(3000, function () {
      console.log("App is listening on port 3000");
    });
  })
  .catch(function (err) {
    console.log(err);
  });
