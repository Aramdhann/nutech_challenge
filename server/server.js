const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("sekedar tes server");   // ini hanya untuk tes server
});

app.post("/pay", async (req, res) => { //   ini untuk proses pembayaran
  console.log(req.body.token);
  await Stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  });
});

app.listen(port, () => { // ini untuk menjalankan server
  console.log(`Server is running on Port ${port}`);
});
