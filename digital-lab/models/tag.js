module.exports = (sequelize, DataTypes) => {
    let Tag = sequelize.define('Tag', {
        tagNumber: {
            type: DataTypes.STRING,
            allowNull: 0,
            unique: 1,
            primaryKey: 1,
            validate: {
                notEmpty: {
                    msg: "Enter an METRC Tag Number."
                }
            }
        },
        weight: {
            type: DataTypes.DECIMAL(6,2).UNSIGNED,
            allowNull: 0,
            validate: {
                min: 0.01,
                notEmpty: {
                    msg: "You must enter a weight above 0.01"
                }
            }
        },
        extractionID: DataTypes.STRING
    });
    Tag.associate = (models) => {
        Tag.belongsTo(models.Extraction, {foreignKey: 'extractionID', as: 'extraction'})
    };
    return Tag
};

// tag_number INT UNSIGNED NOT NULL UNIQUE,
// weight DECIMAL(6,2) UNSIGNED NOT NULL,
// PRIMARY KEY(id,tag_number),
// extract_ID VARCHAR(10),
// CONSTRAINT extraction_ID
// FOREIGN KEY (extract_ID)
// [[REFERENCES extraction(extract_ID)
// ON DELETE cascade
// ON UPDATE cascade]]