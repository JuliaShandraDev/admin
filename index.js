const express = require("express");
const mongoose = require("mongoose");

const router = require("./routers/router");

const PORT = 5000;

const app = express();

app.use(express.json({ extended: true }));

app.use("/", router);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://JuliaShandraDev:ITop1000ShaJul@cluster.u9grn.mongodb.net/test?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server startedd on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
