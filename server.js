const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(express.json());

const 