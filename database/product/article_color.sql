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
(@article_id, 10), -- Rouge
(@article_id, 8);  -- Orange
