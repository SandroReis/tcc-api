const serverless = require("serverless-http");
const express = require("express");
const app = express();
var cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.post('/api/upload', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  return res.json({alo:'alou'})
  try {
    const form = formidable({ multiples: true });
  
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      res.json({ fields, files });
    });
    
  } catch (error) {
    res.json(error)
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);