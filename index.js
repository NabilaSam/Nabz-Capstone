const express = require('express');

const cors = require('cors');
const route = require('./controller');

const port = parseInt(process.env.PORT) || 4000;;

const app = express();

const { errorHandling } = require('./middleware/ErrorHandling');

const cookieParser = require('cookie-parser');


app.use((req, res, next) => {
    res.header('https://nintai-no-ie.web.app/', '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({ extended: false })
)

app.listen(port, () => {
    console.log(`Server is running ${port}`)
});

app.use(errorHandling);