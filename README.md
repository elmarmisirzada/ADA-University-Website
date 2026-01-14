
# ADA-University-Website

This repository contains the source code for the ADA University Website project.

## Repository Link

GitHub Repository: [https://github.com/elmarmisirzada/ADA-University-Website](https://github.com/elmarmisirzada/ADA-University-Website)

## Project Setup & Usage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Start the local JSON API:
   ```bash
   npm run api
   ```
4. Open the admin panel at: `http://localhost:5173/admin`

## Features

- React + TypeScript + Vite
- Admin panel powered by json-server (`db.json` at `http://localhost:3001`)
- Automatic scraping for News & Events (`npm run scrape:news`)
- Vite proxies `/api/*` to `http://localhost:3001/*` during development

## Deployment

To deploy the project to GitHub Pages:
```bash
npm run deploy
```

## Notes

- json-server runs locally on `localhost:3001`
- For more details, see the documentation in the source files
