CREATE TABLE IF NOT EXISTS invoice (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_id INT,
    billing_address_id INT,
    invoice_number VARCHAR(50) NOT NULL UNIQUE,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_ht DECIMAL(10,2) NOT NULL,
    total_tva DECIMAL(10,2) NOT NULL,
    total_ttc DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50),
    payment_status VARCHAR(50) DEFAULT 'pending',
    pdf_path VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (order_id) REFERENCES `order`(id),
    FOREIGN KEY (billing_address_id) REFERENCES adress(id)
);
