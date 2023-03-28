const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = parseInt(process.env.PORT) || 4000;
const sql = require('./config');
const jwt = require('jsonwebtoken');
const { errorHandling } = require('./middleware/ErrorHandling');
const route = require('./controller');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://nintai-no-ie.web.app/")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);

app.listen(port, () => {
    console.log(`Server is running ${port}`)
});

app.use(errorHandling);
