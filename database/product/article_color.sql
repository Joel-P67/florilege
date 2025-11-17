CREATE TABLE IF NOT EXISTS article_color (
    article_id INT NOT NULL,
    color_id INT NOT NULL,
    PRIMARY KEY(article_id, color_id),
    FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
    FOREIGN KEY (color_id) REFERENCES color(id)
);

-- Récupérer l'ID généré
SET @article_id = LAST_INSERT_ID();

-- Associer plusieurs couleurs au même article
INSERT INTO article_color (article_id, color_id) VALUES
(1, 10), -- Rouge
(1, 8),  -- Orange
(2, 9),  -- Rose
(2, 12), -- Violet
(3, 1),  -- Blanc
(3, 12), -- Violet
(4, 1),  -- Blanc
(4, 2),  -- Bleu
(5, 4),  -- Jaune
(5, 8),  -- Orange
(6, 12), -- Violet
(6, 1),  -- Blanc
(7, 9),  -- Rose
(7, 1),  -- Blanc
(8, 10), -- Rouge
(9, 4),  -- Jaune
(9, 12), -- Violet
(10, 1), -- Blanc
(11, 12),-- Violet
(11, 1), -- Blanc
(12, 9), -- Rose
(12, 1); -- Blanc
