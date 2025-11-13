CREATE TABLE seasons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO seasons (name) VALUES
('Spring'),
('Summer'),
('Autumn'),
('Winter');
