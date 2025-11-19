SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS category (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO category (id, name) VALUES
(1, 'Fleurs Fraiches'),
(2, 'Fleurs Séchées'),
(3, 'Plantes'),
(4, 'Terrariums'),
(5, 'Bonbons'),
(6, 'Équipement'),
(7, 'Bien-être');