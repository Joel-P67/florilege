-- ------------------------------------------------
-- Table article
-- ------------------------------------------------
CREATE TABLE IF NOT EXISTS article (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    composition TEXT,
    image1 VARCHAR(255),
    image2 VARCHAR(255),
    image3 VARCHAR(255),
    category_id INT NOT NULL,
    product_type_id INT NOT NULL,
    season_id INT,   -- NULL = toute l'année
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (product_type_id) REFERENCES product_type(id),
    FOREIGN KEY (season_id) REFERENCES seasons(id)
);

-- ------------------------------------------------
-- Exemple d'insertion d'un article
-- ------------------------------------------------
INSERT INTO article 
(name, description, composition, image1, image2, image3, category_id, product_type_id, season_id)
VALUES
('Feu du Bélier',
 'Un bouquet énergique mêlant œillets rouges et roses orangées, symbolisant la passion et le dynamisme du Bélier.',
 'œillets rouges, roses orangées, feuillage vert',
 './images/bouquet-astrologie-001.jpg',
 './images/bouquet-astrologie-002.jpg',
 './images/bouquet-astrologie-003.jpg',
 1,  -- category_id (Fleurs Fraiches)
 1,  -- product_type_id (Bouquet)
 1   -- season_id (Printemps)
);

-- Récupérer l'ID généré
SET @article_id = LAST_INSERT_ID();

-- ------------------------------------------------
-- Requête pour récupérer toutes les informations avec noms lisibles et toutes les couleurs
-- ------------------------------------------------
SELECT 
    a.id AS article_id,
    a.name AS article_name,
    a.description,
    a.composition,
    a.image1, a.image2, a.image3,
    c.name AS category_name,
    pt.name AS product_type_name,
    s.name AS season_name,
    GROUP_CONCAT(col.name SEPARATOR ', ') AS colors
FROM article a
JOIN category c ON a.category_id = c.id
JOIN product_type pt ON a.product_type_id = pt.id
LEFT JOIN seasons s ON a.season_id = s.id
LEFT JOIN article_color ac ON a.id = ac.article_id
LEFT JOIN color col ON ac.color_id = col.id
WHERE a.id = @article_id
GROUP BY a.id;
