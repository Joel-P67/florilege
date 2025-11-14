CREATE TABLE IF NOT EXISTS seasons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO seasons (name) VALUES
('Spring'),
('Summer'),
('Autumn'),
('Winter');
