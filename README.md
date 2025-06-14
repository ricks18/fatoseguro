# 🛡️ Fato Seguro - Verificador de Notícias (TCC Etec Taboão da Serra)

<!-- Adicione um logo aqui se tiver! -->
<!-- <p align="center">
  <img src="URL_DA_SUA_LOGO_AQUI" alt="Fato Seguro Logo" width="200"/>
</p> -->

<p align="center">
  <strong>Seu aliado contra a desinformação! Verifique notícias e links de forma rápida e inteligente.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Projeto-TCC Etec Taboão da Serra-blue?style=for-the-badge" alt="TCC Etec Taboão da Serra"/>
  <img src="https://img.shields.io/badge/React%20Native%20%26%20Expo-Feito%20Com%20Amor-61DAFB?style=for-the-badge&logo=react" alt="React Native & Expo"/>
  <img src="https://img.shields.io/badge/Supabase-Backend%20Poderoso-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase"/>
</p>

## 📖 Sobre o Projeto

O **Fato Seguro** é um aplicativo móvel desenvolvido como Trabalho de Conclusão de Curso (TCC) para o curso de **Desenvolvimento de Sistemas** na **Etec de Taboão da Serra** em 2025. Em um mundo cada vez mais conectado, a disseminação de notícias falsas (fake news) tornou-se um problema crítico. Este projeto nasceu da necessidade de oferecer uma ferramenta acessível e eficiente para que os usuários possam verificar a veracidade de informações antes de compartilhá-las, promovendo um consumo de conteúdo mais consciente e responsável.

Utilizando inteligência artificial e integração com fontes confiáveis, o Fato Seguro analisa textos e links de notícias, fornecendo um parecer sobre sua potencial veracidade e apresentando fatos relacionados para contextualização.

## ✨ Funcionalidades Principais

*   **🔍 Verificação de Notícias por Texto:** Cole o texto de uma notícia e receba uma análise sobre sua confiabilidade.
*   **🔗 Verificação de Notícias por Link:** Insira o link de uma matéria online para que o app analise seu conteúdo.
*   **📊 Análise Detalhada:** Receba um resumo da verificação, status (Verdadeiro, Falso, Potencialmente Enganoso, etc.) e informações contextuais.
*   **🧠 Inteligência Artificial:** Utiliza a API Google Gemini para processamento de linguagem natural e análise de conteúdo.
*   **🔐 Autenticação Segura:** Login e cadastro de usuários utilizando Supabase (e-mail/senha).
*   **📜 Histórico de Verificações:** Usuários podem visualizar o histórico de todas as notícias verificadas na plataforma.
*   **⭐️ Conta Premium (Conceito):** Funcionalidade para usuários premium com verificações ilimitadas (atualmente, usuários free têm um limite).
*   **📱 Interface Intuitiva:** Design limpo e fácil de usar, desenvolvido com React Native e Expo.

## 🚀 Tecnologias Utilizadas

*   **Frontend:**
    *   [React Native](https://reactnative.dev/)
    *   [Expo](https://expo.dev/)
    *   [Expo Router](https://docs.expo.dev/router/introduction/)
    *   TypeScript
*   **Backend & Banco de Dados:**
    *   [Supabase](https://supabase.com/) (Autenticação, Banco de Dados PostgreSQL, Storage)
*   **Inteligência Artificial:**
    *   [Google Gemini API](https://ai.google.dev/)
*   **Outras Ferramentas:**
    *   AsyncStorage (para persistência local)
    *   Prettier (para formatação de código)

## 🛠️ Configuração e Execução do Projeto

Siga os passos abaixo para configurar e rodar o Fato Seguro em seu ambiente de desenvolvimento.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão LTS recomendada)
*   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
*   [Expo CLI](https://docs.expo.dev/get-started/installation/)
    ```bash
    npm install -g expo-cli
    ```
*   Conta no [Supabase](https://supabase.com/) para configurar o backend.
*   Chave de API para o [Google Gemini](https://ai.google.dev/)
*   Um emulador Android/iOS configurado ou um dispositivo físico.

### 1. Clonando o Repositório

```bash
git clone https://github.com/ricks18/fatoseguro.git
cd fatoseguro
```

### 2. Instalando Dependências

```bash
npm install
# ou
yarn install
```

### 3. Configurando Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (substitua pelos seus próprios valores):

```env
EXPO_PUBLIC_SUPABASE_URL=SUA_SUPABASE_URL
EXPO_PUBLIC_SUPABASE_ANON_KEY=SUA_SUPABASE_ANON_KEY
EXPO_PUBLIC_GEMINI_API_KEY=SUA_GEMINI_API_KEY
```

Você pode encontrar `SUA_SUPABASE_URL` e `SUA_SUPABASE_ANON_KEY` nas configurações do seu projeto Supabase (Project Settings > API).

### 4. Rodando o Projeto

*   **Para rodar no Expo Go (Android/iOS):**
    ```bash
    npx expo start
    ```
    Escaneie o QR Code com o aplicativo Expo Go em seu dispositivo.

*   **Para rodar no emulador Android:**
    ```bash
    npx expo run:android
    # ou, se já tiver o app instalado e quiser apenas iniciar o metro bundler:
    # npx expo start --android
    ```

*   **Para rodar no emulador iOS:**
    ```bash
    npx expo run:ios
    # ou, se já tiver o app instalado e quiser apenas iniciar o metro bundler:
    # npx expo start --ios
    ```

*   **Para rodar na Web (experimental, pode ter limitações):
    ```bash
    npx expo start --web
    ```

## 📂 Estrutura do Projeto (Principais Diretórios)

```
.expo-shared/
.vscode/
android/
ios/
app/                # Contém todas as rotas e telas da aplicação (Expo Router)
  _layout.tsx       # Layout principal, provedores de contexto
  index.tsx         # Tela inicial/login
  account.tsx       # Tela de perfil do usuário
  history.tsx       # Tela de histórico de verificações
  (tabs)/           # Exemplo de estrutura para abas, se aplicável
assets/             # Fontes, imagens e outros assets estáticos
components/         # Componentes React reutilizáveis
contexts/           # Contextos React (AuthContext, VerificationContext)
hooks/              # Hooks customizados
lib/                # Configurações de bibliotecas (ex: Supabase client)
supabase/           # Migrações do Supabase
types/              # Definições de tipos TypeScript
.env                # Arquivo de variáveis de ambiente (NÃO versionar informações sensíveis)
app.js              # Ponto de entrada para Expo Snack
app.json            # Configurações do projeto Expo
babel.config.js
package.json
README.md
tsconfig.json
```

## 🤝 Contribuições

Este projeto foi desenvolvido como um TCC, mas sugestões e contribuições são sempre bem-vindas para aprendizado e melhoria contínua! Se você tiver ideias ou encontrar problemas, sinta-se à vontade para abrir uma *Issue* ou um *Pull Request*.

1.  Faça um *Fork* do projeto.
2.  Crie uma nova *Branch* (`git checkout -b feature/sua-feature`).
3.  Faça o *Commit* das suas alterações (`git commit -m 'Adiciona nova feature'`).
4.  Faça o *Push* para a *Branch* (`git push origin feature/sua-feature`).
5.  Abra um *Pull Request*.

## 🧑‍💻 Autor

*   **Henrique Rezende** - Desenvolvedor(es) do TCC
    *   GitHub: [ricks18](https://github.com/ricks18)
    *   (Adicione outros membros e seus links se houver)

## 🎓 Instituição

*   **Etec de Taboão da Serra**

## 🙏 Agradecimentos

*   Aos professores e orientadores da Etec de Taboão da Serra pelo apoio e direcionamento.
*   Às comunidades open-source que desenvolvem as ferramentas e bibliotecas utilizadas neste projeto.

---

_Mais um ciclo se encerra para inicio de um novo!_
