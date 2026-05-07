# St. Academic Academy — Next.js Website

A fully functional school website built with Next.js 14, TypeScript, and Tailwind CSS, converted from the Stitch prototype.

## Pages

- `/` — Homepage (hero, quick links, principal message, news, events)
- `/academics` — Academic programs, departments, AP courses, faculty stats
- `/admissions` — Application process, important dates, tuition, inquiry form
- `/student-life` — Athletics, clubs & activities, arts program, wellness
- `/contact` — Map, department directory, contact form

## Setup & Run

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Inter (headings/UI) + Newsreader (body copy) from Google Fonts
- **Icons**: Material Symbols Outlined

## Design System

The design follows the Institutional Design System:
- **Primary**: Deep Navy Blue (`#002147`)
- **Secondary**: Academic Gold (`#FCD400`)
- **Typography**: Inter for headings, Newsreader for body
- **Accessible**: WCAG AA/AAA compliant color contrast

## Features

- ✅ Responsive mobile-first layout
- ✅ Active navigation with Next.js `usePathname`
- ✅ Mobile hamburger menu
- ✅ Working contact & admissions forms with success states
- ✅ Embedded Google Maps on contact page
- ✅ Optimized images via `next/image`
- ✅ Sticky alert banner + fixed navigation
- ✅ Smooth hover transitions and micro-interactions
