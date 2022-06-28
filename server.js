import express from "express";
import cors from "cors";

const app = express();
const port = 3054;

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Getting Data From SQL or NoSQL Database</h1>");
});

app.listen(port, () => {
  console.log(`listening on port:http://localhost:${port}`);
});
