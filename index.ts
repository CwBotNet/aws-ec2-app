import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello aws ec2",
  });
});

app.listen(PORT, () => {
  console.log(`running on port : ${PORT}`);
});
