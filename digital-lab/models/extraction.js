module.exports = (sequelize, DataTypes) => {
    let Extraction = sequelize.define('Extraction', {
        extractID: {
            type: DataTypes.STRING,
            allowNull: 0,
            unique: 1,
            primaryKey: 1,
            validate: {
                notEmpty: {
                    msg: "Enter an Extraction Batch Number."
                }
            }
        },
        totalWeight: {
            type: DataTypes.DECIMAL(6,2).UNSIGNED,
            validate: {
                min: 0.01
            }
        },
        notes: {
            type: DataTypes.STRING,
        }
    });
    Extraction.associate = (models) => {
        Extraction.hasMany(models.Tag, {as: 'tag'})
    };
    return Extraction;
};