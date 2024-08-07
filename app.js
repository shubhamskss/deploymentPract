const express = require('express');
const app = express();
const path=require("path")
const morgan=require("morgan")
app.use(morgan())

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3900, () => {
    console.log('App is running on port 3900');
});
