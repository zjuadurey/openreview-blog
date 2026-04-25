# OpenReview-Inspired Academic Blog

A personal academic blog built with Next.js and Tailwind CSS. The design borrows the visual language of OpenReview-style academic systems: red accents, compact metadata, status tags, and abstract-first cards.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- Edit `lib/data.ts` to replace the profile, blog posts, publications, and projects.
- Edit `app/about/page.tsx` for your biography.
- Adjust the red theme in `tailwind.config.ts`.

## Deploy With GitHub and Vercel

1. Create a new GitHub repository.
2. Push this project to the repository.
3. Import the repository in Vercel.
4. Keep the default Vercel settings for Next.js and deploy.

Every push to the main branch will trigger a new deployment.

## Deploy With GitHub Pages

This project also supports GitHub Pages. The workflow in `.github/workflows/pages.yml`
builds the site as a static export and deploys the generated `out` directory.

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main`, or run the `Deploy to GitHub Pages` workflow manually.

For a repository named `openreview-blog`, the Pages URL will usually be:

```text
https://your-github-username.github.io/openreview-blog/
```
