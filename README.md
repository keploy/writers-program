<p align="center">
  <img align="center" src="https://docs.keploy.io/img/keploy-logo-dark.svg?s=200&v=4" height="40%" width="40%"  alt="keploy logo"/>
</p>

<h1 align="center">
<b>
Keploy Writers Program
</b>
</h1>

<p align="center">
  <strong>Modern UI Redesign with Next.js 15 + shadcn/ui</strong>
</p>

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/keploy/writers-program.git
cd writers-program

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## 📁 Project Structure

```
writers-program/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles + Tailwind + animations
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Home page with all sections
│   │
│   ├── components/
│   │   ├── sections/           # Page section components
│   │   │   ├── HeroSection.tsx       # Hero with animated gradient text
│   │   │   ├── AboutSection.tsx      # About Keploy section
│   │   │   ├── OffersSection.tsx     # "What this program offers" cards
│   │   │   ├── FlowSection.tsx       # "How the program works" timeline
│   │   │   ├── CriteriaSection.tsx   # Evaluation criteria with stars bg
│   │   │   ├── GuidelinesSection.tsx # Blog/carousel guidelines
│   │   │   └── CommunitySection.tsx  # Join community CTA
│   │   │
│   │   ├── ui/                 # shadcn/ui base components
│   │   │   ├── accordion.tsx   # Accordion component (Radix UI)
│   │   │   ├── button.tsx      # Button with variants
│   │   │   └── card.tsx        # Card family components
│   │   │
│   │   ├── Header.tsx          # Navigation with GitHub stars
│   │   └── SocialSidebar.tsx   # Floating social links
│   │
│   └── lib/
│       └── utils.ts            # Utility functions (cn helper)
│
├── public/                     # Static assets
│   └── images/                 # GIFs and illustrations
│
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
├── components.json             # shadcn/ui configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.1.3 | React framework with App Router |
| **React** | 19.0.0 | UI library |
| **TypeScript** | 5.7.0 | Type safety |
| **Tailwind CSS** | 3.4.17 | Utility-first styling |
| **shadcn/ui** | Latest | Accessible UI components |
| **Radix UI** | Latest | Headless UI primitives |
| **Lucide React** | 0.474.0 | Icon library |

---

## 🎨 Sections Overview

### 1. Hero Section
- Animated gradient text with typewriter effect
- Floating action buttons
- Dynamic GitHub stars badge

### 2. About Section
- Clean description of Keploy's mission
- Link to blog

### 3. Offers Section ("What this program offers you?")
- 3 cards with GIF illustrations
- Orange hover border effect
- Icons: Recognition, Learning, Community

### 4. Flow Section ("Here's how the Program works")
- 6-step vertical timeline
- Numbered badges with connector lines
- Responsive design (stacks on mobile)

### 5. Criteria Section ("Evaluation Criteria")
- Dark space-themed background
- Animated stars effect
- Expandable accordion cards

### 6. Guidelines Section
- 4 cards for blog and carousel guidelines
- Direct link to [Keploy SEO Guidelines](https://github.com/keploy/keploy/wiki/Keploy-SEO-Guidelines)

### 7. Community Section
- Join Slack CTA with animated background

---

## 🧪 Testing Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
open http://localhost:3000

# 4. Test production build
npm run build
npm run start
```

### Verify Sections
- [ ] Hero section loads with gradient animation
- [ ] Offers cards show hover effects
- [ ] Timeline displays all 6 steps
- [ ] Criteria accordions expand/collapse
- [ ] Guidelines cards link to SEO docs
- [ ] Community section has working Slack link

---

## 🎯 Design Principles

1. **Keploy Brand Consistency**
   - Primary: Keploy Orange (`#F89559`)
   - Secondary: Navy Blue (`#00163D`)
   - Clean white backgrounds

2. **Accessibility**
   - Semantic HTML (`<section>`, `<nav>`, `<main>`)
   - ARIA labels on interactive elements
   - Keyboard navigation support
   - Reduced motion support

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px)
   - Flexible grids and typography

4. **Performance**
   - Static export optimized
   - Optimized images and GIFs
   - Minimal JavaScript bundle

---

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit with DCO sign-off: `git commit -s -m "feat: your message"`
4. Push and create a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Keploy SEO Guidelines](https://github.com/keploy/keploy/wiki/Keploy-SEO-Guidelines)

---

## 📄 License

Licensed under [Apache License 2.0](./LICENSE). See LICENSE file for details.

---

<p align="center">Made with ❤️ by the Keploy Community</p>
