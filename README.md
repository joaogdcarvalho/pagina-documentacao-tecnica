# PÁGINA DOCUMENTAÇÃO TÉCNICA

## Sobre o Projeto

O projeto "Página Documentação Técnica" faz parte dos desafios propostos pela [freeCodeCamp](https://www.freecodecamp.org) no âmbito da Certificação de Treinamento em Web Design Responsivo e tem como foco a criação de uma página de documentação técnica voltada para a linguagem de programação Python abrangendo conceitos fundamentais até tópicos mais avançados como classes, exceções e manipulação de arquivos.

## Objetivo:
Desenvolver um aplicativo no [CodePen](https://codepen.io) que possua funcionalidades semelhantes ao seguinte exemplo: [https://codepen.io/freeCodeCamp/full/NdrKKL](https://codepen.io/freeCodeCamp/full/NdrKKL).

Este projeto visa atender às histórias de usuários listadas abaixo e garantir que todos os testes estejam passando. Além disso, é encorajado que seja adicionado um estilo pessoal ao projeto.

Para a implementação, são permitidas as seguintes tecnologias: HTML, JavaScript e CSS. Recomenda-se o uso de CSS puro, visto que é o enfoque das lições até o momento e permite praticar habilidades essenciais. Embora seja permitido o uso de Bootstrap ou SASS, é desencorajado o uso de tecnologias adicionais como jQuery, React, Angular ou Vue. O uso destas tecnologias é por conta e risco do desenvolvedor. Outros projetos proporcionarão oportunidades para explorar pilhas de tecnologia diferentes, como React. 

Relatórios de problemas que adotem a pilha de tecnologia sugerida para este projeto serão aceitos e esforços serão feitos para corrigi-los.

## História do usuário

1. Posso ver um elemento principal com um id correspondente a "main-doc", que contém o conteúdo principal da página (documentação técnica).
2. No elemento #main-doc, posso ver vários elementos de seção, cada um com uma classe de main-section. Deve haver no mínimo 5.
3. O primeiro elemento dentro de cada .main-section deve ser um elemento de cabeçalho que contém texto que descreve o tópico daquela seção.
4. Cada elemento de seção com a classe main-section também deve ter um id que corresponda ao texto de cada cabeçalho contido dentro dele. Quaisquer espaços devem ser substituídos por sublinhados (por exemplo, A seção que contém o cabeçalho "JavaScript and Java" deve ter um id correspondente a "JavaScript_and_Java").
5. Os elementos .main-section devem conter pelo menos 10 elementos p no total (não cada um).
6. Os elementos .main-section devem conter pelo menos 5 elementos de código no total (não cada um).
7. Os elementos .main-section devem conter pelo menos 5 itens de li no total (não cada um).
8. Posso ver um elemento de navegação com um id correspondente a "navbar".
9. O elemento navbar deve conter um elemento de cabeçalho que contém texto que descreve o tópico da documentação técnica.
10. Além disso, o navbar deve conter elementos de link (a) com a classe de nav-link. Deve haver um para cada elemento com a classe main-section.
11. O elemento de cabeçalho no navbar deve vir antes de qualquer elemento de link (a) no navbar.
12. Cada elemento com a classe nav-link deve conter texto que corresponda ao texto do cabeçalho dentro de cada seção (por exemplo, se você tiver uma seção/cabeçalho "Hello world", seu navbar deve ter um elemento que contenha o texto "Hello world").
13. Quando clico em um elemento navbar, a página deve navegar para a seção correspondente do elemento main-doc (por exemplo, se eu clicar em um elemento nav-link que contém o texto "Hello world", a página navega para um elemento de seção que possui esse id e contém o cabeçalho correspondente).
14. Em dispositivos de tamanho regular (laptops, desktops), o elemento com id "navbar" deve ser mostrado no lado esquerdo da tela e deve estar sempre visível para o usuário.
15. Minha página de documentação técnica deve usar pelo menos uma consulta de mídia.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

- HTML5: Para estruturar o conteúdo da página da web.
- CSS3: Para estilização e design de layout.
- JavaScript: Para adicionar interatividade e navegação suave.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
pagina-documentacao-tecnica/
|-- dist/
|   |-- index.html
|   |-- style.css
|   |-- script.js
|-- src/
|   |-- index.html
|   |-- style.css
|   |-- script.js
|-- README.md
|-- LICENSE.txt
```

## Principais Diretórios e Arquivos

- **dist/. Contém os arquivos finais do projeto, prontos para implantação.
- **src/. Contém os arquivos de código-fonte do projeto.

## Funcionalidades

A página de documentação técnica oferece informações detalhadas sobre os seguintes tópicos:

- Introdução
- Variáveis
- Loops
- Funções
- Estruturas de Dados
- Classes
- Exceções
- Módulos
- Manipulação de Arquivos
- Bibliotecas

## Como Executar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina local:

1. Clone o repositório:
   ```bash
   git clone https://github.com/example/pagina-documentacao-tecnica.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd pagina-documentacao-tecnica
   ```

3. Abra o arquivo `index.html` em seu navegador para visualizar a página de documentação técnica.

## Diretrizes de Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir pull requests, relatar bugs ou sugerir novos recursos.

## Licença

Este projeto está licenciado sob a Licença MIT.