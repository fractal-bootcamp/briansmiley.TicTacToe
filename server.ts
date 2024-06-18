import express from "express";
import cors from "cors";
import "dotenv/config";
const port = process.env.PORT || 2000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("ping");
  res.send("TicTacToe Server");
});

app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});
