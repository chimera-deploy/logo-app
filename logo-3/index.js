require("dotenv").config();
const app = require("express")();
const cors = require("cors");
const HOST = "0.0.0.0";
const PORT = process.env.PORT || "8080";


app.use(cors());


app.get("/", (req, res) => {
  const num = Math.floor((Math.random() * 10) + 1)
  if (num % 2 === 0) {
    res.status(200).json({ version: '3' })
  } else {
    res.status(500).send()
  }
});

app.listen(Number(PORT), HOST, () => console.log(`listening on ${HOST} at ${PORT}`));
