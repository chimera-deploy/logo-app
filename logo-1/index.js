require("dotenv").config();
const app = require("express")();
const cors = require("cors");
const HOST = "0.0.0.0";
const PORT = process.env.PORT || "8080";


app.use(cors());


app.get("/", (req, res) => {
  res.status(200).json({ version: '1' })
});

app.listen(Number(PORT), HOST, () => console.log(`listening on ${HOST} at ${PORT}`));
