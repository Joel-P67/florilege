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
 './images/bouquet-astrologie-001-01.jpg',
 './images/bouquet-astrologie-001-02.jpg',
 './images/bouquet-astrologie-001-03.jpg',
 1,  -- category_id (Fleurs Fraiches)
 1,  -- product_type_id (Bouquet)
 5   -- Bélier, 21, 3,  20, 4
),

('Terre du Taureau',
 'Un bouquet doux et naturel avec des pivoines roses et des feuillages luxuriants, reflet de la stabilité et de la nature du Taureau.',
 'Pivoines roses, Feuillages verts, Lavande',
 './images/bouquet-astrologie-002-01.jpg',
 './images/bouquet-astrologie-002-02.jpg',
 './images/bouquet-astrologie-002-03.jpg',
 1,  -- category_id (Fleurs Fraiches)
 1,  -- product_type_id (Bouquet)
 6   -- Taureau, 21, 4,  21, 5
),

('Douceur Gémeaux',
 'Un bouquet léger et aérien mêlant marguerites blanches et lilas, évoquant la dualité et la vivacité des Gémeaux.',
 'marguerites blanches, lilas, gypsophiles',
 '/images/bouquets-fleurs-fraiches-astrologie-003-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-003-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-003-03.webp',
 1,  -- category_id (Fleurs Fraiches)
 1,  -- product_type_id (Bouquet)
 7   -- Gémeaux, 22, 5,  21, 6
),
('Sensualité Cancer',
 'Un bouquet romantique avec des roses blanches et des hortensias bleus, symbolisant la douceur et la sensibilité du Cancer.',
 'roses blanches, hortensias bleus, feuillage argenté',
 '/images/bouquets-fleurs-fraiches-astrologie-004-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-004-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-004-03.webp',
 1,  -- category_id (Fleurs Fraiches)
 1,  -- product_type_id (Bouquet)
 8   -- Cancer, 22, 6,  22, 7
),
('Éclat Lion',
 'Un bouquet flamboyant de tournesols et de lys jaunes, incarnant la force et la générosité du Lion.',
 'tournesols, lys jaunes, feuillage vert',
 '/images/bouquets-fleurs-fraiches-astrologie-005-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-005-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-005-03.webp',
 1, -- category_id (Fleurs Fraiches)
 1, -- product_type_id (Bouquet)
 9   -- Lion, 23, 7,  22, 8
),
('Mystère Vierge',
 'Un bouquet élégant de lilas, anémones blanches et eucalyptus, reflétant la discrétion et la pureté de la Vierge.',
 'lilas, anémones blanches, eucalyptus',
 '/images/bouquets-fleurs-fraiches-astrologie-006-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-006-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-006-03.webp',
 1, -- category_id (Fleurs Fraiches)
 1, -- product_type_id (Bouquet)
 10  -- Vierge, 23, 8,  22, 9
),
('Balance Élégante',
 'Un bouquet harmonieux avec des roses pastel et des pivoines, évoquant l''équilibre et la beauté de la Balance.',
 'roses pastel, pivoines, feuillage vert',
 '/images/bouquets-fleurs-fraiches-astrologie-007-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-007-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-007-03.webp',
 1, -- category_id (Fleurs Fraiches)
 1, -- product_type_id (Bouquet)
 11  -- Balance, 23, 9,  22, 10
),
('Scorpion Intense',
 'Un bouquet profond de dahlias rouges, anémones noires et feuillages sombres, pour refléter la passion et le mystère du Scorpion.',
 'dahlias rouges, anémones noires, feuillages sombres',
 '/images/bouquets-fleurs-fraiches-astrologie-008-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-008-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-008-03.webp',
 1, -- category_id (Fleurs Fraiches)
 1, -- product_type_id (Bouquet)
 12  -- Scorpion
),
('Sagesse Sagittaire',
 'Un bouquet libre et sauvage avec des tournesols, lavande et eucalyptus, évoquant la liberté et l’aventure du Sagittaire.',
 'tournesols, lavande, eucalyptus',
 '/images/bouquets-fleurs-fraiches-astrologie-009-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-009-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-009-03.webp',
 1, -- category_id (Fleurs Fraiches)
 1, -- product_type_id (Bouquet)
 13  -- Sagittaire, 22, 11, 21, 12
),
('Ambition Capricorne',
 'Un bouquet sobre et élégant avec des chrysanthèmes blancs et feuillage vert foncé, pour représenter la persévérance du Capricorne.',
 'chrysanthèmes blancs, feuillage vert foncé, branches sèches',
 '/images/bouquets-fleurs-fraiches-astrologie-010-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-010-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-010-03.webp',
 1, -- category_id (Fleurs Fraiches)
 1, -- product_type_id (Bouquet)
 14  -- Capricorne, 22, 12, 19, 1
),
('Originalité Verseau',
 'Un bouquet moderne et atypique avec des fleurs exotiques comme les orchidées et des fougères, symbole de l’innovation du Verseau.',
 'orchidées, fleurs exotiques, fougères',
 '/images/bouquets-fleurs-fraiches-astrologie-011-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-011-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-011-03.webp',
 1, -- category_id (Fleurs Fraiches)
 1, -- product_type_id (Bouquet)
 15  -- Verseau, 20, 1,  18, 2
),
('Sensibilité Poissons',
 'Un bouquet doux et fluide avec des hortensias roses, freesias blancs et eucalyptus, reflétant la sensibilité et la douceur des Poissons.',
 'hortensias roses, freesias blancs, eucalyptus',
 '/images/bouquets-fleurs-fraiches-astrologie-012-01.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-012-02.webp',
 '/images/bouquets-fleurs-fraiches-astrologie-012-03.webp',
 1, -- category_id (Fleurs Fraiches)
 1, -- product_type_id (Bouquet)
 16  -- Poissons
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
