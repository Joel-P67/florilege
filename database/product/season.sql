CREATE TABLE IF NOT EXISTS seasons (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    start_day   TINYINT NOT NULL,
    start_month TINYINT NOT NULL,
    end_day     TINYINT NOT NULL,
    end_month   TINYINT NOT NULL
);

INSERT INTO seasons (id, name, start_day, start_month, end_day, end_month) VALUES
(1, 'Printemps', 20, 3, 20, 6),
(2, 'Eté', 21, 6, 22, 9),
(3, 'Automne', 23, 9, 20, 12),
(4, 'Hiver', 21, 12, 19, 3),
(5, 'Bélier', 21, 3,  20, 4),
(6, 'Taureau', 21, 4,  21, 5),
(7, 'Gémeaux', 22, 5,  21, 6),
(8, 'Cancer', 22, 6,  22, 7),
(9, 'Lion', 23, 7,  22, 8),
(10, 'Vierge', 23, 8,  22, 9),
(11, 'Balance', 23, 9,  22, 10),
(12, 'Scorpion', 23, 10, 21, 11),
(13, 'Sagittaire', 22, 11, 21, 12),
(14, 'Capricorne', 22, 12, 19, 1),
(15, 'Verseau', 20, 1,  18, 2),
(16, 'Poissons', 19, 2,  20, 3),
(17, 'Toute l''année', 1, 1, 31, 12);