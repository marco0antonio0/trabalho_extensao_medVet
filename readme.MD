# Projeto de Doação de Animais: Adote um Pet Online

![img](/images/image_logo_readmes.png)

## Acesso preview ao site em desenvolvimento

- [acesse clicando aqui](https://adote.nova-work.cloud/)

## Acesso rapido

clique no topico que deseja acesso

- [todas etapas](/etapas_dev/readme.MD)
  - [etapas 1](/etapas_dev/etapa_1/readme.MD)
    - desc: levantamento de requisitos
  - [etapas 2](/etapas_dev/etapa_2/readme.MD)
    - desc: necessidades de cada tela
  - [etapas 3](/etapas_dev/etapa_3/readme.MD)
    - desc: desenvolver esboços e layouts das telas
  - [etapas 4](/etapas_dev/etapa_4/readme.MD)
    - desc: guia de preparação de ambiende de desenvolvimento
  - [etapas 5](/etapas_dev/etapa_5/readme.MD)
    - desc: desenvolver as telas necessariamente planejadas
  - etapas 6
    - Blog e Integração com Contato
  - etapas 7 -- fase atual em andamento
    - Refinamento e Ajustes Finais
  - etapas 8 -- fase atual em andamento
    - Prototipação de Alta Fidelidade
  - etapas 9 -- _Proxima fase em espera_
    - Polimento e Preparação para Lançamento
    - Captação de parcerias como ONGs e Abrigos na região de belém do Pará

## Introdução

No mundo contemporâneo, a tecnologia tem desempenhado um papel crucial na conexão de pessoas e na resolução de desafios sociais. Nesse contexto, surge o projeto _"Adote um Pet Online"_, uma iniciativa inovadora que busca unir pessoas em busca de um novo amigo de quatro patas e promover o bem-estar animal. Desenvolvido em parceria entre o grupo acadêmico de extensão de Ciência da Computação e o grupo acadêmico de Medicina Veterinária da **UNAMA Parque Shopping**, o projeto visa facilitar o processo de adoção de animais por meio de uma plataforma digital interativa.

## Origem, Finalidade e Principais Conceitos do Next.js

- **Origem:** O Next.js é um framework de desenvolvimento web construído sobre o React. Ele foi criado pela Zeit e foi publicado pela primeira vez em 2016. A ideia por trás do Next.js é simplificar o desenvolvimento de aplicações web utilizando o React, fornecendo um framework poderoso para lidar com várias questões, como renderização no lado do servidor (SSR), roteamento, código assíncrono, etc.

- **Finalidade:**
A finalidade principal do Next.js é permitir que os desenvolvedores aproveitem o poder do React e tecnologias relacionadas para construir aplicações web de alto desempenho, escaláveis e de fácil manutenção. Ele oferece uma variedade de recursos que aumentam a eficiência no desenvolvimento e tornam o resultado final mais otimizado:
Renderização no lado do servidor (SSR): 

+ O Next.js suporta a renderização no lado do servidor, o que significa que as páginas podem ser pré-renderizadas no servidor, melhorando a SEO e a velocidade de carregamento da página.

+ Roteamento Dinâmico: O roteamento no Next.js é fácil de usar e suporta páginas dinâmicas, onde parâmetros podem ser incluídos na URL.

+ Código assíncrono e carregamento incremental: O Next.js facilita o carregamento assíncrono de módulos, reduzindo os tempos de carregamento da página.

+ Pronto para Produção: O Next.js é otimizado para produção, com recursos como empacotamento de código, otimização de imagens e suporte ao HTTP/2.

+ Substituição de Módulo em Tempo Real (HMR): Isso permite que você veja as mudanças imediatamente durante o desenvolvimento, sem precisar recarregar a página.


- **Principais Conceitos:**

+ Página: No Next.js, a página é a unidade básica de roteamento e renderização. Cada arquivo JavaScript (ou TypeScript) no diretório de "pages" corresponde a uma página acessível por meio de uma URL.

+ Rotas de API: Usando o Next.js, você pode criar rotas de API diretamente no mesmo projeto e organizá-las na pasta "pages/api". Isso simplifica a criação de endpoints de API.

+ GetServerSideProps e GetStaticProps: Essas funções são usadas para buscar e fornecer dados para a página, seja durante a renderização no lado do servidor (SSR) ou no momento da construção (SSG).

+ Roteamento Dinâmico: O Next.js suporta o roteamento dinâmico de páginas, permitindo que você crie URLs com parâmetros que podem ser acessados por meio de consultas nos componentes de página.

+ Estilos e CSS-in-JS: O Next.js suporta estilos globais e modulares e permite o uso de bibliotecas CSS-in-JS, como Styled-Components.

+ Tratamento de Erros Personalizados: Você pode personalizar a forma como os erros são tratados em sua aplicação usando a função getInitialProps ou getServerSideProps.

+ Implantação em Produção: O Next.js inclui comandos para construir e otimizar aplicações para implantação em produção.

+ Em resumo, o Next.js é um framework poderoso para o desenvolvimento de aplicações web React, projetado para simplificar muitos aspectos do desenvolvimento, melhorando o desempenho, a SEO e a experiência do desenvolvedor. É amplamente adotado por desenvolvedores que desejam criar aplicações modernas e eficientes.

## Objetivos do trabalho

1.	Seleção do Framework: Escolher o framework adequado para o projeto.
1.	Aprendizado e Treinamento: Dominar o uso do framework.
1.	Implementação Estratégica: Planejar e executar a integração do framework no projeto.
1.	Testar e Otimizar: Realizar testes, depuração e otimização do desempenho.
1.	Documentação e Manutenção: Manter documentação atualizada e garantir a evolução sustentável do framework no projeto.

A pesquisa é busca identificar a melhor solução para um projeto, reduzir riscos, aumentar eficiência no desenvolvimento, economizar tempo e recursos de software, melhorar a qualidade do produto final, facilitar a manutenção contínua, capacitar a equipe, preparar o projeto para o futuro e obter um entendimento profundo do framework escolhido. Em suma, a pesquisa visa garantir uma implementação eficaz e benéfica do framework, resultando em um software de alta qualidade e sustentável.


## Descrição do Projeto

O projeto consiste em um site dedicado à doação de animais de estimação, proporcionando uma experiência amigável e eficaz para os interessados em adotar. Ao acessar o site, os usuários serão recebidos por uma lista horizontal de fotos de animais disponíveis para adoção. Ao selecionar uma imagem, os usuários serão direcionados a um questionário (quizz) que contém quatro perguntas relevantes relacionadas à responsabilidade e ao cuidado com os animais.

## Funcionamento do Quizz

O quizz tem o objetivo de avaliar a afinidade do adotante em potencial com as necessidades do animal, garantindo assim um lar adequado e amoroso. Após responder às perguntas, o usuário receberá um feedback imediato indicando se passou no quizz ou não. Se o usuário passar, será encaminhado diretamente para o contato da instituição ou pessoa que detém a posse do animal. Caso não passe, será redirecionado para um blog de aprendizado, onde encontrará informações sobre os cuidados necessários para animais de estimação e dicas para melhorar sua preparação.

## Objetivo e Benefícios

O principal objetivo deste projeto é criar uma plataforma que torne a adoção responsável de animais de estimação mais acessível, ao mesmo tempo em que educa os adotantes sobre as responsabilidades e cuidados necessários para acolher um novo membro na família. Para atingir esse objetivo, a escolha da tecnologia desempenha um papel crucial. Foi adotada a ferramenta Next.js, uma estrutura de desenvolvimento JavaScript altamente sofisticada, reconhecida por sua eficiência e versatilidade.

O Next.js simplifica significativamente o processo de implantação em serviços de nuvem PAAS (Platform as a Service), onde o arquivo Node é hospedado e o domínio é gerenciado com facilidade. Isso garante que a plataforma esteja sempre disponível e funcione de maneira eficiente, permitindo que os adotantes acessem as informações de forma rápida e confiável.

Além disso, o Next.js se destaca na criação de uma API segura e bem estruturada. Ele oferece uma base sólida para a entrega de informações, garantindo que os dados sejam tratados com segurança e conformidade. Essa abordagem técnica sólida contribui para a qualidade e a segurança do projeto, proporcionando aos usuários uma experiência excepcional.

## Impacto Acadêmico e Parcerias

A colaboração entre os grupos acadêmicos de Ciência da Computação e Medicina Veterinária é fundamental para o sucesso do projeto. A equipe de Ciência da Computação ficará responsável pelo desenvolvimento da plataforma e da interface do usuário, enquanto a equipe de Medicina Veterinária contribuirá com seu conhecimento especializado para elaborar as perguntas do quizz e fornecer conteúdo educacional relevante e aprimoramento dos demais requisitos e necessidades do projeto junto a equipe de ciencias da computação.

## Justificativa do uso do framework **next.js**

- **Implantação Simplificada:** O Next.js facilitou o processo de deploy para os desenvolvedores, visto os recursos de enpacotamento e otimização integrados na ferramenta.

- **Desenvolvimento Full-Stack:** A escolha pelo Next.js simplificou o desenvolvimento full-stack da aplicação, permitindo o desenvolvimento isolado do backend e do front end.

- **Experiência Prévia com a Ferramenta:** Um dos principais motivos pela escolha do framework foi devido à experiência prévia dos desenvolvedores envolvidos com a ferramenta. 

- **Comunidade Forte e Consistente:** Devido a popularidade do framework e a comunidade sólida e consistente, a facilidade para encontrar suporte para possíveis erros foi um dos fatores cruciais para a escolha do framework.

O Next.js se demonstrou uma excelente escolha para o desenvolvimento do projeto, visto que ofereceu diversos recursos e vantagens para os desenvolvedores do projeto.


## Conclusão

O projeto _"Adote um Pet Online"_ é uma iniciativa inovadora que visa unir pessoas interessadas em adotar animais de estimação de forma responsável e consciente. Através da colaboração entre os grupos acadêmicos, espera-se criar uma ferramenta eficaz para promover a adoção de animais e disseminar informações cruciais sobre o cuidado animal. Com isso, o projeto não apenas enriquecerá a vida de muitos animais e adotantes, mas também proporcionará uma experiência de aprendizado valiosa para a comunidade em geral.

## Orientador

- [@Erminio Augusto Ramos da Paixao](http://lattes.cnpq.br/3441462516404507)

## Equipe ciencias da computação

- [@Marco Antônio](https://github.com/marco0antonio0)
- [@Gustavo Henrique](https://github.com/gustavo-henrique-pereira-lima)
- [@Alexsandro Fernandes](https://github.com/AlexsandroFernandesNascimento)
- [@Jean Arthur](https://github.com/JeanArthurCostaDias)
- [@Diosne Marlon](https://github.com/DiosneMarlon)
- [@Kauan Leandro](https://github.com/kauanleandr)
- [@Natalia](https://github.com/naty63194)
- @Davi Wendell
- @Beatriz Silva
- @Manoel Victor
- @Renan Tavares
