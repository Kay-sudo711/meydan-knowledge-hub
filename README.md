# Meydan FZ Employee Knowledge Hub — Version 2

## Files
- `index.html`: home page and search across all SOP data
- `category.html`: separate category landing page
- `sop.html`: reusable individual SOP page
- `assets/data.js`: all seven categories and subtopic content
- `assets/style.css`: design and responsive layout
- `assets/app.js`: navigation and search functions
- `templates/SOP-Article-Template.md`: content-authoring template
- `screenshots/`: place approved, anonymised screenshots here
- `templates/`: place approved blank templates here

## Publish on GitHub Pages
1. Upload the contents of this folder to the root of your repository (not the outer folder).
2. Ensure `index.html` is in the repository root.
3. Repository Settings → Pages.
4. Source: Deploy from a branch; Branch: `main`; Folder: `/ (root)`.
5. Save and wait for the Pages deployment workflow to complete.

## Add or edit SOP content
Edit `assets/data.js`. Each topic object has:
- `slug`, `title`, `summary`, `purpose`
- `steps`: ordered procedure steps
- `documents`: document checklist
- `notes`: important notes

The individual SOP page renders those fields automatically. Search indexes all fields in `assets/data.js`.

## Add screenshots and templates
Upload approved, non-sensitive images to `screenshots/` and blank templates to `templates/`. Then add links in the relevant SOP content/page. Never upload passport copies, client KYC files, credentials, personal data or confidential records.

## Important content status
All pages are marked Draft — Pending Approval. Starter content is an organisational draft, not verified official Meydan or UAE legal guidance. Verify all fees, timelines, legal/immigration requirements, authority approvals, system steps and internal contacts with current authorised sources before marking any SOP Approved.

## How to create a new subtopic
Add a topic object inside the appropriate category's `topics` array in `assets/data.js`. Give it a unique `slug`, title, summary, purpose, steps, documents and notes. It will automatically appear on its category page and be included in search.
