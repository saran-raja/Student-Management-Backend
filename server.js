const express = require("express");
const app = express();
const port = process.env.PORT ||8081;
const router = require("./routes/route");
const cors = require('cors');
const bcrypt = require("bcrypt")
// const bodyParser = require('body-parser');

// app.use(bodyParser.json()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/form", router);
// app.use("/",router)
app.listen(port, () => {
  console.log("port runnning on", port);
});
 