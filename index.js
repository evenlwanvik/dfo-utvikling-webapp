const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

/*Enable CORS security headers.*/
app.use(cors())

/*Add an Express method to parse the POST method.*/
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));