var app = require('./server/server');

app.listen(process.env.PORT, () => {
    console.log('Servidor ouvindo na porta ' + process.env.PORT + '.');
});