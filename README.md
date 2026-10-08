# Jazz Language Atlas

A static teaching and reference website for jazz harmony, rhythm, improvisation, voicing, reharmonization, listening, and performance language.

## Features

- Domain and topic pages backed by content data.
- Search, artist studies, and listening guides.
- Practice pages and interactive music tools.
- Chord-scale, ii–V–I, and target-tone learning workflows.
- Light/dark theme and browser audio components.
- Content-quality scripts for topic counts, placeholders, duplicates, and links.

## Local development

Use Node.js, npm, and Python 3:

```bash
git clone https://github.com/Eric9435/jazz.git
cd jazz
npm install
npm run start
```

Open http://localhost:5500. The start command runs a Python static server; it does not compile a Node application.

## Content and quality checks

```bash
npm run build:index
npm run qc
npm run check:links
```

`build:index` regenerates the topic index. `qc` runs index generation, topic reporting, placeholder detection, and duplicate checks. Inspect the reports before publication; successful script execution alone does not establish the accuracy of music content.

`npm run setup` also fills empty topics and therefore modifies content. Review its output before committing.

## Repository map

| Path | Purpose |
| --- | --- |
| `index.html` | Homepage |
| `domain.html`, `topic.html` | Domain/topic views |
| `artists.html`, `listening.html`, `practice.html` | Learning pages |
| `data/` | Learning content |
| `js/`, `css/`, `assets/` | Browser code, styles, and media |
| `tools/` | Index and quality scripts |
| `reports/` | Generated content reports |

## Hosting

The website can be served by GitHub Pages or another static host. Confirm that the topic index, referenced assets, and client-side dependencies are available in the published output. Review placeholder pages and incomplete lessons before presenting the site as a complete curriculum.

## License

See [LICENSE](LICENSE).

## Maintainer

[Aung Phone Myat (Eric)](https://github.com/Eric9435)
