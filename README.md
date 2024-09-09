## Description

This is a Next.JS project. It hosts a small video collection for the youtube channel @EstebanKendama.

I am self-hosting the project on my server at : ~http://esteban.grelgp.com/~ (Currently unavailable)

### Features
#### Done
- Show all videos from an SQLite Database
- Play video on mouse hover
- About page and youtube redirect link
- Admin video uploading form page
#### Working on
- More tools for the admin : change order, modify video or name, delete video.
- Only load videos on the viewport to reduce network traffic
- Difficulty level for each trick
#### To do
- Search bar
- Sorting options


## Host on your machine

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Make sure you have videos in a folder named videos inside the public folder (ex: /public/videos/*.mp4).
