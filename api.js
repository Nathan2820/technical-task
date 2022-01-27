const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.post('/order', (req, res) => {
    const order = req.body;
    connection.query('INSERT INTO orders (orderDate, manufacturer, model, price) VALUES (?, ?, ?, ?)', [order.orderDate, order.manufacturer, order.model, order.price], function(err, result) {
        if(err) throw err;
        let oid = result.insertId;
        if(res.statusCode === 200) {
            res.send("You have successfully created an order. The order id is: " + oid);
        }
    });
});

app.get('/order/:id', (req, res) => {
    const oid = req.params.id;
    connection.query(`SELECT orderId, orderDate, manufacturer, model, price FROM orders WHERE orderId = ${oid}`, function(err, result) {
        if(err) throw err;
        if(res.statusCode === 200) {
            res.send(result);
        }
    });
}); 

app.put(`/updateorder/:id`, (req, res) => {
    const oid = req.params.id;
    const updatedValues = req.body;
    connection.query(`UPDATE orders 
                SET manufacturer = ?, model = ?, price = ?
                WHERE orderId = ${oid}`,
                [updatedValues.manufacturer, updatedValues.model, updatedValues.price], function(err, result) {
                    if(err) throw err;
                    if(res.statusCode === 200) {
                        res.send("You have successfully updated the order.");
                    }
    });
});

app.listen(port, () => {
    console.log("Technical test app is running on port: " + port);
});