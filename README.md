# Simsation

> **Portfolio Project:** A production-grade, full-stack Angular application demonstrating modern web development practices, scalable architecture, and strategic technical decision-making.

🔗 **Live Site:** [simsation.ca](https://simsation.ca)  
📊 **Scale:** 400K+ monthly visitors at peak, sustained 50K+ for years  
🎯 **Status:** Version 2.0 in active development

---

## Overview

Simsation is a fan community platform for The Sims franchise, featuring interactive randomizer tools (build generators, challenge creators) that became go-to resources in the community. This repository showcases a complete platform migration from WordPress to modern Angular, demonstrating production-level architecture, performance optimization, and full-stack development capabilities.

### Key Highlights

- **Proven at scale:** Handled 5,000+ concurrent users and 400K monthly visitors
- **Viral success:** Featured by content creators with 5M+ combined subscribers
- **Strategic migration:** Complete rebuild from WordPress to Angular to enable reactive, real-time features
- **Production experience:** 4+ years serving real users with sustained engagement
- **Modern stack:** Angular 18+, TypeScript, SSR, signals, PostgreSQL/Supabase

### The Journey

**v1.0 (2021-2023)** - WordPress platform with embedded Angular apps. Launched, went viral via Reddit, sustained 50K+ monthly visitors for years on minimal infrastructure ($5/month DigitalOcean droplet).

**v2.0 (2023-Present)** - Complete architectural reimagining. Identified WordPress limitations for interactive experiences; evaluated modern frameworks; executed full migration to Angular with SSR, signal-based state management, and custom component architecture.

This project demonstrates not just technical skills, but the ability to build products people love, scale under real production load, identify platform limitations, and execute strategic technology decisions.

---

## Tech Stack

### Frontend
- **Angular 18+** - Standalone components, signals, and modern control flow
- **TypeScript** - Strict type checking throughout
- **RxJS** - Reactive state management
- **Angular Material** - Component framework with custom theming
- **SCSS** - Advanced styling with theme support (light/dark modes)

### Backend
- **Express.js** - Server middleware, API, and routing
- **Angular SSR** - Server-side rendering for performance and SEO
- **Supabase** - Backend services and data management

### Development & Testing
- **Vitest** - Unit testing framework
- **Git** - Version control with conventional commits

### Deployment & Infrastructure
- **DigitalOcean App Platform** - Automated deployments with GitHub integration, global CDN, and auto-scaling
- **Supabase Cloud** - Fully managed PostgreSQL with automated backups and global edge network

---

## Features

### User Experience
- 🎨 **Dynamic Theming** - Light and dark mode support with Material Design
- 📱 **Responsive Design** - Mobile-first, fully responsive layouts
- ⚡ **Server-Side Rendering** - Fast initial page loads and SEO optimization
- ♿ **Accessibility** - WCAG-compliant component design
- 🖼️ **Optimized Images** - NgOptimizedImage for performance

### Technical Highlights
- **Signal-Based Architecture** - Modern state management using Angular signals
- **OnPush Change Detection** - Optimized rendering performance
- **Lazy Loading** - Code-splitting and route-based lazy loading
- **Custom Component Library** - Reusable UI components with consistent API
- **Type-Safe Utilities** - Comprehensive utility library with full test coverage
- **Clean Architecture** - Separation of concerns across core, features, and shared modules

---

## Project Structure

```
src/
├── app/                 # Angular client app
│   ├── common/          # Shared components unique to Simsation.ca
│   ├── config/          # Application configuration
│   ├── core/            # Core foundantional services and components
│   ├── pages/           # Feature pages (lazy-loaded)
│   └── themes/          # Material theming and global styles
├── lib/                 # Generalized source code
│   ├── array/           # Array manipulation utilities
│   ├── math/            # Mathematical operations
│   ├── string/          # String processing
│   ├── validate/        # Type guards and validators
│   └── utils/           # General utilities
└── server/              # Angular SSR server, express API and middleware
```

---

## Code Quality

- **Type Safety** - Strict TypeScript configuration with no implicit `any`
- **Unit Testing** - Comprehensive test coverage using Vitest
- **Best Practices** - Following Angular style guide and modern patterns
- **Code Consistency** - Prettier formatting enforced across the codebase
- **Performance** - OnPush change detection, lazy loading, optimized builds

---

## Development Approach

This project follows modern Angular best practices:

- ✅ Standalone components (no NgModules)
- ✅ Signal-based state management
- ✅ `input()` and `output()` functions instead of decorators
- ✅ `computed()` for derived state
- ✅ Native control flow (`@if`, `@for`, `@switch`)
- ✅ `inject()` function for dependency injection
- ✅ Reactive forms over template-driven forms
- ✅ Host bindings in component metadata

---

## Exploring the Code

> **Note:** This is a portfolio showcase repository. The application requires a configured Supabase instance to run fully. You're welcome to explore the codebase to see implementation patterns and architecture.

### Local Setup (Optional)

```bash
# Clone the repository
git clone https://github.com/buck-silver/simsation.git

# Navigate to project directory
cd simsation

# Install dependencies
npm install

# Start development server
ng serve
```

**Note:** Without database configuration, some features will be unavailable. The codebase is public to demonstrate:
- Modern Angular patterns (standalone components, signals, control flow)
- TypeScript utility library design with comprehensive tests
- Component architecture and state management
- Full-stack integration patterns

### What to Explore

- **`src/app/pages/apps/`** - Interactive randomizer applications
- **`src/lib/`** - Type-safe utility library with 85%+ test coverage
- **`src/app/core/`** - Reusable component library and services
- **`src/server/`** - SSR implementation with Express.js

---

## Architecture Decisions

### Why Angular?
Angular provides an opinionated, batteries-included framework that scales from simple applications to enterprise systems. Unlike minimalist libraries that require piecing together disparate tools, Angular offers a cohesive ecosystem with:

- **Built-in Solutions** - Routing, HTTP client, forms, animations, and i18n without third-party dependencies
- **Structural Clarity** - Enforced separation between templates, styles, and logic promotes maintainable code
- **Type Safety** - First-class TypeScript integration with strong typing throughout the framework
- **Developer Experience** - Powerful CLI, comprehensive documentation, and excellent tooling support
- **Long-term Support** - Predictable release cycles and committed backward compatibility from Google

While other frameworks give you a hammer and nails, Angular delivers the entire workshop—already organized and ready to build.

### Why Signals?
Signals provide fine-grained reactivity with better performance than traditional change detection. They enable cleaner code with automatic dependency tracking and simplified state updates.

### Why Standalone Components?
Standalone components reduce boilerplate, simplify the mental model, and align with Angular's future direction. They make the dependency graph explicit and enable true tree-shaking.

### Why SSR?
Server-side rendering improves initial load performance, provides better SEO, and enhances accessibility for users with slower connections or devices.

### Why Supabase?
Supabase offers a complete backend-as-a-service platform that eliminates infrastructure complexity while maintaining full control:

- **PostgreSQL at the Core** - Production-grade relational database with full SQL capabilities, not a limited abstraction
- **Real-time Subscriptions** - Built-in WebSocket support for live data updates without additional services
- **Type Safety** - Auto-generated TypeScript types from database schema for end-to-end type safety
- **Authentication** - Ready-to-use auth with multiple providers, row-level security, and JWT management
- **Edge Functions** - Serverless functions deployed globally for low-latency API endpoints
- **Open Source** - Self-hostable and transparent, avoiding vendor lock-in

For a passion project, Supabase provides enterprise-grade features with a generous free tier, allowing focus on building features rather than managing infrastructure.

---

## License

This project is built for educational and portfolio purposes. The Sims franchise and all related trademarks are property of Electronic Arts Inc.

---

## Acknowledgments

Built with ❤️ for Sims fans everywhere, especially my wife.

The technical foundation of this project demonstrates modern web development practices and serves as a showcase of clean, maintainable code architecture.