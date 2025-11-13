-- Table des articles (informations générales sur le produit)
CREATE TABLE IF NOT EXISTS article (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category_id INT NOT NULL,
    product_type_id INT NOT NULL,
    description TEXT,
    composition TEXT,
    season VARCHAR(100),
    size VARCHAR(50),
    price DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (product_type_id) REFERENCES product_type(id)
);
