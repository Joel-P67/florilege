CREATE TABLE IF NOT EXISTS article (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category_id INT NOT NULL,
    product_type_id INT NOT NULL,
    season_id INT,   -- NULL = toute l'année
    description TEXT,
    composition TEXT,
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (product_type_id) REFERENCES product_type(id),
    FOREIGN KEY (season_id) REFERENCES seasons(id)
);
