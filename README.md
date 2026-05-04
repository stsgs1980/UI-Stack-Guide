# Z.ai Code Scaffold - AI-Powered Development

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-cyan)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-1.0.0-gray)](https://ui.shadcn.com/)

**A comprehensive Next.js template optimized for AI-powered development with Z.ai. Built with TypeScript, Tailwind CSS, and shadcn/ui components.**

## ✨ Features

### 🚀 Core Stack
- **Next.js 16.1.1** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript
- **React 19** - Latest React features
- **Tailwind CSS 4** - Utility-first CSS framework

### 🎨 UI Components
- **shadcn/ui** - Beautiful, accessible components
- **Radix UI** - Low-level primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **Recharts** - Data visualization
- **DnD Kit** - Drag and drop functionality

### 🔧 Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **Prisma** - Database ORM
- **Zustand** - State management
- **React Hook Form + Zod** - Form handling and validation
- **TanStack Query** - Server state management

### 🌐 Internationalization
- **Next-intl** - Multi-language support
- **NextAuth 4** - Authentication ready

### 🤖 AI Integration
- **Z-ai-web-dev-sdk** - AI-powered development toolkit
- **MDX Editor** - AI-enhanced markdown editing

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ui-stack-guide

# Install dependencies
npm install
# or
yarn install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
bun dev

# Open http://localhost:3000 to see the application
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server on port 3000

# Build
npm run build        # Create production build
npm run start        # Start production server

# Database
npm run db:push      # Push database schema
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:reset     # Reset database

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
/ui stack guide/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # Custom components
│   │   └── ui/              # shadcn/ui components
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility libraries
├── prisma/                  # Database schema
│   └── schema.prisma        # Prisma schema
├── examples/               # Example implementations
├── public/                 # Static assets
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.ts         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Component Library

The project includes a comprehensive set of UI components from shadcn/ui:

### Form Components
- Button, Input, Textarea, Select
- Checkbox, Radio, Switch, Slider
- Form validation with React Hook Form + Zod

### Layout Components
- Card, Accordion, Tabs, Sheet
- Dialog, Dropdown Menu, Popover
- Tooltip, Alert, Progress, Skeleton

### Data Components
- Table, Charts (Recharts)
- Scroll Area, Aspect Ratio

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database URL
DATABASE_URL=file:./db/custom.db

# Authentication (if needed)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

### Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push
```

## 🎯 Key Features

### 1. Responsive Design
- Mobile-first approach
- Dark mode support
- Tailwind CSS utility classes

### 2. Type Safety
- Full TypeScript coverage
- Strict mode enabled
- Comprehensive type definitions

### 3. Performance Optimized
- Next.js App Router
- Standalone output for deployment
- Image optimization with Sharp

### 4. Production Ready
- SEO optimized
- Meta tags and Open Graph
- Analytics ready

## 🤖 AI Development Features

### Z-ai-web-dev-sdk Integration
- AI-powered code suggestions
- Intelligent component generation
- Automated refactoring assistance

### MDX Editor
- AI-enhanced markdown editing
- Real-time preview
- Collaborative features

## 🚀 Deployment

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm run start
```

### Environment-Specific Configurations

- **Standalone Output**: Configured for containerized deployment
- **Database**: SQLite for development, easily switchable to PostgreSQL
- **Static Assets**: Optimized for CDN serving

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions:
- Check the documentation
- Open an issue on GitHub
- Join the community discussions

---

**Built with ❤️ using Z.ai Code Scaffold**