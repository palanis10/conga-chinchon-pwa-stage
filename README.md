# Conga by Alanis

A simple, mobile-first Progressive Web App (PWA) for tracking scores in Conga (a variant of Chinchón or similar card games). Built with vanilla HTML, CSS, and JavaScript—no frameworks or dependencies. Fully offline-capable with localStorage persistence.

![App Screenshot](https://via.placeholder.com/300x600?text=App+Screenshot) <!-- Replace with actual screenshot URL from your repo -->

## Features

- **Player Management**: Add, edit, delete players with names, scores, reenganches (re-entries), and optional photos (auto-cropped to square).
- **Round Scoring**: Enter points per round (positives/negatives allowed), automatic reenganche handling when scores exceed limit, and dealer auto-advance.
- **Win Detection**: Automatically detects winner (last player under limit), shows confetti overlay with sound.
- **History**: View round-by-round totals and inputs.
- **Settings**: Customize score limit, toggle auto-advance, lock player order, reset scores, or clear all.
- **Internationalization**: English and Spanish support with easy language switch.
- **Drag-and-Drop**: Reorder players (lockable).
- **PWA Features**: Installable on home screen, works offline, responsive for all mobile devices (iOS/Android).
- **Accessibility**: Basic WCAG compliance with aria labels and keyboard nav.
- **No Backend**: All data stored locally—no servers or accounts needed.

## Usage

1. Open the app in your mobile browser: [STAGE Demo](https://palanis10.github.io/conga-chinchon-pwa-stage/) or [PROD Demo](https://palanis10.github.io/conga-chinchon-pwa/).
2. Add to Home Screen for PWA experience (tap Share > Add to Home Screen on iOS; or install prompt on Android).
3. Start a game:
   - Add players.
   - Set dealer.
   - Play rounds via "New round" button.
   - Long-press players to edit (name, score, photo, etc.).
4. Data persists across sessions/reloads.

**Tips for Mobile**:
- Photos: Upload from camera roll; auto-cropped and downscaled for performance.
- Gestures: Long-press for edit, drag to reorder (when unlocked).

## Tech Stack

- **Frontend**: HTML5, CSS3 (variables, gradients, media queries), Vanilla JavaScript (ES6+).
- **Storage**: localStorage for state persistence.
- **PWA**: Manifest.json, meta tags for iOS/Android install.
- **No Dependencies**: Lightweight and fast-loading.

## Development

Clone the repo:
```
git clone https://github.com/palanis10/conga-chinchon-pwa.git
```

Serve locally (e.g., via VS Code Live Server or Python `http.server`).

To deploy updates:
- Push to `gh-pages` branch for GitHub Pages.

Versioning: STAGE (testing) and PROD (stable) branches.

## Contributing

Pull requests welcome! Focus on mobile optimizations, bug fixes, or new features (e.g., more languages, undo rounds).

1. Fork the repo.
2. Create a feature branch.
3. Commit changes.
4. Push and open PR.

## License

MIT License. Free to use/modify. Created by Alanis (palanis10).
