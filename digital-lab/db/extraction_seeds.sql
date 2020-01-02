CREATE TABLE IF NOT EXISTS extractions (
	id INT AUTO_INCREMENT NOT NULL,
    extract_ID VARCHAR(10) NOT NULL UNIQUE,
    total_Weight DECIMAL(6,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id, extract_ID)
);

CREATE TABLE IF NOT EXISTS tags (
	id INT AUTO_INCREMENT NOT NULL,
	tag_number INT NOT NULL UNIQUE,
    weight DECIMAL(6,2) NOT NULL,
    PRIMARY KEY(id,tag_number),
    extract_ID VARCHAR(10),
    CONSTRAINT extraction_ID
    FOREIGN KEY (extract_ID)
		REFERENCES extractions(extract_ID)
        ON DELETE cascade
        ON UPDATE cascade
);