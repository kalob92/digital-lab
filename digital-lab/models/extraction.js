module.exports = (sequelize, DataTypes) => {
    const Extraction = sequelize.define('Extraction', {
        extract_ID: {
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
        total_weight: {
            type: DataTypes.DECIMAL(6,2).UNSIGNED,
            validate: {
                min: 0.01
            }
        },
        notes: {
            type: DataTypes.STRING,
        }
    });
    return Extraction;
}