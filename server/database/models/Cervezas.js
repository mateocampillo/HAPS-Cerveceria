module.exports = (sequelize, dataTypes) => {
    let alias = 'Cervezas';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        foto_string: {
            type: dataTypes.STRING(255),
            allowNull: false,
            defaultValue: 'img_default_cerveza'
        }
    };
    let config = {
        tableName: 'cervezas',
        timestamps: false
    }

    const cervezas = sequelize.define(alias, cols, config); 

    return cervezas;
};