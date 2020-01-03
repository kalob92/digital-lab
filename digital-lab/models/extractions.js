module.exports = (sequelize, DataTypes) => {
    const Extraction = sequelize.define('Extraction', {
        extract_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty: {
                    msg: "Enter an Extraction Batch Number."
                }
            }
        },
        total_weight: {
            type: DECIMAL(6,2).UNSIGNED,
            validate: {
                min: 0.01
            }
        },
        notes: {
            type: DataTypes.STRING,
        },
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    });
    return Extraction;
}