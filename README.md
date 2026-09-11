# Aung Thu Htet — Portfolio

Personal portfolio built with Next.js, TypeScript and Tailwind CSS.

## Featured projects

- [Chatbot](https://github.com/aiswath/chatbot)
- [WGAN-GP](https://github.com/aiswath/WGAN-GP)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production with Docker

```bash
docker compose up -d --build
```

The application listens on `127.0.0.1:3000`.

## Deployment architecture

GitHub → GitHub Actions → SSH → Ubuntu VPS → Docker → Nginx → HTTPS → Domain

## Before deployment

Replace these placeholders in `src/app/page.tsx`:

- `your-email@example.com`
- LinkedIn `href="#"`

Replace the domain in `nginx/portfolio.conf.example`.

Add these GitHub repository secrets:

- `SERVER_HOST`
- `SERVER_USER`
- `SERVER_SSH_KEY`

On the VPS:

```bash
git clone https://github.com/aiswath/portfolio.git ~/portfolio
cd ~/portfolio
docker compose up -d --build
```

Then configure Nginx and HTTPS with your real domain.

## Important

Do not commit SSH private keys, API keys, Dialogflow credentials, database passwords, or `.env` files.
