# Sistema de login

Sistema de login criado com nodeJs, usando express, typescript e prisma como ORM para comunicação com banco de dados.

## Rotas

### Post:

/sign => rota usada para a criação de uma conta, e inserção do usuário no banco de dados;
/login => rota usada para fazer autenticação do usuário, gerando o token de acesso;

### Get:

/usuario => retorna detalhes do usuário, sendo necessário enviar o jwt válido no header da requisição para verificação;