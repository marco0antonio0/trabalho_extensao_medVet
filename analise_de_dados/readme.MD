**Página Inicial: Organização das Tabelas do Projeto**

**acesso rapido**
[acessar modelo esquema logico clique aqui](/analise_de_dados/modelagem_de_dados/readme.MD)

Nesta página, apresentamos a estrutura de tabelas do nosso projeto, cujo objetivo é gerenciar informações relacionadas a organizações não governamentais (ONGs), animais, usuários, perguntas e formulários. Vamos explorar como as tabelas estão organizadas para armazenar e relacionar os dados de forma eficiente.

**Tabelas do Projeto:**

1. **Tabela ONG:**

   - A tabela "ONG" registra os detalhes das organizações não governamentais envolvidas no projeto.
   - Campos incluem um ID único para cada ONG, número de telefone, nome e localização da ONG.

2. **Tabela Popularidade do Animal:**

   - A tabela "Popularidade do Animal" reflete os cliques que foram dados em animais específicos.
   - Ela registra a popularidade de um animal com base no ID do animal e do usuário, indicando a quantidade de cliques que o animal recebeu.

3. **Tabela Animais:**

   - A tabela "Animais" armazena informações abrangentes sobre os animais que fazem parte do projeto.
   - Campos incluem ID do animal, ID da ONG responsável, nome, idade, tipo, raça, pelugem, gênero, porte, indicação de deficiência e URL da imagem do animal.

4. **Tabela Usuário:**

   - A tabela "Usuário" guarda os perfis dos usuários envolvidos na aplicação web.
   - Ela contém informações como ID do usuário, endereço de e-mail, nome, senha e localização do usuário.

5. **Tabela Banco de Perguntas:**

   - A tabela "Banco de Perguntas" mantém um registro das perguntas feitas no contexto do projeto.
   - Cada pergunta é identificada por um ID único, e as respostas correspondentes são associadas a essas perguntas.

6. **Tabela Formulário:**
   - A tabela "Formulário" captura as respostas dos usuários a perguntas relacionadas aos animais.
   - Ela inclui campos como ID do animal, ID do usuário, ID da pergunta, indicador de acerto na resposta e é usada para avaliar o desempenho dos usuários.

**Interconexões e Objetivos:**

As tabelas são interligadas por meio de chaves estrangeiras para estabelecer relações entre os dados. Essa organização possibilita a análise de informações como a popularidade dos animais, interações dos usuários com os animais e perfis dos usuários. O projeto utiliza essas tabelas para simular cenários de gerenciamento e interações, aprimorando a compreensão dos conceitos de banco de dados e aplicação prática.

**Explorando o Projeto:**

A estrutura organizacional das tabelas permite que você explore diversos cenários, desde o cadastramento de animais até a avaliação dos usuários por meio dos formulários. Use as funcionalidades fornecidas pelas tabelas para aprender sobre a importância da organização de dados e suas aplicações no contexto da aplicação web. Este projeto é uma oportunidade valiosa para aprimorar suas habilidades e compreender como os bancos de dados funcionam na prática."
