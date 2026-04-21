
# CliniGest - Sistema de Gestão Clínica

Bem-vindo ao repositório público do **CliniGest**, um sistema moderno e eficiente para gestão de clínicas e consultórios.

> **Aviso Importante:** Este repositório público é um espelho (cópia) do projeto original. O desenvolvimento ativo, incluindo testes rigorosos, ajustes de arquitetura e implementações de novas funcionalidades, ocorre em um **repositório privado**. Este espaço serve exclusivamente como um portfólio para demonstrar os avanços, a estrutura de código e as tecnologias empregadas na construção do sistema.

O CliniGest foi projetado para otimizar o fluxo de trabalho de profissionais da saúde, oferecendo uma interface intuitiva e um backend robusto para gerenciar pacientes, consultas e dados clínicos com segurança e agilidade.

---

## Arquitetura e Tecnologias Utilizadas

O projeto adota uma arquitetura full-stack moderna, utilizando o ecossistema JavaScript/TypeScript para garantir alta performance e escalabilidade. Abaixo, detalhamos as principais tecnologias que compõem o CliniGest.

### Backend e Infraestrutura

O núcleo do sistema é construído sobre tecnologias consolidadas no mercado, garantindo estabilidade e facilidade de manutenção.

| Tecnologia | Descrição e Propósito no Projeto |
| --- | --- |
| **Node.js** | Ambiente de execução JavaScript server-side, responsável por processar as requisições da API e a lógica de negócios. |
| **Next.js (v13.1.6)** | Framework React utilizado tanto para a renderização do frontend (SSR/SSG) quanto para a construção de rotas de API integradas. |
| **PostgreSQL (pg v8.11.3)** | Sistema de gerenciamento de banco de dados relacional robusto, utilizado para armazenar com segurança os dados de pacientes, usuários e agendamentos. |
| **Docker & Docker Compose** | Ferramentas de conteinerização utilizadas na pasta `infra/` para orquestrar o ambiente de desenvolvimento, garantindo que o banco de dados e outros serviços rodem de forma isolada e padronizada. |
| **node-pg-migrate** | Biblioteca utilizada para o controle de versão do banco de dados (migrações), permitindo criar e alterar tabelas de forma rastreável e segura. |
| **Jest (v29.6.2)** | Framework de testes em JavaScript, empregado na pasta `test/` para garantir a qualidade do código através de testes de integração da API. |
| **Dotenv** | Gerenciamento de variáveis de ambiente, mantendo credenciais e configurações sensíveis fora do código-fonte. |

### Frontend e Interface de Usuário

A interface do usuário é dividida entre a aplicação React/Next.js e uma estrutura de prototipagem estática muito bem definida.

| Tecnologia | Descrição e Propósito no Projeto |
| --- | --- |
| **React (v18.2.0)** | Biblioteca JavaScript para a construção de interfaces de usuário interativas e baseadas em componentes. |
| **Prettier** | Ferramenta de formatação de código (linting) que assegura um estilo consistente em todo o projeto. |

#### Detalhamento da pasta `public/frontend/telas`

Um dos grandes diferenciais deste repositório é a presença da pasta `public/frontend/telas`. Esta seção do projeto contém a prototipagem estática e a estruturação visual das páginas antes de sua integração completa com o ecossistema React/Next.js. As tecnologias empregadas nesta camada incluem:

- **HTML5 Semântico:** Utilizado para estruturar o conteúdo das páginas de forma acessível e otimizada para motores de busca (SEO). Arquivos como `cadastro-pac.html`, `index.html` (página de login) e `pacientes.html` demonstram uma clara separação de responsabilidades.

- **CSS3 Modular:** A estilização é feita através de arquivos CSS externos (localizados na pasta `css/`, como `login.css`), garantindo que o design seja responsivo, moderno e fácil de manter.

- **Componentização Estática:** Embora seja HTML puro, nota-se uma abordagem de componentização visual com a presença de arquivos como `header.html` e `sidebar.html`. Isso facilita a visualização de como os componentes React serão divididos posteriormente.

- **Integração de Formulários:** As telas de login e cadastro utilizam formulários HTML nativos com validações básicas (ex: atributos `required`), preparando o terreno para a manipulação de estado e envio de dados via API no frontend dinâmico.

- **Imagens e Ícones SVG:** A pasta `img/` armazena logotipos e elementos visuais em formato SVG, garantindo escalabilidade sem perda de qualidade e mantendo o carregamento das páginas leve.

---

## Estrutura do Projeto

A organização dos diretórios reflete as melhores práticas de desenvolvimento de software, separando claramente as responsabilidades:

- `infra/`: Contém as configurações do Docker (`compose.yaml`), scripts de conexão com o banco de dados (`database.js`) e os arquivos de migração (`migrations/`).

- `models/`: Destinada à lógica de acesso a dados e representação das entidades do sistema.

- `pages/`: Diretório padrão do Next.js contendo as rotas da aplicação e da API.

- `public/`: Arquivos estáticos servidos diretamente pelo servidor web, incluindo a subpasta `frontend/` com toda a prototipagem visual descrita acima.

- `test/`: Suíte de testes automatizados, com foco em testes de integração para a API (`test/integration/api/v1/`).

- `util/`: Funções auxiliares e utilitários compartilhados por toda a aplicação.

---

## Como Executar o Projeto Localmente

Como este é um repositório de demonstração, as instruções abaixo refletem o ambiente de desenvolvimento padrão configurado no projeto original.

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/EmanuelScapim/CliniGest.git
   cd CliniGest/CliniGest
   ```

1. **Instale as dependências:**

   ```bash
   npm install
   ```

1. **Configure as variáveis de ambiente:**Crie um arquivo `.env.development` na raiz do projeto com as credenciais do banco de dados, baseando-se no arquivo de exemplo (se disponível ).

1. **Inicie a infraestrutura (Banco de Dados):**

   ```bash
   npm run services:up
   ```

1. **Execute as migrações do banco de dados:**

   ```bash
   npm run migration:up
   ```

1. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

O sistema estará disponível em `http://localhost:3000`.

---

*Desenvolvido por Emanuel Scapim.*

