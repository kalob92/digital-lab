CREATE TABLE IF NOT EXISTS Extraction (
	id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    extractID VARCHAR(10) NOT NULL UNIQUE,
    totalWeight DECIMAL(6,2) UNSIGNED,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id, extractID)
);

CREATE TABLE IF NOT EXISTS Tag (
	id INT UNSIGNED AUTO_INCREMENT NOT NULL,
	tagNumber INT UNSIGNED NOT NULL UNIQUE,
    weight DECIMAL(6,2) UNSIGNED NOT NULL,
    PRIMARY KEY(id,tagNumber),
    extractID VARCHAR(10),
    CONSTRAINT extractionID
    FOREIGN KEY (extractID)
		REFERENCES extraction(extractID)
        ON DELETE cascade
        ON UPDATE cascade
);