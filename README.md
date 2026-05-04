# ARG Walkthrough Portal

A Cyberpunk-themed Alternate Reality Game (ARG) walkthrough portal built with React, TypeScript, and Tailwind CSS. Features a tabbed interface for organizing clues, timelines, connections, and solutions.

## Features

- **Cyberpunk Aesthetics**: Neon colors (cyan, magenta, lime green) with glitch effects and scanline animations
- **Tabbed Interface**: Organize walkthrough content across multiple sections (Overview, Clues, Timeline, Connections, Solutions)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Effects**: Glitch animations, neon glow effects, and smooth transitions
- **Dark Theme**: Immersive dark background with high-contrast neon text

## Design Philosophy

This walkthrough portal embraces a **Cyberpunk Mystery** aesthetic:

- **Neon Color Palette**: Cyan (#00d9ff), Magenta (#ff006e), Lime Green (#39ff14), Yellow (#ffbe0b), Purple (#8338ec)
- **Typography**: Orbitron for headings (geometric, futuristic), Space Mono for body text (monospace, digital feel)
- **Visual Effects**: Glitch animations, scanline overlays, and digital noise to create an immersive mystery atmosphere
- **Interaction Design**: Tab switching triggers glitch effects, hover states show neon highlights

## Tech Stack

- **React 19**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Lucide React**: Icon library

## Project Structure

```
client/
  src/
    components/
      ARGHeader.tsx       - Header component with status indicator
      ARGCard.tsx         - Content card with variant styling
      WalkthroughTabs.tsx - Tab navigation and content switching
    pages/
      Home.tsx            - Main walkthrough page
    App.tsx               - Root component and routing
    index.css             - Global styles and animations
  index.html              - HTML entry point
```

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/arg-walkthrough-page.git
cd arg-walkthrough-page
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Development

### Running the Dev Server

```bash
pnpm dev
```

The dev server will start on `http://localhost:3000` with hot module replacement (HMR) enabled.

### Building for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Type Checking

```bash
pnpm check
```

Runs TypeScript type checking without emitting files.

### Code Formatting

```bash
pnpm format
```

Formats code using Prettier.

## Customization

### Adding New Tabs

Edit `client/src/pages/Home.tsx` and add new items to the `walkthroughTabs` array:

```tsx
{
  id: 'new-tab',
  label: '> NEW TAB',
  content: (
    <div className="space-y-4">
      {/* Your content here */}
    </div>
  ),
}
```

### Changing Colors

Modify the color palette in `client/src/index.css`:

```css
:root {
  --neon-cyan: #00d9ff;
  --neon-magenta: #ff006e;
  --neon-lime: #39ff14;
  /* ... */
}
```

### Modifying Animations

Adjust keyframe animations in `client/src/index.css`:

- `glitch`: Controls the glitch effect intensity and duration
- `scanlines`: Controls the scanline animation speed
- `neon-glow`: Controls the neon text glow effect
- `tab-glitch`: Controls the tab switching glitch animation

## Deployment

### GitHub Pages

1. Build the project:
```bash
pnpm build
```

2. Deploy the `dist/` directory to GitHub Pages

### Other Hosting

The built project in `dist/` can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3
- Any web server

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android latest

## License

MIT License - feel free to use this project for your own ARG or mystery game walkthrough.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Credits

- Design inspired by cyberpunk aesthetics and ARG community conventions
- Built with React, TypeScript, and Tailwind CSS
- Icons from Lucide React

---

**Status**: Active - This walkthrough is being maintained and updated with new clues and solutions.

Last updated: 2026-05-03
