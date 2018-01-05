const path = require('path');
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res, next) => {
    res.render('index.html');
});

app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is running....');
    }
});