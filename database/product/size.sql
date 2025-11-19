SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS sizes (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO sizes (id, name) VALUES
(1, 'Petit'),
(2, 'Moyen'),
(3, 'Grand'),
(4, '6 tiges'),
(5, '12 tiges'),
(6, '18 tiges'),
(7, '24 tiges'),
(8, '30 tiges');