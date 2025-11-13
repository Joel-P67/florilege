CREATE TABLE IF NOT EXISTS category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO category (name) VALUES
('Fresh Flowers'),
('Dried Flowers'),
('Plants'),
('Terrariums'),
('Candies'),
('Equipment'),
('Wellness');
