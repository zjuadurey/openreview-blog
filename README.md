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
