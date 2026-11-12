# Meydan FZ Employee Knowledge Hub

A responsive, searchable employee reference website for work processes, SOPs, document checklists and operational guidance.

## Live website
https://kay-sudo711.github.io/meydan-knowledge-hub/

## Repository
https://github.com/Kay-sudo711/meydan-knowledge-hub

## Knowledge areas
1. Company Setup
2. Visa Services
3. Channel Partner
4. Meydan+ Services
5. Email & KYC Workflow
6. Company Operations & SOPs
7. FAQs & Troubleshooting

Each knowledge area has its own category page and individual subtopic SOP pages. The home-page search indexes the SOP content.

## Project structure
- `index.html`: home page and global SOP search
- `category.html`: category landing page
- `sop.html`: reusable individual SOP page
- `assets/data.js`: category and SOP content
- `assets/style.css`: responsive site styling
- `assets/app.js`: navigation, shared layout and search functions
- `templates/SOP-Article-Template.md`: authoring template
- `screenshots/`: approved, anonymised process screenshots
- `templates/`: approved blank forms and templates

## Publish or update with GitHub Pages
The repository is configured for a static website. In GitHub, open **Settings → Pages** and confirm:
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

Keep `index.html` in the repository root. GitHub Pages may take a few minutes to publish after a commit.

## Add or edit an SOP
Edit `assets/data.js`. Add a topic object inside the relevant category's `topics` array. Give each topic a unique `slug`, `title`, `summary`, `purpose`, `steps`, `documents` and `notes`. The category page and global search update automatically from this data.

Use `templates/SOP-Article-Template.md` when drafting a new procedure. Include the process owner, source, last-verified date and approval status.

## Approval and safe handling
All starter SOPs must remain **Draft — Pending Approval** until the relevant process owner has reviewed and approved them. Verify fees, timelines, immigration/licensing requirements, authority approvals, internal system steps and department contacts against current authorised sources before publication.

The repository and GitHub Pages website are public and do not require visitors to sign in. This makes the link easy to open, but it is not access-controlled or private. Publish only information approved for public access. Never upload passport copies, completed KYC files, client records, credentials, personal data or confidential internal documents.

## Suggested maintenance
- Assign an owner to every knowledge area.
- Review high-change processes (fees, visas and approvals) regularly.
- Add an effective date and next review date to each approved SOP.
- Keep screenshots anonymised and templates blank.
