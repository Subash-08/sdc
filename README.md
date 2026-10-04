# Shree Dhurga Constructions

A premium, content-managed website for Shree Dhurga Constructions, Hosur. The public experience presents the company’s construction services, selected projects, and field journal through an editorial, responsive interface with restrained scroll animation.

## Features

- Responsive construction-company homepage
- Individual pages for nine service categories
- Editorial project portfolio and case-study pages
- Construction journal with categories, pagination, SEO metadata, RSS, and sitemap
- Motion-based image, text, and scroll reveals with reduced-motion support
- Project, blog, category, newsletter, and user administration
- MongoDB content storage and Cloudinary image uploads
- NextAuth authentication

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template and provide the required values:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required environment variables

```env
MONGODB_URI=
NEXTAUTH_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Quality checks

```bash
npm run type-check
npm run build
```

## Technology

Next.js 16, React 19, TypeScript, Tailwind CSS, Motion, MongoDB/Mongoose, Cloudinary, and NextAuth.
