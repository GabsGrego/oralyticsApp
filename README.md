# Oralytics - Aplicativo de Monitoramento e Cuidado Dental
Oralytics é uma aplicação mobile desenvolvida para auxiliar no monitoramento e cuidado da saúde bucal dos usuários, oferecendo funcionalidades como registro de sua escovação diária, seu histórico dental, acesso a sua carteirinha digital do plano OdontoPrev, guias de escovação e a uma avaliação inteligente de sua saúde bucal.

## Tecnologias Utilizadas 📱
### Frontend (Mobile)
- React Native
- Expo
- Native Base (UI Framework)
- React Navigation
- AsyncStorage
- Chart.js

### Backend
- Node.js
- Express
- SQLite
- JWT (JSON Web Token)
- Bcrypt

### IA
- Roboflow
- Pytorch
- Matplotlib

## Funcionalidades Principais 🚀 
- Registro de Escovação: Monitoramento diário de escovações (manhã, tarde e noite)
- Histórico Dental: Visualização de procedimentos odontológicos realizados- 
- Avaliação Inteligente: Análise preliminar da saúde bucal através de fotos
- Perfil de Usuário: Gerenciamento de informações pessoais e do plano odontológico
- Guia de Escovação: Tutorial passo a passo para uma escovação adequada
- FAQ: Perguntas frequentes sobre o aplicativo e saúde bucal

## Nossa IA de Avaliação de saúde bucal
Acrescentamos em nosso aplicativo um modelo de Inteligência Artificial que desenvolvemos com a finalidade de detectar doenças dentárias através da análise de imagens fornecidas pelo usuário. Utilizamos da plataforma RoboFlow para o treinamento e contamos com um dataset de mais de duas mil imagens para as predições. Até o momento nossa IA é capaz de detectar casos de tartaro, placas, manchas, gengivite, caries e má formações ou desalinhamento dos dentes.

Para realizar a avaliação é bem simples, basta clicar em Avaliação Inteligente e em seguida Iniciar Avaliação, após retirar uma foto do local a ser avaliado o aplicativo informará os resultados da análise:

![tutorial avaliacao](https://github.com/user-attachments/assets/a8fbbdb2-aa50-42d2-9fa2-328c29b164d6)

Os resultados ficam salvos na conta do usuário para posteriormente serem levados a um dentista.

## Video demonstrativo do App

https://youtu.be/cce70iSlB0c

## Instalação e Execução 🔧 
Pré-requisitos
- Node.js
- npm ou yarn
- Expo CLI (para o frontend)

### Backend
- Clonar o diretório do backend
  https://github.com/GabsGrego/oralyticsBackend

- Instalar dependências
  npm install

- Iniciar o servidor
  node server.js

### Frontend
- Navegar para o diretório do frontend
  cd oralyticsApp

- Instalar dependências
  npm install

- Iniciar o aplicativo com Expo
  npx expo start

## Autenticação 🔒
O aplicativo utiliza JWT (JSON Web Token) para autenticação. Quando um usuário faz login, um token é gerado e armazenado no AsyncStorage do dispositivo. Este token é utilizado para autenticar requisições subsequentes à API.

## Banco de Dados 📊 
O backend utiliza SQLite para armazenamento de dados, com a seguinte estrutura principal:

Tabela usuarios: Armazena informações dos usuários (id, name, email, dataNasc, numCard, password)

## Licença 📝
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Autores 👥
- Gabriel Gregório - Desenvolvedor
- André Alves - Desenvolvedor
- Kayque Ferreira - Desenvolvedor

© 2024 Oralytics. Todos os direitos reservados.
