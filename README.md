# Backend

## Instruções

Na pasta  misc existe um script sql no qual você deve importar para o banco mysql.
Use o MySQLWorkbench para executar o script gerando o banco e as tabelas necessária.
Crie um arquivo com o nome .env na raiz da aplicação. (Mesmo nível do arquivo app.js).
Neste arquivo ficará nossa variáveis de ambiente.

Defina as variaveis:
PORT=3000 //Porta do nosso servidor.

DBNAME=dbveiculo //Nome do banco de dados. *Não modifique esta variável, pois ela está de acordo com o script do banco.
DBHOST=localhost //host do seu banco mysql
DBPASS=suasenha //Senha do banco mysql
DBUSER=root //usuario do banco mysql

Após seguir estes passos, abra o terminal na raiz da aplicação, mesmo nível do arquivo app.js, e então execute o comando:

npm start

Iniciará o projeto então use um client Rest para fazer oas requisições.

o caminho ficará de acordo com a porta definida no arquivo .env.

Exemplo: porta definida: 3000;
Caminho: localhost:3000/veiculos/find?q=corsa

Entry Points:
GET /veiculos - Retorna todos os veículos;
GET /veiculos/find - Retorna os veículos de acordo com o termo passado parâmetro q;
GET /veiculos/{id} - Retorna os detalhes do veículo;
POST /veiculos - Adiciona um novo veículo;
PUT /veiculos/{id} - Atualiza os dados de um veículo;
PATCH /veiculos/{id} - Atualiza apenas alguns dados do veículo;
DELETE /veiculos/{id} - Apaga o veículo;
