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
(1, 1, 19.99),
(1, 2, 24.99),
(1, 3, 29.99),
-- Douceur Taureau (id=2)
(2, 1, 19.99),
(2, 2, 24.99),
(2, 3, 29.99),
-- Charme Gémeaux (id=3)
(3, 1, 18.99),
(3, 2, 23.99),
(3, 3, 28.99),
-- Passion Cancer (id=4)
(4, 1, 20.49),
(4, 2, 25.49),
(4, 3, 30.49),
-- Éclat Lion (id=5)
(5, 1, 20.99),
(5, 2, 25.99),
(5, 3, 30.99),
-- Mystère Vierge (id=6)
(6, 1, 21.99),
(6, 2, 26.99),
(6, 3, 31.99),
-- Balance Élégante (id=7)
(7, 1, 22.99),
(7, 2, 27.99),
(7, 3, 32.99),
-- Scorpion Intense (id=8)
(8, 1, 23.99),
(8, 2, 28.99),
(8, 3, 33.99),
-- Sagesse Sagittaire (id=9)
(9, 1, 19.49),
(9, 2, 24.49),
(9, 3, 29.49),
-- Ambition Capricorne (id=10)
(10, 1, 20.49),
(10, 2, 25.49),
(10, 3, 30.49),
-- Originalité Verseau (id=11)
(11, 1, 21.49),
(11, 2, 26.49),
(11, 3, 31.49),
-- Sensibilité Poissons (id=12)
(12, 1, 22.49),
(12, 2, 27.49),
(12, 3, 32.49);
