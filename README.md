# test

O termo API (Application Programming Interface ou, em português, Interface de Programação de Aplicações)

API pode ser definida como uma API SOAP ou REST. O REST é um acrônimo para Representational State Transfer.




API web = buscar um cep de exemplo
API de codigo fonte = buscar data

Responsabilidade no REST
Existe no REST um principio chamado STATELESS(sem estado),

Requisicoes e Comunicacoes
O REST precisa que um cliente faca uma requisicao para o servidor para enviar ou modificar um dado

- Um verbo ou método HTTP, que define que tipo de operação o servidor vai realizar;
- Um header, com o cabeçalho da requisição que passa informações sobre a requisição;
- Um path (caminho ou rota) para o servidor, como por exemplo
- Informação no corpo da requisição, sendo esta informação opcional.

Métodos HTTP
Em aplicação REST, os métodos mais utilizados são:
- O método GET é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;
- O método POST foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado para suportar formulários HTML;
- O método PUT edita e atualiza documentos em um servidor;
- O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do servidor.

Códigos de Respostas
Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. Por exemplo:
Estes são os principais :
- 200 (OK), requisição atendida com sucesso;
- 201 (CREATED), objeto ou recurso criado com sucesso;
- 204 (NO CONTENT), objeto ou recurso deletado com sucesso;
- 400 (BAD REQUEST), ocorreu algum erro na requisição (podem existir inumeras causas);
- 401 (Unauthorized) Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou    seja, o cliente deve se autenticar para obter a resposta solicitada.
- 403 (Forbidden) O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.
- 404 (NOT FOUND), rota ou coleção não encontrada;
- 422 (Unprocessable Entity) A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.
- 500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor.

- Criar um servidor local usando o Express e configurando-o para escutar requisições em uma porta específica
- Como estruturar as requisições da API, utilizando corretamente os verbos HTTP e padronizando o endpoint de acordo com o padrão REST;
- Devolver dados como resposta às requisições, usando o padrão JSON;