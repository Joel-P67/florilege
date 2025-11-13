-- Table qui relie un article à une taille, avec son prix et son stock
CREATE TABLE IF NOT EXISTS article_size (
    id INT AUTO_INCREMENT PRIMARY KEY,
    article_id INT NOT NULL,
    size VARCHAR(50) NOT NULL,
    stock INT DEFAULT 0,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (article_id) REFERENCES article(id)
);
