**Tabelas do Banco de Dados:**
**acesso rapido**
[acessar modelo esquema logico clique aqui xlsx("excel")](/analise_de_dados/modelagem_de_dados/EsquemaLogico.xlsx)

1. **ONG:**

   - **ID:** Identificador único da ONG (Auto-Incremento).
   - **TELEFONE:** Número de telefone da ONG.
   - **NOME:** Nome da ONG.
   - **LOCALIZACAO:** Localização da ONG.

2. **Popularidade do Animal:**

   - **ID_ANIMAL:** Chave estrangeira que se relaciona com o ID do animal.
   - **ID_USUARIO:** Chave estrangeira que se relaciona com o ID do usuário.
   - **POPULARIDADE:** Valor que indica a popularidade do animal.

3. **Animais:**

   - **ID_ONG:** Chave estrangeira que se relaciona com o ID da ONG à qual o animal pertence.
   - **ID:** Identificador único do animal (Auto-Incremento).
   - **NOME:** Nome do animal.
   - **IDADE:** Idade do animal.
   - **TIPO:** Tipo do animal.
   - **RACA:** Raça do animal.
   - **PELUGEM:** Características da pelugem do animal.
   - **GENERO:** Gênero do animal.
   - **PORTE:** Tamanho do animal.
   - **DEFICIÊNCIA:** Indicador se o animal possui alguma deficiência.
   - **URL_IMG:** URL da imagem do animal.

4. **Usuário:**

   - **ID:** Identificador único do usuário (Auto-Incremento).
   - **EMAIL:** Endereço de e-mail do usuário.
   - **NOME:** Nome do usuário.
   - **SENHA:** Senha do usuário.
   - **LOCALIZACAO:** Localização do usuário.

5. **Banco de Perguntas:**

   - **ID:** Identificador único da pergunta (Auto-Incremento).
   - **RESPOSTA:** Resposta associada à pergunta.
   - **PERGUNTA:** Texto da pergunta.

6. **Tabela Formulário:**
   - **ID_ANIMAL:** Chave estrangeira que se relaciona com o ID do animal.
   - **ID_USUARIO:** Chave estrangeira que se relaciona com o ID do usuário.
   - **ID_PERGUNTA:** Chave estrangeira que se relaciona com o ID da pergunta.
   - **ACERTO:** Indicador de acerto na resposta.

**Lógica de Avaliação do Formulário:**

Se a soma dos valores na coluna ACERTO for maior que 7, então o resultado é 'passou'; caso contrário, o resultado é 'não passou'.
