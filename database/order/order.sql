CREATE TABLE IF NOT EXISTS `order` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'Pending',
    delivery_address_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (delivery_address_id) REFERENCES adress(id)
);
