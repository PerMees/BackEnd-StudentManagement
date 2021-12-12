const express = require("express");
const app = express();
const router = require("./routers/root.router");
app.use(express.json());

app.use("/api/v1", router);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// setup sequelize
const { sequelize } = require("./models");
sequelize.sync({ alter: true }); // force: xóa, alter: sửa
