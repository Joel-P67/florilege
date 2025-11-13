CREATE TABLE IF NOT EXISTS order_detail (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    article_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) AS (quantity * unit_price) STORED,
    FOREIGN KEY (order_id) REFERENCES `order`(id),
    FOREIGN KEY (article_id) REFERENCES article(id)
);
