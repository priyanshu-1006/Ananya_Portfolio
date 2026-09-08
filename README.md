# Ananya — Open Source Developer Portfolio

An editorial, responsive portfolio for Ananya: open-source developer and GSoC 2026 contributor at OWASP Foundation.

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173`.

## Production validation

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Create an empty GitHub repository under `ananya-in-tech` and push this directory to it.
2. In [Vercel](https://vercel.com/new), import that GitHub repository.
3. Vercel will use the committed `vercel.json`: `npm run build` produces the `dist` directory.
4. Deploy. Future pushes to the production branch will create deployments automatically.

No environment variables are required for the current static portfolio.

## Current links

- GitHub: https://github.com/ananya-in-tech
- LinkedIn: https://www.linkedin.com/in/ananya-in-tech/
