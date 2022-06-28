import express from "express";
import cors from "cors";

const app = express();
const port = 3054;

app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="main.css" />
      <title>SQL vs. NoSQL</title>
  </head>
  <body>
  <h1>Getting Data From SQL or NoSQL Database</h1>
  </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`listening on port:http://localhost:${port}`);
});
