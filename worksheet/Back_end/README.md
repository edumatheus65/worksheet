Como criar e configurar um servidor HTTP com express

1 - Primeiramente, você deve ter o ambiente Node.js instalado.
2 - Crie o projeto na pasta raiz com a extenção .js "index.js".
3 - Dentro da pasta inicie projeto node.js usando npm intall -y.
4 - instale o express com o comando: npm intall --save express.
5 - Após finalizar a instalação importe o express no arquivo index.js "const express = require express".
6 - após declare a constante app: "const app = express()".
7 - utilize o método listen() e escolha uma porta como por exemplo a porta 3000.
8 - Porém ao acessar o servidor pela porta 3000 (http://localhost:3000/), vamos obter a mensagem “Cannot GET /”.
9 - use o método get() para configurar uma rota.
10 - declare dois parametros a rota e o que vamos retornar nesta requisição (request e response).
11 - No arquivo index.js importe a pasta data juntamente com seu arquivo
12 - Use como rota o directorio que foi importado



<!-- Permitir que a URL tenha permissão de acesso a API com CORS. -->

1 - Com o projeto aberto na pasta raiz, será aberto novo terminal insta-le a dependência cors usando npm install cores.
2 - Após instalar a dependência. No arquivo "index.js" necessário importar a dependência para o projeto, const cors = require('cors').
3 - Após finalizar a instalação importe o cors no arquivo index.js "const cors = require ('cors')".
6 - Em seguida crie o Middleware para executar o cors: app.use(cors()).