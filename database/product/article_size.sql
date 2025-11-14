CREATE TABLE IF NOT EXISTS article_size (
    id INT AUTO_INCREMENT PRIMARY KEY,
    article_id INT NOT NULL,
    size_id INT NOT NULL,
    stock INT DEFAULT 0,
    price DECIMAL(10,2) NOT NULL,
    UNIQUE(article_id, size_id),
    FOREIGN KEY (article_id) REFERENCES article(id),
    FOREIGN KEY (size_id) REFERENCES sizes(id)
);
