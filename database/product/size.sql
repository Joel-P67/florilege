CREATE TABLE IF NOT EXISTS sizes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO sizes (name) VALUES
('Small'),
('Medium'),
('Large'),
('6 stems'),
('12 stems'),
('18 stems'),
('24 stems'),
('30 stems');
