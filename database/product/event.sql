CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category_id INT NOT NULL,
    product_type_id INT NOT NULL,
    description TEXT,
    end_day     TINYINT NOT NULL,
    end_month   TINYINT NOT NULL,
    composition TEXT,
    image1 VARCHAR(255),
    image2 VARCHAR(255),
    image3 VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (product_type_id) REFERENCES product_type(id)
);

-- Saint-Valentin
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Saint-Valentin', 'Bouquet romantique pour la personne aimée', 14, 2);

-- Fête des mères (dernier dimanche de mai, approximé au 31 mai)
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Fête des mères', 'Traditionnellement des fleurs', 31, 5);

-- Fête des pères (troisième dimanche de juin, approximé au 21 juin)
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Fête des pères', 'Bouquet ou plante pour papa', 21, 6);

-- Fête des grands-mères (premier dimanche de mars, approximé au 7 mars)
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Fête des grands-mères', 'Bouquet pour grand-mère', 7, 3);

-- Fête des grands-pères (premier dimanche d’octobre, approximé au 7 octobre)
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Fête des grands-pères', 'Bouquet pour grand-père', 7, 10);

-- Noël
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Noël', 'Bouquet pour décoration ou cadeau', 25, 12);

-- Nouvel An
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Nouvel An', 'Fleurs pour la maison ou offrir', 1, 1);

-- Pâques (variable, approximé ici au dimanche d’avril, par défaut le 17 avril)
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Pâques', 'Bouquets printaniers, décorations florales', 17, 4);

-- Toussaint
INSERT INTO events (name, description, start_day, start_month, end_day, end_month) VALUES
('Toussaint', 'Fleurs pour cimetières', 1, 11);
