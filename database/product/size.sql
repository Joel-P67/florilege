-- Table des tailles disponibles (réutilisable pour tous les produits)
CREATE TABLE sizes (
    id SERIAL PRIMARY KEY,
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
