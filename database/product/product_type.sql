CREATE TABLE IF NOT EXISTS product_type (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO product_type (id, name) VALUES

(1, 'Bouquet'),
(2, 'Couronne'),
(3, 'Ornements'),
(4, 'Cactus'),
(5, 'Fougère'),
(6, 'Orchidée'),
(7, 'Bonsaï'),
(8, 'Plante à fleurs'),
(9, 'Arbre d''intérieur'),
(10, 'Plante aérienne'),
(11, 'Vigne'),
(12, 'Feuillage'),
(13, 'Terrarium fermé'),
(14, 'Terrarium ouvert'),
(15, 'Terrarium suspendu'),
(16, 'Terrarium miniature'),
(17, 'Terrarium aquatique'),
(18, 'Terrarium désertique'),
(19, 'Chocolats'),
(20, 'Bonbons'),
(21, 'Outils'),
(22, 'Pots'),
(23, 'Vases'),
(24, 'Bougies'),
(25, 'Encens'),
(26, 'Huiles essentielles'),
(27, 'Parfums');