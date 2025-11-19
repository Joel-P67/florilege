SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS color (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO color (id, name) VALUES
(1, 'Blanc'),
(2, 'Bleu'),
(3, 'Gris'),
(4, 'Jaune'),
(5, 'Marron'),
(6, 'Multicolore'),
(7, 'Noir'),
(8, 'Orange'),
(9, 'Rose'),
(10, 'Rouge'),
(11, 'Vert'),
(12, 'Violet');
