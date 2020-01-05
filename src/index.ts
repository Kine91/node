import dotenv from "dotenv";
import express from "express";
import path from "path";

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening on server ${port}...`);
});
