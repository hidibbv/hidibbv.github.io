# Engineer in Progress

## Overview

**Engineer in Progress** is Hidayat Babayev's personal portfolio for the SITE-1101 Principles of Information Systems Individual Project at ADA University. It introduces his studies and interests and documents selected coursework, learning experiences, and ambitions in a dark visual style inspired by engineering and Formula 1.

The site is a static website and is not connected to a back end. It has a local Git repository on `main` and a public GitHub repository; the commits have not yet been pushed, and GitHub Pages is not yet enabled.

## Project purpose

The purpose of this individual project is to plan, build, and present a personal website that communicates its author's background, education, interests, projects, and journey. The portfolio also provides a place to expand project details as they become available.

## Website features

- Four connected pages with consistent navigation and footer.
- Dark black, silver, white, and racing-red visual styling.
- Responsive layouts for desktop, tablet, and mobile screen sizes.
- Keyboard-accessible skip link, navigation menu, focus states, and expandable journey entries.
- Smooth scrolling and scroll-triggered entrance effects, with reduced-motion preferences respected.
- A local profile portrait and a photo from the Team 66 OR-gate project.
- An embedded YouTube video for Project 1 with a direct fallback link.
- Three project cards; Projects 2 and 3 are explicitly marked **In Progress**.
- An interactive, F1-inspired Journey logbook with confirmed volunteering duties and current project checkpoints.
- A qualifications placeholder that can be filled in if Hidayat chooses to provide qualifications.

## Pages

### Home (`index.html`)

Introduces Hidayat with his profile photo, first-year study information, Mathematics as his favourite subject, his interests and hobbies, volunteering highlights, and links to the other pages and GitHub profile.

### About (`about.html`)

Presents his first-year Electrical & Electronic Engineering studies at ADA University, interests, hobbies, ambitions to become an engineer in Formula 1 and eventually establish an engineering company, and a qualifications placeholder. No qualifications are asserted.

### Projects (`projects.html`)

Documents the three required projects:

1. **How Does Hardware Work? — Team 66 (SITE-1101):** The team constructed and tested NOT, AND, and OR gates. Hidayat's 22% individual contribution was designing, assembling, and testing the NOT gate on a breadboard with an NPN transistor, resistors, an LED, and a pushbutton, and checking that its output was the opposite of its input. The supplied photo shows an OR gate from the team project; it is not presented as Hidayat's individual NOT-gate work. The project video is embedded, with a fallback link to [YouTube](https://youtu.be/VMnz2v79pUg).
2. **Hour of Code — In Progress:** The group aims to teach children basic programming in a one-hour educational session and is searching for a suitable location. The session has not yet taken place.
3. **Robotics — In Progress:** The group is working with LEGO robots, with the objective of programming them to follow a predefined path. Laboratory visits and project preparation are underway; the project is not complete.

### My Journey (`journey.html`)

An interactive, F1-inspired logbook with expandable entries for the 2025 and 2026 Baku City Circuit Events Team volunteering, Yüksəliş Competition duties, and the two ongoing projects. A "Pit stop" checkpoint highlights Hidayat's confirmed interests and hobbies. No Yüksəliş year is claimed.

## Technologies

- HTML5 for page structure and accessible content.
- CSS3 for layout, responsive styling, theme, and motion.
- Vanilla JavaScript for the mobile navigation, current year, and reveal/circuit effects.
- SVG for the favicon and decorative circuit illustration.
- JPEG for the locally stored profile photo.
- Google Fonts (`Manrope` and `Syne`) are requested from Google Fonts; system sans-serif fonts are configured as fallbacks.

There is no package manager, framework, build step, or server-side code in the current project.

## Project structure

```text
portfolio/
├── .gitignore
├── README.md
├── about.html
├── index.html
├── journey.html
├── projects.html
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
│       ├── hidayat-babayev.jpg
│       └── how-does-hardware-work-or-gate.jpg
├── css/
│   ├── home.css
│   ├── pages.css
│   └── style.css
└── js/
    ├── animations.js
    ├── main.js
    └── navigation.js
```

## Run locally

No dependencies need to be installed. For a full local preview—including the YouTube embed—serve the project over HTTP. For example, start Python's built-in static server from the project root:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

Then visit <http://localhost:8000/projects.html> to check the video player. The embed was tested successfully through a local HTTP server. Opening `projects.html` directly as a `file://` page can prevent the browser from sending the referrer YouTube requires, so the player may report an error there; use the fallback link to watch it on YouTube. VS Code's Live Server extension is another way to preview the site over HTTP.

## Publish with GitHub Pages

The public repository [hidibbv/hidibbv.github.io](https://github.com/hidibbv/hidibbv.github.io) has been created. The local `origin` remote is configured, but the code still needs to be pushed and GitHub Pages enabled.

1. Sign in to GitHub as `hidibbv`. The repository named `hidibbv.github.io` serves the site at `https://hidibbv.github.io/`.
2. Git is initialized locally on branch `main`, with meaningful commits. For a fresh copy that has not yet been initialized, install Git for Windows and create an initial commit:

   ```powershell
   git init
   git add .
   git commit -m "Build Engineer in Progress portfolio"
   ```

   The commands above are setup instructions for a fresh checkout, not a record of this project's history.
3. This working copy already has `origin` set to `https://github.com/hidibbv/hidibbv.github.io.git`. After signing Git in to GitHub, push the existing branch:

   ```powershell
   git push -u origin main
   ```
4. On GitHub, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.
5. Wait for the Pages deployment to finish. Confirm the published URL in **Settings → Pages**, and test the home page and navigation links there.

Git is available; local commits and the `origin` remote are ready. The current environment still needs GitHub authentication to push, and the Pages deployment has not yet been enabled or verified.

## GitHub links

- Owner profile: [github.com/hidibbv](https://github.com/hidibbv)
- Project 1 video: [youtu.be/VMnz2v79pUg](https://youtu.be/VMnz2v79pUg)
- Repository: [github.com/hidibbv/hidibbv.github.io](https://github.com/hidibbv/hidibbv.github.io) (public; code push still pending).
- Website: expected at [hidibbv.github.io](https://hidibbv.github.io/) after GitHub Pages is enabled and deploys successfully.

The header GitHub icon links to the portfolio repository; the footer GitHub icon links to Hidayat's profile.

## Assignment checklist

The supplied SITE-1101 assignment asks for Home, About, and Projects pages; a profile photo; project titles, descriptions, and photos/screenshots; navigation and footer; a link to the website's GitHub repository; a root `README.md`; multiple meaningful commits; a publicly accessible GitHub Pages site; and a complete Markdown export of the actual AI chat prompts and responses. Its checklist specifically mentions a Project 1 title, description, and image, and offers a 10% bonus for a creative interactive gamified resume or About page. The current website includes a Journey logbook and an image of the team's OR-gate setup for Project 1. The repository exists and has a URL; pushing the website, enabling public Pages, and preparing the authentic combined chat export are still pending.

## AI conversation export

The assignment requests a Markdown export containing the actual prompts and AI responses. Preserve the existing Cursor conversation and export or copy its original messages using the options available in Cursor. Separately export or copy the actual VS Code Copilot conversation from its chat view. Combine the two in chronological order in a Markdown document, clearly label which editor each conversation came from, and retain the original prompts and responses verbatim. Check the source chat history before saving the combined export; this project does not contain either transcript, and this README does not recreate or summarize them as a substitute.

## Updating content

The qualifications section remains a placeholder because no qualifications have been provided. Add information there only if Hidayat confirms it. Keep the Hour of Code and Robotics marked **In Progress** until their status changes, then update the project pages and this README. Review the folder structure here if files are added or removed.
