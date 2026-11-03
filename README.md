# Portfólio Profissional

Site de portfólio pessoal desenvolvido sob demanda como projeto freelancer, com foco em apresentar a trajetória, a experiência e os contatos do profissional de forma moderna, rápida e responsiva.

🔗 **Demo:** [portifolio.vercel.app](https://portifolio-eliseu.vercel.app/)


![Preview do portfólio](https://i.imgur.com/ACOOy8C.png)


## ✨ Sobre o projeto

Landing page de uma página só (single page), organizada em seções que guiam o visitante da apresentação até o contato. O projeto foi construído com componentes reutilizáveis em React e estilizado com Tailwind CSS, priorizando performance e facilidade de manutenção.

## 📑 Seções

- **Hero:** apresentação inicial com destaque visual
- **Sobre:** resumo do perfil e da trajetória profissional
- **Experiência:** histórico profissional e competências
- **Depoimentos:** feedback de clientes e parceiros
- **Contato:** formas de entrar em contato

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [React 19](https://react.dev/) | Construção da interface com componentes |
| [Vite](https://vitejs.dev/) | Ambiente de desenvolvimento e build |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização, integrada via plugin do Vite |
| [Lucide React](https://lucide.dev/) | Ícones |
| [React Icons](https://react-icons.github.io/react-icons/) | Ícones complementares (redes sociais etc.) |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter) | Linter para qualidade do código |

## 📁 Estrutura do projeto

```
├── public/
├── src/
│   ├── assets/          # Imagens e ícones
│   ├── components/      # Componentes reutilizáveis (ex.: Button)
│   ├── layout/          # Estrutura da página (ex.: Navbar)
│   ├── sections/        # Seções do site
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recente)
- npm (já vem com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/rafaellucas30290/Portifolio_Project.git

# 2. Entre na pasta do projeto
cd Portifolio_Project

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

## 📜 Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão otimizada para produção na pasta `dist` |
| `npm run preview` | Visualiza localmente o build de produção |
| `npm run lint` | Analisa o código com o Oxlint |

## 🌐 Deploy

O projeto gera arquivos estáticos com `npm run build` e pode ser publicado em plataformas como Vercel, Netlify ou GitHub Pages.


## 👨‍💻 Autor

Desenvolvido por **[Rafael Lucas de Oliveira](https://github.com/rafaellucas30290)**.

📫 Entre em contato: [rafaelucasoliveira79@gmail.com@exemplo.com](mailto:rafaelucasoliveira79@gmail,com)
