# Portfolio Website

A bilingual (German/English) portfolio site built with Claude Code and Jekyll for GitHub Pages. Features a dark theme, smooth animations, and responsive design.

## Features

- Dark mode theme
- German (default) and English language toggle
- Smooth scroll animations
- Responsive card-based project showcase
- Timeline for experience section
- Easy content management via YAML files

## Local Development

**Prerequisites**: Docker Desktop installed

**Setup**:

1. Clone the repository:
```bash
git clone https://github.com/rollerollsen/rollerollsen.github.io.git
cd rollerollsen.github.io
```

1. Start the Jekyll server with Docker:
```bash
docker-compose up
```

or detached:

```bash
docker-compose up -d
```

3. Open your browser and visit:
```
http://localhost:4000
```

The site will automatically rebuild when you make changes to files.

**To stop the server**: Press `Ctrl+C` or run `docker-compose down`


## Customization

### Personal Information

Edit `_config.yml` to update your name, email, and site metadata:
```yaml
title: Your Name
author:
  name: Your Name
  email: your.email@example.com
```

### Content

All content is managed through YAML files in the `_data/` directory.

#### Projects

Edit `_data/de/projects.yml` (German) and `_data/en/projects.yml` (English):
```yaml
- title: Project Name
  description: Brief description
  tech:
    - JavaScript
    - React
  github: https://github.com/yourusername/repo
  demo: https://demo-url.com
  featured: true
```

#### Skills

Edit `_data/de/skills.yml` and `_data/en/skills.yml`:
```yaml
- category: Frontend
  items:
    - HTML/CSS
    - JavaScript
```

#### Experience

Edit `_data/de/experience.yml` and `_data/en/experience.yml`:
```yaml
- company: Company Name
  role: Your Role
  period: Jan 2024 - Present
  description: Brief description
```

#### Social Links

Edit `_data/social.yml` (language-neutral):
```yaml
- platform: GitHub
  url: https://github.com/yourusername
  icon: 🔗
```

#### UI Strings

Edit `_data/de/ui.yml` and `_data/en/ui.yml` to change navigation labels, button text, and section headings.

### Styling

- Colors: Edit CSS variables in `assets/css/main.css`
- Animations: Modify timings in `assets/css/animations.css`
- Responsive breakpoints: Adjust in `assets/css/responsive.css`

### Language Settings

To change the default language, edit `assets/js/language.js`:
```javascript
const DEFAULT_LANG = 'de' // Change to 'en' for English default
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Commit your changes:
```bash
git add .
git commit -m "Update content"
```

2. Push to GitHub:
```bash
git push
```

3. Visit your site at `https://yourusername.github.io` after 1-2 minutes.

## Structure

```
.
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page layouts
├── _includes/            # Reusable components
├── _data/                # Content files
│   ├── de/              # German content
│   └── en/              # English content
├── assets/
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript
│   └── images/          # Images
└── index.html           # Homepage
```

## Adding New Languages

1. Create a new directory: `_data/[lang-code]/`
2. Copy all YAML files from `_data/de/` or `_data/en/`
3. Translate the content
4. Update `language.js` to support the new language code
