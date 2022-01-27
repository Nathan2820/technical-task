CREATE TABLE IF NOT EXISTS Orders (
	orderId int AUTO_INCREMENT PRIMARY KEY,
    orderDate date NOT NULL,
	manufacturer varchar(50) NOT NULL,
	model varchar(50) NOT NULL,
	price decimal(8,2) NOT NULL,
	PRIMARY KEY(orderId)
)