const path = require('path');
const cors = require('cors');
const express = require('express');

const dotenv = require("dotenv");
dotenv.config();

const email = require('./emailSend');

const exception = require('./exceptions');


const app = express();

const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());
app.use(exception.exception)

app.post("/email", async (req, res) => {

  const emailSpecs = req.body;
  o = await email.EmailSending(emailSpecs);

  res.ok();
})


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
