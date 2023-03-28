const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = parseInt(process.env.PORT) || 4000;
const { errorHandling } = require('./middleware/ErrorHandling');
const route = require('./controller');







app.use(route);
app.use(
    (cors()),
    cookieParser(),
    bodyParser.json(),
    express.json(),
    
    express.urlencoded({ extended: false })   
)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});

app.listen(port, () => {
    console.log(`Server is running ${port}`)
});

app.use(errorHandling);
