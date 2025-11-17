CREATE TABLE IF NOT EXISTS article_price (
    id INT AUTO_INCREMENT PRIMARY KEY,
    article_id INT NOT NULL,
    size_id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    UNIQUE(article_id, size_id),
    FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
    FOREIGN KEY (size_id) REFERENCES sizes(id) 
);
-- Associer plusieurs tailles prix au même article
-- Feu du Bélier (id=1)
INSERT INTO article_price (article_id, size_id, price) VALUES
(@article_id, 4, 19.99),
(@article_id, 5, 24.99),
(@article_id, 6, 29.99),
(@article_id, 7, 34.99),
(@article_id, 8, 39.99);
