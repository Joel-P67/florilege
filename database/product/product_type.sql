CREATE TABLE IF NOT EXISTS product_type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    UNIQUE(name, category_id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

INSERT INTO product_type (name, category_id) VALUES
-- Fresh Flowers (1)
('Bouquet', 1),
('Crowns', 1),
('Ornaments', 1),

-- Dried Flowers (2)
('Bouquet', 2),
('Crowns', 2),
('Ornaments', 2),

-- Plants (3)
('Cactus', 3),
('Fern', 3),
('Orchid', 3),
('Bonsai', 3),
('Flowering Plant', 3),
('Indoor Tree', 3),
('Air Plant', 3),
('Vine', 3),
('Foliage', 3),

-- Terrariums (4)
('Closed Terrarium', 4),
('Open Terrarium', 4),
('Hanging Terrarium', 4),
('Miniature Terrarium', 4),
('Aqua Terrarium', 4),
('Desert Terrarium', 4),

-- Candies (5)
('Chocolates', 5),
('Sweets', 5),

-- Equipment (6)
('Tools', 6),
('Pots', 6),
('Vases', 6),

-- Wellness (7)
('Candles', 7),
('Incense', 7),
('Essential Oils', 7),
('Perfumes', 7);
