module.exports = (app) => {

    app.get('/veiculos', (req, res) => {
        app.veiculos.findAll().then(veiculos => {
            return res.status(200).json(veiculos);
        }).catch(err => {
            return res.status(500).json({ "error" : err.errors});
        });
    });

    app.get('/veiculos/find', (req, res) => {

        var Op = app.Sequelize.Op;
       
        var query = `%${req.query.q}%`;

        app.veiculos.findAll({
            where : { 
                [Op.or] : [
                    {veiculo : {[Op.like]: query}},
                    {marca : {[Op.like]: query}},
                    {ano : {[Op.like]: query}},
                    {descricao : {[Op.like]: query}}
                ]
            }
        })
        .then(veiculos => {
            return res.status(200).json(veiculos);
        })
        .catch( err => {
            return res.status(500).json({ "erro" : err.errors});
        });
    });

    app.get('/veiculos/:id', (req, res) => {
        var id = req.params.id;
        app.veiculos.findOne({
            where : {idVeiculo : id}
        }).then(veiculo => {
            if(veiculo == null){
                return res.status(404).json({ message : 'Not Found!'});
            }
            return res.status(200).json(veiculo);
        });
    });

    app.post('/veiculos', (req, res) => {

        app.veiculos.create({
            veiculo : req.body.veiculo,
            marca : req.body.marca,
            ano : req.body.ano,
            descricao : req.body.descricao,
            vendido : req.body.vendido
        })
        .then(novoVeiculo => {
            return res.status(201).json(novoVeiculo);
        }).catch(err => {
            return res.status(500).json({ "erro" : err.errors});
        });
    });

    //Aceita fazer o put apenas do objeto todo.
    app.put('/veiculos/:id', (req, res) => {

        var id = req.params.id;
        var data = req.body;

        //Verifica se o payload contém todos os dados do objeto.
        if(!data.veiculo || !data.marca || !data.ano || !data.descricao || data.vendido == undefined){
            return res.status(400).json({message : "Parâmetros inválidos."});
        }
        
        //Verificar se o obj existe. Se não existir é criado um novo.
        app.veiculos.findOne({
            where : {idVeiculo : id}
        }).then(veiculo => {

            if(veiculo == null){
                app.veiculos.create({
                    veiculo : req.body.veiculo,
                    marca : req.body.marca,
                    ano : req.body.ano,
                    descricao : req.body.descricao,
                    vendido : req.body.vendido
                })
                .then((novoVeiculo)=> {
                    return res.status(201).json(novoVeiculo);
                }).catch(err => {
                    return res.status(500).json({ "erro" : err.errors});
                });
            } else {
                app.veiculos.update(data,
                    {where : {idVeiculo : id}
                })
                .then( (status) => {
                    return res.status(200).send({"message" : "Record updated!"});
                })
                .catch(err => {
                    return res.status(500).json("Error: " + err.errors);
                });
            }
        });
    });

    app.patch('/veiculos/:id', (req, res) => {
        var id = req.params.id;
        var data = req.body;

        //Atualiza parcialmente o objeto.
        app.veiculos.update(data,
        {where : {idVeiculo : id}})
        .then( () => {
            return res.status(200).json({"message" : "Recorded updated!"});
        })
        .catch(err => {
            return res.status(500).json("Error: " + err.errors);
        });
    });

    app.delete('/veiculos/:id', (req, res) => {

        var id = req.params.id;

        app.veiculos.destroy({
            where : {idVeiculo : id}
        })
        .then(status => {
            if(status){
                return res.status(200).json({"message" : "Record deleted!"});
            }else {
                return res.status(404).json({"message" : "Not Found!"});
            }
        })
        .catch(err => {
            return res.status(500).json({"erro" : err.errors});
        });
    });
}