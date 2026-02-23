# Content Template for Federal Fix Website

This document lists every piece of data currently used by the website that you will need to provide before the site can be considered live.  Each section contains a template showing the required shape and example placeholder values; simply replace the placeholders with your own copy, images, links, etc.

> **Tip:** The arrays and objects mirror the types found in `constants.tsx` and `data/services.ts`. Feel free to copy‑paste directly into those files.

---

## 1. Core Services

Used on the home page and services overview.

```ts
export const CORE_SERVICES: Service[] = [
  {
    id: 'shell-core',              // unique slug-like identifier
    number: '01',                  // display order or label
    title: 'Shell & Core Fit-Out', // service name
    description: 'Base build finishing, MEP first/second fix, authority-ready execution for high-rise commercial units.'
  },
  // add more services as needed
];
```

Replace titles, descriptions and ids with your actual service offerings.

---

## 2. Secondary Services

These are small feature items shown under services section.

```ts
export const SECONDARY_SERVICES: SecondaryService[] = [
  { title: 'Gypsum & Ceilings', icon: <Layers className="w-6 h-6" /> },
  { title: 'Joinery & Carpentry', icon: <Hammer className="w-6 h-6" /> },
  // etc.
];
```

Choose a Lucide icon for each or import a different SVG component.

---

## 3. Projects

Displayed on the home showcase and projects pages.

```ts
export const PROJECTS: Project[] = [
  {
    slug: makeSlug('Shell & Core Office Fit-Out'), // helper defined in constants.tsx
    title: 'Shell & Core Office Fit-Out',
    location: 'Business Bay',
    image: 'https://yourdomain.com/images/project1.jpg',
    tags: ['Corporate', 'Full MEP']
  },
  // more projects…
];
```

Provide one object per completed project; update `image` with a real photo URL.

---

## 4. Industries

Icons and industry names used in the Industries component.

```ts
export const INDUSTRIES = [
  { name: 'Offices & Corporate', icon: <Briefcase /> },
  { name: 'Retail & Showrooms', icon: <Store /> },
  // add or remove as relevant
];
```

---

## 5. Testimonials

Client quotes shown on home.

```ts
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The shell and core transition was seamless. Their BOQ was incredibly accurate, no hidden costs.",
    author: "James Peterson",
    type: "Office Fit-Out",
    location: "Business Bay"
  },
  // more testimonials…
];
```

Replace with real feedback and names (or anonymise as needed).

---

## 6. Process Steps

Used to describe your workflow.

```ts
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Project Assessment',
    description: 'Comprehensive site visit, scope definition, and BOQ preparation with authority requirement analysis.',
    duration: '1-2 weeks'
  },
  // steps 02–06 etc.
];
```

Edit titles, descriptions and durations to match your actual process.

---

## 7. Stats

Numbers that appear on the home page.

```ts
export const STATS = [
  { number: 150, label: 'Projects Completed', suffix: '+' },
  { number: 95, label: 'Client Satisfaction', suffix: '%' },
  // update values/labels
];
```

Enter honest figures and units.

---

## 8. FAQ Items

Frequently asked questions for the home page.

```ts
export const FAQ_ITEMS = [
  {
    question: 'What is the typical timeline for a shell & core fit-out?',
    answer: 'Shell & core projects typically take 8-16 weeks depending on size, complexity, and authority approvals. We provide a detailed timeline after the initial site visit and scope assessment.'
  },
  // add as many Q&A pairs as you need
];
```

Compose questions your prospects actually ask.

---

## 9. Blog Posts

Articles displayed on the blog listing and detail view.

```ts
export const BLOG_POSTS = [
  {
    slug: 'office-fit-out-trends-2024',
    id: 1,                          // unique numeric ID
    title: 'Top 5 Design Trends for Office Fit-Outs in Dubai 2024',
    excerpt: 'Discover the latest design trends transforming Dubai offices: sustainable materials, collaborative spaces, wellness zones, and smart technology integration.',
    image: 'https://yourdomain.com/images/blog1.jpg',
    date: 'Feb 8, 2024',
    category: 'Design Trends',
    readTime: '5 min read',
    fullContent: `Enter the full HTML or markdown of the post here.`
  },
  // more posts…
];
```

Ensure `fullContent` contains complete text (you can use plain text or JSX strings).

---

## 10. Service Page Data

Each service has a detailed page; see `data/services.ts` for the full schema. A minimal template:

```ts
export const SERVICES_CONTENT: ServicePageData[] = [
  {
    slug: 'your-service-slug',
    title: 'Your Service Title',
    shortTitle: 'Short Name',
    heroImage: 'https://yourdomain.com/images/hero.jpg',
    heroAlt: 'Descriptive alt text',
    accentColor: '#hexcode',
    location: 'Dubai, UAE',
    primaryKeyword: 'primary seo keyword',
    secondaryKeywords: ['keyword1', 'keyword2'],
    intro: 'Brief introduction paragraph describing the service.',
    galleryImages: [
      'https://yourdomain.com/images/gallery1.jpg',
      // more images
    ],
    sectionImages: [
      'https://yourdomain.com/images/section1.jpg',
      // more images
    ],
    sections: [
      {
        title: 'Section heading',
        content: 'Paragraph explaining this section.',
        bullets: ['Point one', 'Point two']
      },
      // more sections
    ],
    faqs: [
      { question: 'FAQ question?', answer: 'Answer to question.' },
      // more FAQs
    ],
    relatedServices: ['other-service-slug'],
  },
  // repeat for each service
];
```

Fill in realistic text, photo URLs and keywords for SEO.

---

## 11. Static Page Copy

### About Page (`components/AboutPage.tsx`)
Replace the headline, paragraph, and `highlights` array if needed. Provide a relevant image URL.

### Privacy Policy & Terms
Review & update both pages to reflect your company name, data practices, contact email, etc.

---

## 12. Assets & Logos

- **Logo files**: replace `/public/logos/Logo.svg` and `logo-light.svg` with your brand marks.
- **Client logos**: put real client logos under `/public/Clients/logos/`.
- **Images**: replace all Unsplash URLs in data files with your own photos or hosted images.

---

## 13. Other configuration

- Update the phone number, email address and office location on the contact page if different.
- Adjust the WhatsApp number in `ContactPage.tsx`.

---

After populating all of the above, delete any remaining placeholder text (e.g. `Lorem ipsum`).  Once the data is complete, your site should be ready for deployment.

Feel free to copy this file to your own documentation or hand it to your content team.