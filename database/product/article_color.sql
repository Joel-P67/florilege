SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS article_color (
    article_id INT NOT NULL,
    color_id INT NOT NULL,
    PRIMARY KEY(article_id, color_id),
    FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
    FOREIGN KEY (color_id) REFERENCES color(id)
);

-- Associer plusieurs couleurs aux articles
INSERT INTO article_color (article_id, color_id) VALUES
(1, 10),  -- Feu du Bélier: Rouge
(1, 8),   -- Feu du Bélier: Orange
(2, 9),   -- Terre du Taureau: Rose
(2, 12),  -- Terre du Taureau: Violet
(3, 1),   -- Douceur Gémeaux: Blanc
(3, 12),  -- Douceur Gémeaux: Violet
(4, 1),   -- Sensualité Cancer: Blanc
(4, 2),   -- Sensualité Cancer: Bleu
(5, 4),   -- Éclat Lion: Jaune
(5, 8),   -- Éclat Lion: Orange
(6, 12),  -- Mystère Vierge: Violet
(6, 1),   -- Mystère Vierge: Blanc
(7, 9),   -- Balance Élégante: Rose
(7, 1),   -- Balance Élégante: Blanc
(8, 10),  -- Scorpion Intense: Rouge
(9, 4),   -- Sagesse Sagittaire: Jaune
(9, 12),  -- Sagesse Sagittaire: Violet
(10, 1),  -- Ambition Capricorne: Blanc
(11, 12), -- Originalité Verseau: Violet
(11, 1),  -- Originalité Verseau: Blanc
(12, 9),  -- Sensibilité Poissons: Rose
(12, 1);  -- Sensibilité Poissons: Blanc