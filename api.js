const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.post('/order', (req, res) => {
    const order = req.body;
    console.log(order);
    if(res.statusCode === 200) {
        res.send("You have successfully created an order.");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })