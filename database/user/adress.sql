CREATE TABLE IF NOT EXISTS adress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    label VARCHAR(100),
    street VARCHAR(255) NOT NULL,
    postal_code VARCHAR(20),
    city VARCHAR(100),
    country VARCHAR(100) DEFAULT 'France',
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
