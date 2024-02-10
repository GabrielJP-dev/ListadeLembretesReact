# Meus Lembretes

## 1. Premissas

#### Linguagens de Programação

- C#:* A linguagem C# foi escolhida para o desenvolvimento do backend da aplicação de lembretes devido à sua eficiência e ampla integração com o framework .NET. Sua sintaxe orientada a objetos e sua forte tipagem estática proporcionam um ambiente de desenvolvimento seguro e escalável.

- *React:* Para o frontend da aplicação, optamos pelo React devido à sua capacidade de criar interfaces de usuário dinâmicas e responsivas. A sua arquitetura baseada em componentes permite uma organização eficiente do código, facilitando a manutenção e a escalabilidade da aplicação.

#### Frameworks

-  *.NET:* O framework .NET foi escolhido como a base para o desenvolvimento da aplicação de lembretes devido à sua versatilidade e capacidade de suportar o desenvolvimento de aplicações web robustas e escaláveis. A utilização do .NET proporciona um ambiente de desenvolvimento coeso e integrado, facilitando a implementação de funcionalidades complexas.

#### Plataformas de Desenvolvimento

  - *Visual Studio para C# .NET:* O Visual Studio é a plataforma de desenvolvimento preferida para o desenvolvimento em C# .NET devido à sua ampla gama de recursos e ferramentas integradas. Ele oferece um ambiente de desenvolvimento poderoso e intuitivo, que permite aos desenvolvedores criar e depurar código de forma eficiente.
  
 - *VS Code para React:* Para o desenvolvimento do frontend em React, utilizamos o Visual Studio Code devido à sua leveza, flexibilidade e extensibilidade. O VS Code oferece suporte robusto para o desenvolvimento em JavaScript e React, com uma vasta biblioteca de extensões que facilitam o desenvolvimento e aumentam a produtividade.

#### Banco de Dados

 - *SQL Server:* O SQL Server foi selecionado como o sistema de gerenciamento de banco de dados para a aplicação de lembretes devido à sua confiabilidade, escalabilidade e recursos avançados de segurança. O SQL Server oferece uma plataforma robusta para armazenamento e manipulação de dados, garantindo integridade e desempenho.

####  Ferramentas de Gerenciamento

- *SQL Server Management Studio (SSMS):* O SSMS é a ferramenta de gerenciamento de banco de dados escolhida para administrar e manter o banco de dados SQL Server. Com recursos avançados de administração, consulta e monitoramento, o SSMS oferece uma interface intuitiva e poderosa para gerenciar o banco de dados de forma eficiente.

## 2.  Decisões de projeto

 Ao iniciar o projeto, uma série de decisões foram tomadas para garantir o desenvolvimento eficiente e eficaz de uma aplicação robusta e escalável. Optei por utilizar a linguagem de programação C# em conjunto com o framework .NET, desenvolvendo a API no ambiente integrado do Visual Studio. Esta escolha foi feita devido à ampla gama de ferramentas disponíveis no Visual Studio para facilitar o desenvolvimento, depuração e implantação da API.


 A API foi projetada para servir como uma interface entre o frontend e o banco de dados, facilitando a comunicação e a manipulação dos dados. Decidi utilizar o SQL Server como sistema de gerenciamento de banco de dados devido à sua confiabilidade, escalabilidade e recursos avançados de segurança. Utilizando o Visual Studio, desenvolvi modelos de dados, endpoints e etc...

 Para o desenvolvimento do frontend, escolhi o React devido à sua popularidade, flexibilidade e eficiência na criação de interfaces de usuário dinâmicas. Utilizando o Visual Studio Code, desenvolvi componentes React que consomem os endpoints da API, permitindo a exibição e interação dos dados fornecidos pelo banco de dados. Decidi dividir a aplicação em camadas distintas, com o frontend e o backend separados, para facilitar a manutenção, escalabilidade e reutilização de código.

 Durante o processo de desenvolvimento, adotei práticas de desenvolvimento ágil, como integração contínua e entrega contínua, para garantir a qualidade e a estabilidade da aplicação em todas as fases do ciclo de vida do desenvolvimento. Realizei testes e revisões de código regulares para identificar e corrigir problemas rapidamente, garantindo a entrega de uma aplicação confiável e de alta qualidade.

## 3. Instruções pra executar o sistema

### 1. API e Banco de Dados

* Instalar do Visual Studio : [https://visualstudio.microsoft.com/].

* Baixar o arquivo do projeto em zip pelo link do GitHub fornecido ou abrir o Visual Studio e use a opção "Clone or checkout code" para clonar o repositório.

> - Link GitHub API(Visual Studio):

> _**Lembrando que é imprescindível baixar ou clonar o conteudo dos do repositorio para o funcionamento correto da aplicação**_

* Instalar o SQL Sever [https://www.microsoft.com/pt-br/sql-server/sql-server-downloads] ou usar SQL Server LocalDb.

* Abra o Console do Gerenciador de Pacotes no Visual Studio.

* Execute **_Update-Database_** para aplicar as migrações e criar o banco de dados.

* Inicie a aplicação.

* Apos estes passo a passo a API e o Banco de Dados estarão em funcionamento.

### 2. React

* Instalar VS Code [https://code.visualstudio.com/download]

* Instalar Node.JS [https://nodejs.org/en]

* Baixar o arquivo do projeto em zip pelo link do GitHub fornecido ou abrir o Visual Studio Code e use a opção "Clone or checkout code" para clonar o repositório.

> - Link GitHub React(VS Code):

> _**Lembrando que é imprescindível baixar ou clonar o conteudo do repositorio para o funcionamento correto da aplicação**_

* Use o terminal do Visual Studio Code para navegar até o diretório do projeto React e execute npm install para instalar as dependências.

* No terminal do Visual Studio Code, execute npm start para iniciar o aplicativo React.













