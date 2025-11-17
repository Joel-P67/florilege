CREATE TABLE IF NOT EXISTS seasons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    start_day   TINYINT NOT NULL,
    start_month TINYINT NOT NULL,
    end_day     TINYINT NOT NULL,
    end_month   TINYINT NOT NULL
);

INSERT INTO seasons (name, start_day, start_month, end_day, end_month) VALUES
('Spring', 20, 3, 20, 6),
('Summer', 21, 6, 22, 9),
('Autumn', 23, 9, 20, 12),
('Winter', 21, 12, 19, 3);
