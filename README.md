# Gforces technical task

## API Documentation

### Create an Order
**Definition**

'POST /order'

**Arguments**

- `"order date":date` date of the order.
- `"manufacturer":string` manufacturer of the vehicle.
- `"model":string` model of the vehicle.
- `"price":decimal` total price of the vehicle.

**Response**

- 201: created successfully

Returns the newly created Order uuid if successful.

```json
{
    "uuid": "<identifier>"
}
```

### Update an Order
**Definition**

'PUT /updateorder/(identifier)'

**Arguments**

- `"manufacturer":string` manufacturer of the vehicle.
- `"model":string` model of the vehicle.
- `"price":decimal` total price of the vehicle.

**Response**

- 200: success

Returns the newly update order details if successful.

```json
{
    "uuid": "<identifier>",
    "order date": "24/01/2022",
    "manufacturer": "Vauxhall",
    "model": "Corsa",
    "price": "12350.00"
}
```
### View an Order
**Definition**

'GET /order/(identifier)'

**Response**

- 200: success

Returns the order details if the order exists and is found.

```json
{
    "uuid": "<identifier>",
    "order date": "24/01/2022",
    "manufacturer": "Vauxhall",
    "model": "Corsa",
    "price": "12350.00"
}