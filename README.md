# Tarkwa

A modern web application built with React, TypeScript, Vite, and Supabase.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run type checking
npm run typecheck

# Lint code
npm run lint
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This application is deployed to **Cloudflare Pages** at:
- **Production**: https://tarkwa.icebergsites.com

### Deploy to Cloudflare Pages

For detailed deployment instructions, including DNS configuration, see [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md).

**Quick Deploy:**
1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Configure custom domain: `tarkwa.icebergsites.com`

## 🛠️ Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📁 Project Structure

```
tarkwa/
├── public/          # Static assets
├── src/             # Application source code
├── .cloudflare/     # Cloudflare Pages configuration
├── .github/         # GitHub Actions workflows
└── dist/            # Production build output (generated)
```

## 🔒 Environment Variables

Create a `.env` file in the root directory (for local development):

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

For production, set these in your Cloudflare Pages project settings.

## 📝 License

Private

## 🤝 Contributing

This is a private project. For questions or issues, please contact the repository owner.
