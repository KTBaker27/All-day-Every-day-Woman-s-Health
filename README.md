# All Day Every Day — Woman's Health

React + Vite + Tailwind starter site generated for GitHub Pages.

## Quick start

1. Unzip the project.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. To deploy to GitHub Pages using the included script:
   - Install `gh-pages` if not already: `npm install --save-dev gh-pages`
   - Make sure `vite.config.js` has `base` set to `/All-day-Every-day-Woman-s-Health/` (already set).
   - Run:
     ```bash
     npm run deploy
     ```
   This will publish the `dist` folder to the `gh-pages` branch.

## Notes
- Images are hotlinked from Unsplash (free for commercial use). Replace with local files in `/public` for full control.
- If you prefer Netlify or Vercel, you can simply connect the repository and set the build command to `npm run build` and publish the `dist` folder.
