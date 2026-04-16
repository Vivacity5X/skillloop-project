# SkillLoop - Local Skill-Sharing Platform

**SkillLoop** is a local skill-sharing platform that reimagines LinkedIn's Events feature as a specialized hub for discovering and booking hobbyist workshops in your community.

## 🎯 Project Overview

SkillLoop connects people who want to learn new skills (pottery, coding, crafts) with local instructors offering workshops. The platform features a LinkedIn-inspired 3-column responsive layout with modern UI components.

### Key Features

- **Workshop Discovery Feed**: Browse workshops in a social media-style feed with category filtering
- **Search & Filter**: Search by title, instructor, or category with real-time filtering
- **Workshop Booking**: Book workshops with modal-based booking flow
- **Instructor Onboarding**: Multi-step application form to become an instructor
- **LinkedIn Design System**: Matches LinkedIn's visual identity for familiarity
- **Responsive Layout**: Works on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** or **Bun** runtime
- Package manager (npm, yarn, or bun)

### Installation

1. **Clone or extract the project**:
   ```bash
   cd skillloop
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # OR
   bun install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # OR
   bun run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 with TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS v3 |
| **UI Components** | shadcn/ui |
| **State Management** | React Query (TanStack) |
| **Routing** | React Router v6 |
| **Icons** | Lucide React |
| **Testing** | Vitest + Playwright |

## 📁 Project Structure

```
skillloop/
├── src/
│   ├── components/          # UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── LinkedInNav.tsx   # Navigation header
│   │   ├── WorkshopCardLinkedIn.tsx
│   │   ├── WorkshopDetailLinkedIn.tsx
│   │   ├── CategoryFilterLinkedIn.tsx
│   │   ├── LeftSidebar.tsx
│   │   ├── RightSidebar.tsx
│   │   └── BookingModal.tsx
│   ├── pages/
│   │   ├── Index.tsx         # Main feed page
│   │   ├── BecomeInstructor.tsx
│   │   └── NotFound.tsx
│   ├── lib/
│   │   ├── utils.ts          # Utility functions
│   │   └── data.ts           # Workshop data
│   ├── hooks/                # Custom React hooks
│   └── main.tsx              # App entry point
├── public/                   # Static assets
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 🎨 Design System

SkillLoop follows LinkedIn's design specifications:

| Token | Value | Usage |
|-------|-------|-------|
| **Primary** | `#0A66C2` | Buttons, links, accents |
| **Background** | `#F3F2EF` | Page background |
| **Card** | `#FFFFFF` | Cards, modals |
| **Text Primary** | `#000000` | Headings |
| **Text Secondary** | `#666666` | Body text |
| **Border** | `#E0E0E0` | Dividers, borders |

## 📱 Screenshots

- **Home Feed**: Workshop cards with LinkedIn-style layout
- **Workshop Detail**: Full workshop information with booking
- **Become Instructor**: Multi-step form for instructor applications

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run E2E tests with Playwright
npx playwright test
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run lint` | Run ESLint |

## 🌐 Routes

| Path | Description |
|------|-------------|
| `/` | Main feed - workshop discovery |
| `/become-instructor` | Instructor application form |
| `*` | 404 Not Found page |
