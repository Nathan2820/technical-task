# Gforces technical task

## API Documentation

### Create an Order
**Definition**

'POST /order'

**Arguments**

- `"orderDate":date` date of the order.
- `"manufacturer":string` manufacturer of the vehicle.
- `"model":string` model of the vehicle.
- `"price":decimal` total price of the vehicle.

**Response**

- 201: created successfully

Returns "You have successfully created an order. The order id is: <identifier>" if successful.

### Update an Order
**Definition**

'PUT /updateorder/(identifier)'

**Arguments**

- `"manufacturer":string` manufacturer of the vehicle.
- `"model":string` model of the vehicle.
- `"price":decimal` total price of the vehicle.

**Response**

- 200: success

Returns "You have successfully updated the order." if successful.

### View an Order
**Definition**

'GET /order/(identifier)'

**Response**

- 200: success

Returns the order details if the order exists and is found.

```json
{
    "orderId": <identifier>,
    "orderDate": "24/01/2022",
    "manufacturer": "Vauxhall",
    "model": "Corsa",
    "price": 12350.00
}