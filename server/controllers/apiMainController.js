const db = require('../database/models');

const controller = {

//Controladores para desplegar listado de cervezas

    list: async function(req, res){
        try {
            let list = await db.Cervezas.findAll();
            res.json({
                total: list.length,
                status: 200,
                data: list
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }
    },

//Controladores para desplegar listado de cervezas
    detail: async function(req, res){
        try {
            let detail = await db.Cervezas.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.json({
                status: 200,
                data: detail
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).send('Hubo un error en la API');
        }
    }

}

module.exports = controller;