# Keploy Writers Program - Next.js

> This repository has been migrated from static HTML/CSS/JS to Next.js 15 with TypeScript and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/keploy/writers-program.git
cd writers-program
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Available Scripts

- `npm run dev` - Starts the development server on http://localhost:3000
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint to check for code quality issues
- `npm run type-check` - Runs TypeScript compiler to check for type errors

## 🏗️ Project Structure

```
writers-program/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProgramSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── CriteriaSection.tsx
│   │   └── CommunitySection.tsx
│   ├── ui/                  # Reusable UI components
│   │   └── button.tsx
│   ├── Header.tsx           # Header component
│   └── Footer.tsx           # Footer component
├── lib/                     # Utility functions
│   └── utils.ts            # Helper functions (cn, etc.)
├── public/                  # Static assets
│   ├── images/             # Images and GIFs
│   ├── fonts/              # Font files
│   └── css-legacy/         # Legacy CSS (for reference)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Lato, Inconsolata, Montserrat)

## 🔧 Configuration

### Environment Variables

No environment variables are required for the basic setup. If you need to add any, create a `.env.local` file in the root directory.

### Tailwind CSS

The project uses Tailwind CSS v4 with custom configuration. See `tailwind.config.ts` for customization options.

### TypeScript

TypeScript is configured with strict mode. See `tsconfig.json` for compiler options.

## 📝 Migration Notes

This project was migrated from a static HTML/CSS/JS website to Next.js 15. Key changes include:

1. **Component-based architecture**: All sections are now React components
2. **Server Components**: Leveraging Next.js 15 server components for better performance
3. **Image Optimization**: Using Next.js Image component for optimized images
4. **Type Safety**: Full TypeScript support for better developer experience
5. **Modern Styling**: Tailwind CSS for utility-first styling
6. **SEO Improvements**: Proper metadata and OpenGraph tags

### Legacy Files

Legacy CSS and JS files have been moved to `public/css-legacy` and are kept for reference only. They are not used in the new implementation.

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is through [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker containers

For production builds, always run:
```bash
npm run build
npm start
```

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Writers Program Website](https://writers.keploy.io/)
- [Keploy Main Website](https://keploy.io)
- [Keploy Blog](https://keploy.io/blog)
- [Join Our Slack](https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg)

## ⚡ Performance

This Next.js implementation includes:

- Server-side rendering for faster initial page loads
- Automatic code splitting
- Image optimization
- Font optimization
- CSS optimization through Tailwind

## 🐛 Known Issues

None at the moment. Please report any issues on the [GitHub Issues](https://github.com/keploy/writers-program/issues) page.

## 📞 Support

For support, join our [Slack community](https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg) or open an issue on GitHub.
