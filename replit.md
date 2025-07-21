# TRDOCS Landing Page

## Overview

This is a comprehensive professional landing page for TRDOCS, a Brazilian company specializing in document management, digitization, and storage services. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring advanced tools, interactive components, testimonials, case studies, pricing sections, and resource downloads to maximize lead conversion and showcase expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between client and server components:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **Form Handling**: React Hook Form with Zod validation
- **Build System**: Vite with development hot reloading and production optimization
- **TypeScript Configuration**: Strict mode enabled with path mapping for clean imports

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL (using Neon serverless)
- **API Structure**: RESTful endpoints for contact forms and lead capture
- **Development Setup**: Hot reload with tsx, production build with esbuild
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### UI Components Structure
The application uses a comprehensive design system with:
- Consistent color palette with light/dark mode support
- Responsive design patterns
- Accessible components built on Radix UI
- Reusable form components with validation
- Interactive elements like carousels, accordions, and modals

## Data Flow

### Lead Capture Flow
1. **Contact Form**: Users submit contact information through multiple entry points
2. **Lead Forms**: Specialized forms for quote requests and checklist downloads
3. **Validation**: Client-side validation with Zod schemas, server-side validation
4. **Storage**: Data persisted to PostgreSQL database via Drizzle ORM
5. **Response**: Success/error feedback to users with toast notifications

### Content Management
- **Static Content**: Company information, service descriptions, and marketing content
- **Interactive Tools**: Space calculator, FAQ sections, and downloadable resources
- **SEO Optimization**: Meta tags, structured data, and semantic HTML

## External Dependencies

### Core Framework Dependencies
- **React 18+**: Frontend framework with hooks and context
- **Express.js**: Backend web framework
- **TypeScript**: Type safety across the entire application
- **Drizzle ORM**: Type-safe database operations

### UI/UX Dependencies
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **React Hook Form**: Form state management
- **TanStack Query**: Server state management

### Database and Infrastructure
- **PostgreSQL**: Primary database (configured for Neon serverless)
- **Zod**: Runtime type validation
- **Vite**: Build tool and development server

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express.js backend
- **Hot Reload**: Automatic refresh for both frontend and backend changes
- **Environment Variables**: Database URL and other configuration through .env files
- **Type Checking**: Continuous TypeScript compilation checking

### Production Build
- **Frontend Build**: Vite builds optimized React application to `dist/public`
- **Backend Build**: esbuild bundles Express server to `dist/index.js`
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Static Assets**: Served through Express in production mode

### Database Management
- **Schema Definition**: Centralized in `shared/schema.ts` with TypeScript types
- **Migrations**: Generated and managed through Drizzle Kit
- **Connection**: Configured for PostgreSQL with environment-based URL
- **Type Safety**: Full end-to-end type safety from database to frontend

The application is designed to be easily deployable to platforms like Vercel, Netlify, or traditional hosting with proper environment variable configuration for the database connection.