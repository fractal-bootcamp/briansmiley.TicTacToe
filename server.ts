import express from "express";
import cors from "cors";
const port = 4000;
const app = express();

app.use(express.json);
app.use(cors());

app.get("/", (req, res) => {
  res.send("TicTacToe Server");
});

app.listen(port, () => {
  console.log(`Express running on post ${port}`);
});
