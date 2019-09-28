module.exports = (sequelize, Sequelize) => {
    var Veiculo = sequelize.define('veiculo', {
        idVeiculo : {
            type : Sequelize.INTEGER,
            primaryKey : true
        },
        veiculo : {
            type : Sequelize.STRING,
            allowNull: false,
            validate : {
                notEmpty : true
            }
        },
        marca : {
            type: Sequelize.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        ano : {
            type : Sequelize.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        descricao : {
            type : Sequelize.TEXT,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        vendido : {
            type : Sequelize.BOOLEAN,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        }
    });

    return Veiculo;
}