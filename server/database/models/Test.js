module.exports = (sequelize, dataTypes) => {
    let alias = 'Test';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        favourite_number: {
            type: dataTypes.INTEGER(3),
            allowNull: false
        }
    };
    let config = {
        tableName: 'test',
        timestamps: false
    }

    const test = sequelize.define(alias, cols, config); 

    return test;
};