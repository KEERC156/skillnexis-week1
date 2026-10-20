# Skill Nexis Week 1 Projects

This repository contains five independent projects for the Week 1 assignment. The static projects use plain HTML, CSS, and JavaScript. The React projects each have their own Vite setup and dependencies.

## Projects

### 1. Personal portfolio — `portfolio/`

- Semantic, responsive portfolio sections for About, Education, Projects, Skills, and Contact.
- Responsive navigation with an accessible mobile menu.
- A contact form that checks required fields and basic email formatting in JavaScript.
- The form is a front-end demo only: it does not send or store messages.
- Existing personal, education, and project-concept information has been retained so it can be edited directly in `portfolio/index.html`.

### 2. E-commerce landing page — `ecommerce/`

- Responsive storefront navigation and product cards.
- Add-to-demo-bag buttons update the cart count; a clear button resets it.
- This is a front-end interaction demo only. It has no checkout or payment processing.

### 3. Flexbox and Grid layout demo — `layout-demo/`

- Separate responsive page with labeled examples of Flexbox wrapping and a CSS Grid composition.

### 4. React components practice — `react-components/`

- Vite + React app with reusable `Header`, `Footer`, `Card`, `Button`, and `Form` components in `src/components/`.
- Props customize the header, footer, cards, and buttons.
- React state powers the counter/reset and the controlled, locally validated sample form.

### 5. React blog UI — `react-blog/`

- Vite + React app that renders post cards from `src/data/posts.json`.
- Search matches title, category, author, and description; a category filter works together with search.
- Displays the matching article count and a useful empty state.

## Open the static projects

On Windows, open any of these files directly in a browser:

- `portfolio/index.html`
- `ecommerce/index.html`
- `layout-demo/index.html`

The linked CSS and JavaScript are in each same project folder. A local static server is optional; no package installation is needed for these pages.

## Run the React projects

Install Node.js if `node --version` and `npm --version` do not work in PowerShell. Open PowerShell in the repository folder, then run each project separately:

```powershell
cd .\react-components
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Stop the server with `Ctrl+C`, then build the project:

```powershell
npm run build
```

Run the blog in another terminal the same way:

```powershell
cd .\react-blog
npm install
npm run dev
```

Open the Vite URL, stop it with `Ctrl+C`, and verify a production build:

```powershell
npm run build
```

Each React folder is independent and has its own `package.json` and `package-lock.json`.

## Testing checklist

1. Open the portfolio and verify the navigation jumps to each section. At a narrow browser width, open and close the menu.
2. Submit the portfolio form empty, with an invalid email, and with valid values. Confirm the inline message changes and remember the demo does not send anything.
3. Open the ecommerce page, add a product more than once, and clear the demo bag. Confirm the cart number and announcement update; there is no checkout.
4. Resize the layout demo and check the Flexbox row wraps and the Grid tiles rearrange.
5. In `react-components`, build with `npm run build`; in the running app, try the counter, reset, and empty/invalid/valid form submissions.
6. In `react-blog`, build with `npm run build`; in the running app, test search, each category, combined filters, result count, and a no-results search.

## Publish to GitHub

These steps are instructions for you to run; nothing has been committed or uploaded for you.

1. Sign in at [github.com](https://github.com) and select **New repository**.
2. Enter a repository name such as `skillnexis-week1`. Choose **Public** if your Skill Nexis submission needs a publicly accessible link. Do not initialize another README, `.gitignore`, or license because this folder already contains project files.
3. Copy the repository's HTTPS URL, for example `https://github.com/YOUR-USERNAME/skillnexis-week1.git`.
4. Open PowerShell in `D:\Projects\skillnexis-week1` and run these commands, replacing the URL with the one GitHub gave you:

   ```powershell
   git init
   git add .
   git commit -m "Complete Skill Nexis Week 1 projects"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/skillnexis-week1.git
   git push -u origin main
   ```

   If Git asks who you are, set your name and email with `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`, then retry the commit. Never put a password or access token in the repository.
5. Refresh the GitHub repository page and confirm the `portfolio`, `ecommerce`, `layout-demo`, `react-components`, and `react-blog` folders plus this README are visible.
6. Copy the repository page URL (without `.git`), open the Skill Nexis Week 1 submission form, paste that URL into the repository/project link field, complete any requested details, and submit. Keep the confirmation page or email for your records.

## 🌐 Live Projects

| Project | Description | Live Demo |
|---|---|---|
| Personal Portfolio | Responsive personal portfolio built with HTML, CSS and JavaScript | [View Portfolio](https://keerc156.github.io/skillnexis-week1/portfolio/) |
| E-commerce Landing Page | E-commerce landing page built with HTML and CSS | [View Project](https://keerc156.github.io/skillnexis-week1/ecommerce/) |
| Layout Demo | CSS Flexbox and Grid layout demonstration | [View Project](https://keerc156.github.io/skillnexis-week1/layout-demo/) |
| React Components | Reusable React components with props and state | [View Project](https://keerc156.github.io/skillnexis-week1/react-components/) |
| React Blog UI | React blog interface with search and filtering | [View Project](https://keerc156.github.io/skillnexis-week1/react-blog/) |

**Note:** The portfolio link is published. The other demo links should be marked as live only after confirming that each one loads correctly.

## 📂 Repository

[View Source Code on GitHub](https://github.com/KEERC156/skillnexis-week1)
