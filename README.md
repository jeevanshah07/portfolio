# Jeevan Shah portfolio

Run locally with `npm install` and `npm run dev`. Check the production build with `npm run build` and lint with `npm run lint`.

This site is a static Next.js export for Cloudflare Pages. The Pages build command is `npm run build`, and `wrangler.jsonc` sets the output directory to `./out`. GitHub activity loads from GitHub's public API in each visitor's browser.

The public resume is `public/resume.pdf`. After editing `../profdev/resumay/resume.tex` and rebuilding its PDF, copy `../profdev/resumay/resume.pdf` to `public/resume.pdf` before deploying this site.
