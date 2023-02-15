const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
 const userRoutes = require("./routes/user");
// const premiumRoutes = require("./routes/premiumleader");
// const forgotRoutes = require("./routes/forgot");
//  const User = require("./model/user");
// const Expense = require("./model/expense");
// const ForgotPassword = require("./model/forgot");
// const Order = require("./model/order");
const helmet = require("helmet");
const morgan = require("morgan");
const fs = require("fs");
const mongoose=require('mongoose');
const app = express();

// const key1=crypto.randomBytes(32).toString('hex');
// console.log(key1)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(helmet());
app.use(morgan("combined", { stream: accessLogStream }));
// app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json());
app.use(cors());

 app.use(userRoutes);
// app.use(premiumRoutes);
// app.use(forgotRoutes);


// User.hasMany(Expense);
// Expense.belongsTo(User);

// User.hasMany(Order);
// Order.belongsTo(User);

// User.hasMany(ForgotPassword);
// ForgotPassword.belongsTo(User);

// sequelize
//   .sync()
//   .then((result) => {
//     app.listen(7000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

mongoose.connect('mongodb+srv://sainadh:sainadh3811@mongoproject.voghkib.mongodb.net/expense?retryWrites=true&w=majority')
.then(result=>{
  app.listen(7000)
})
.catch(err=>{
  console.log(err);
})