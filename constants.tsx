
import React from 'react';
import { 
  Building2, 
  Layers, 
  Lightbulb, 
  Paintbrush, 
  Settings,
  Briefcase,
  Store,
  Utensils,
  Home,
  Warehouse,
  Stethoscope
} from 'lucide-react';
import { Service, SecondaryService, Project, Testimonial } from './types';

export const COLORS = {
  primary: '#bd1920',
  dark: '#111111',
  darkLight: '#1a1a1a',
  light: '#f8f8f8'
};

export const CORE_SERVICES: Service[] = [
  {
    id: 'full-fitout',
    number: '01',
    title: 'Full Fit-Out Solutions',
    description: 'End-to-end commercial and residential fit-out execution including MEP coordination, finishing works, and structured project delivery across Dubai and the UAE.'
  },
  {
    id: 'shell-core-fitout',
    number: '02',
    title: 'Shell & Core Fit-Out',
    description: 'Base build finishing, first and second fix MEP works, and shell & core preparation for high-rise offices, towers, and commercial units.'
  },
  {
    id: 'office-fitout-renovation',
    number: '03',
    title: 'Office Fit-Out & Renovation',
    description: 'Workspace transformation, MEP upgrades, partitions, ceilings and full interior execution tailored for corporate environments.'
  },
  {
    id: 'villa-renovation',
    number: '04',
    title: 'Villa Renovation & Finishing',
    description: 'Comprehensive villa renovation including gypsum works, tiling, painting, MEP upgrades and structured finishing delivery.'
  },
  {
    id: 'mep-works',
    number: '05',
    title: 'MEP Works',
    description: 'Mechanical, electrical and plumbing works supporting fit-out and large-scale residential and commercial developments.'
  },
  {
    id: 'interior-finishing-works',
    number: '06',
    title: 'Interior Finishing Works',
    description: 'Gypsum board, false ceilings, partitions, tiles and painting works delivered with finishing control and snag-focused execution.'
  }
];

export const SECONDARY_SERVICES: SecondaryService[] = [
  { title: 'Gypsum Board Installation', icon: <Layers className="w-6 h-6" /> },
  { title: 'False Ceilings', icon: <Layers className="w-6 h-6" /> },
  { title: 'Drywall Partitions', icon: <Building2 className="w-6 h-6" /> },
  { title: 'Floor & Wall Tiling', icon: <Building2 className="w-6 h-6" /> },
  { title: 'Painting Works', icon: <Paintbrush className="w-6 h-6" /> },
  { title: 'HVAC Installation', icon: <Settings className="w-6 h-6" /> },
  { title: 'Electrical Works', icon: <Settings className="w-6 h-6" /> },
  { title: 'Plumbing Works', icon: <Lightbulb className="w-6 h-6" /> },
  { title: 'Large-Scale Villa Packages', icon: <Home className="w-6 h-6" /> }
];

// helper to create a slug from title
const makeSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const PROJECTS: Project[] = [
  {
    slug: makeSlug('Dubai Airport - Gypsum & Painting Works'),
    title: 'Dubai Airport - Gypsum & Painting Works',
    location: 'Dubai, UAE',
    image: '/Projects/Dubai%20Airport.jpg',
    tags: ['Aviation', 'Fast Track', 'Gypsum Board', 'Painting']
  },
  {
    slug: makeSlug('Kanad Hospital - HVAC Installation'),
    title: 'Kanad Hospital - HVAC Installation',
    location: 'Al Ain, UAE',
    image: '/Projects/Kanad%20Hospital.webp',
    tags: ['Healthcare', 'HVAC', 'AC Installation', 'Compliance']
  },
  {
    slug: makeSlug('Damac Lagoons Villas - Gypsum & Tiling'),
    title: 'Damac Lagoons Villas - Gypsum & Tiling',
    location: 'Dubai, UAE',
    image: '/Projects/Damac%20Lagoons%20Villas.jpg',
    tags: ['Residential', 'Villas', 'Gypsum Board', 'Tiles']
  },
  {
    slug: makeSlug('Shorooq Mirdif Villas - MEP & Finishes'),
    title: 'Shorooq Mirdif Villas - MEP & Finishes',
    location: 'Mirdif, Dubai',
    image: '/Projects/Shorooq%20Mirdif%20Villas.jpg',
    tags: ['Residential', 'MEP', 'Gypsum Board', 'Tiles']
  },
  {
    slug: makeSlug('Saih Shuaib 230 Villas - Full Scope Works'),
    title: 'Saih Shuaib 230 Villas - Full Scope Works',
    location: 'Saih Shuaib, UAE',
    image: '/Projects/Saih%20Shuaib%20230%20Villas.webp',
    tags: ['Large Scale', 'MEP', 'Gypsum Board', 'Tiles', 'Painting']
  },
  {
    slug: makeSlug('Almamsha Seerah Phase 1 - Gypsum & Painting'),
    title: 'Almamsha Seerah Phase 1 - Gypsum & Painting',
    location: 'Sharjah, UAE',
    image: '/Projects/Almamsha%20Seerah%20Phase%201.jpg',
    tags: ['Residential', 'Community', 'Gypsum Board', 'Painting']
  },
  {
    slug: makeSlug('California Village Dubai - Finishing Works'),
    title: 'California Village Dubai - Finishing Works',
    location: 'Dubai, UAE',
    image: '/Projects/California%20Village%20Dubai.jpg',
    tags: ['Residential', 'Gypsum Board', 'Tiles', 'Painting']
  },
  {
    slug: makeSlug('Damac Executive Heights - MEP & Fit-Out'),
    title: 'Damac Executive Heights - MEP & Fit-Out',
    location: 'Barsha Heights (TECOM), Dubai',
    image: '/Projects/Damac%20Executive%20Heights.webp',
    tags: ['Commercial', 'High-Rise', 'MEP', 'Fit-Out']
  },
  {
    slug: makeSlug('Penthouse Fit-Out - The Atria Residences'),
    title: 'Penthouse Fit-Out - The Atria Residences',
    location: 'Business Bay, Dubai',
    image: '/Projects/The%20Atria%20Penthouse.webp',
    tags: ['Private Client', 'Full Fit-Out', 'MEP', 'Premium Finishes']
  },
  {
    slug: makeSlug('Jawharat Alshata - Marina Beachfront Fit-Out'),
    title: 'Jawharat Alshata - Marina Beachfront Fit-Out',
    location: 'Dubai Marina, Dubai',
    image: '/Projects/Jawharat%20Alshata%20-%20Marina%20Beachfront.webp',
    tags: ['Residential', 'False Ceiling', 'Partitions', 'Painting']
  }
];

export const getProjectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export const INDUSTRIES = [
  { name: 'Offices & Corporate', icon: <Briefcase /> },
  { name: 'Retail & Showrooms', icon: <Store /> },
  { name: 'Restaurants & Cafés', icon: <Utensils /> },
  { name: 'Villas & Residential', icon: <Home /> },
  { name: 'Warehouses', icon: <Warehouse /> },
  { name: 'Clinics & Medical', icon: <Stethoscope /> },
  { name: 'Hospitals & Healthcare', icon: <Building2 /> },
  { name: 'Airports & High-Traffic', icon: <Building2 /> }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "MEP coordination was handled professionally and the finishing quality matched the expectations of a high-end residential handover.",
    author: "Private Client Representative",
    type: "Penthouse Fit-Out",
    location: "The Atria Residences, Dubai"
  },
  {
    quote: "The HVAC installation was executed with strong attention to routing, cleanliness, and site safety—critical for a healthcare environment.",
    author: "Project Coordinator",
    type: "HVAC Installation",
    location: "Kanad Hospital, Al Ain"
  },
  {
    quote: "Gypsum board works were consistent across units and the tiling execution stayed within the agreed quality standard and timeline.",
    author: "Site Engineer",
    type: "Villas Finishing Works",
    location: "Damac Lagoons, Dubai"
  },
  {
    quote: "The team delivered MEP and finishing works with clear sequencing and effective coordination across multiple villa areas.",
    author: "Construction Supervisor",
    type: "MEP & Finishes",
    location: "Shorooq Mirdif, Dubai"
  },
  {
    quote: "Large-volume villa execution was managed with good manpower planning and disciplined snag closure before handover.",
    author: "Project Manager",
    type: "Multi-Villa Package Works",
    location: "Saih Shuaib, UAE"
  },
  {
    quote: "Partitions and ceiling works were clean and accurate, and painting finishes were smooth with minimal snag points.",
    author: "Facility Manager",
    type: "Ceilings, Partitions & Painting",
    location: "Jawharat Alshata, Dubai Marina"
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Visit & Assessment',
    description: 'Detailed site inspection, scope evaluation and requirement analysis.',
    duration: '3-7 days'
  },
  {
    step: '02',
    title: 'BOQ & Scope Confirmation',
    description: 'Clear scope definition with deliverables, materials and sequencing aligned before execution.',
    duration: '1-2 weeks'
  },
  {
    step: '03',
    title: 'Execution Planning',
    description: 'Manpower planning, method statements, material submittals and schedule control for smooth delivery.',
    duration: '1 week'
  },
  {
    step: '04',
    title: 'On-Site Execution',
    description: 'Civil works, MEP installation and finishing works delivered with controlled sequencing and daily supervision.',
    duration: 'Project-based'
  },
  {
    step: '05',
    title: 'Quality Checks & Snag Closure',
    description: 'Internal inspections, snag resolution and finishing alignment to handover standards.',
    duration: 'Project-based'
  },
  {
    step: '06',
    title: 'Handover',
    description: 'Final walkthrough, documentation readiness and clean project handover.',
    duration: '1 week'
  }
];

export const STATS = [
  { number: 12, label: 'Years in UAE', suffix: '+' },
  { number: 50, label: 'Projects Completed', suffix: '+' },
  { number: 500, label: 'Total Area Delivered', suffix: 'k+ sqm' },
  { number: 250, label: 'Team Size', suffix: '+' }
];

export const FAQ_ITEMS = [
  {
    question: 'Do you provide fit-out and renovation services across the UAE?',
    answer: 'Yes. We operate across the UAE with primary project focus in Dubai and surrounding emirates, depending on project scope and schedule.'
  },
  {
    question: 'What services do you handle within a fit-out project?',
    answer: 'We handle fit-out execution including MEP works, partitions and ceilings, tiling, painting, and coordinated finishing delivery aligned to project requirements.'
  },
  {
    question: 'Do you handle MEP works as part of fit-out execution?',
    answer: 'Yes. Our scope can include mechanical (HVAC), electrical and plumbing works, coordinated with interior works to support smooth execution and handover.'
  },
  {
    question: 'Can you deliver large-scale villa packages?',
    answer: 'Yes. We support phased and multi-unit villa scopes with structured manpower planning, sequencing control and consistent finishing standards.'
  },
  {
    question: 'How do you manage quality and snagging?',
    answer: 'We follow internal quality checks during execution and focus on snag closure before handover, ensuring finishing alignment and clean completion.'
  }
];

export const BLOG_POSTS = [
  {
    slug: 'office-fit-out-trends-2024',
    id: 1,
    title: 'Top 5 Design Trends for Office Fit-Outs in Dubai 2024',
    excerpt: 'Discover the latest design trends transforming Dubai offices: sustainable materials, collaborative spaces, wellness zones, and smart technology integration.',
    image: '/Projects/Damac%20Executive%20Heights.webp',
    date: 'Feb 8, 2024',
    category: 'Design Trends',
    readTime: '5 min read',
    fullContent: `Modern office fit-outs in Dubai are increasingly driven by the demand for flexible, healthy, and tech-enabled work environments.

1. Sustainability & Green Materials
Offices are adopting eco-friendly materials—recycled flooring, low-VOC paints, and sustainable sourcing. This reflects corporate responsibility and improves indoor air quality.

2. Collaborative Spaces & Hot-Desking
Open layouts with modular furniture, hot-desking areas, and breakout zones replace traditional cubicles. This promotes team engagement and adaptability.

3. Wellness Zones
Biophilic design, meditation pods, fitness areas, and natural lighting become standard. Companies prioritize employee wellness to boost productivity and retention.

4. Smart Technology Integration
IoT-enabled offices with smart lighting, climate control, and occupancy sensors create seamless, efficient work environments. Integration with visitor management systems is increasing.

5. Flexible Hybrid Facilities
Post-pandemic offices now balance in-office collaboration with flexible work arrangements. Smaller desks, larger meeting areas and breakout rooms support hybrid models.

Working with a contractor experienced in modern fit-out standards ensures your office meets current market expectations and supports future growth.`
  },
  {
    slug: 'dubai-authority-approvals-guide',
    id: 2,
    title: 'Navigating Dubai Authority Approvals: A Complete Guide',
    excerpt: 'Everything you need to know about getting approvals from DM, DEWA, and other Dubai authorities. Step-by-step process explained.',
    image: '/Projects/Kanad%20Hospital.webp',
    date: 'Feb 5, 2024',
    category: 'Regulations',
    readTime: '8 min read',
    fullContent: `Navigating Dubai's authority approval process can be complex. Here's a step-by-step guide to help you understand the key requirements and timelines.

Dubai Municipality (DM)
- Required for: All construction works, structural changes, fit-out documentation
- Timeline: 2-4 weeks (can extend based on revisions)
- Key Documents: Approval drawings, structural plans, MEP layouts
- Priority: Initial submission must be complete and accurate; missing items delay approval

DEWA (Electricity & Water Authority)
- Required for: All electrical and water works
- Timeline: 1-2 weeks after main approval
- Key Documents: Single-line diagrams, load calculations, plumbing schematics
- Connection: Ensures your project meets utility standards

DCD (Dubai Civil Defence)
- Required for: Fire safety compliance, emergency exits, fire alarm systems
- Timeline: 1-2 weeks
- Key Documents: Fire safety plans, exit routes, system layouts
- Critical: Non-compliance can halt a project

DCCAD (Dubai Municipality Centralized Addressing)
- Required for: Office/commercial units requiring addresses
- Timeline: Parallel with main approvals
- Documentation: Site location details, unit identification

Key Tips:
1. Submit complete, accurate drawings early—revisions extend timelines
2. Engage a consultant familiar with current Dubai standards
3. Plan for 4-6 weeks before groundbreaking
4. Maintain communication with authorities for early feedback

Working with an experienced contractor helps simplify this process through coordinated submissions and authority liaisons.`
  },
  {
    slug: 'villa-renovation-budget-planning',
    id: 3,
    title: 'Budget Planning for Villa Renovations: What to Expect',
    excerpt: 'Breakdown of typical costs for villa renovations in Dubai. Learn how to plan your budget effectively and avoid hidden expenses.',
    image: '/Projects/The%20Atria%20Penthouse.webp',
    date: 'Feb 1, 2024',
    category: 'Budget Guide',
    readTime: '6 min read',
    fullContent: `Villa renovations are a significant investment. Understanding typical cost structures helps you plan realistically and avoid surprises.

Typical Villa Renovation Cost Breakdown

Demolition & Prep (5-8% of budget)
- Removal of existing finishes, disposal, site preparation
- Structural repairs if needed
- Dust management and safety setup

MEP Works (20-30% of budget)
- Electrical rewiring, panel upgrades, AC ductwork
- Plumbing refurbishment, water lines, drainage
- HVAC installation and testing
- Increasingly significant due to modern system upgrades

Gypsum & Ceilings (10-15% of budget)
- Drywall partitions, false ceilings, acoustic treatments
- Material and labor costs are directly tied to coverage area

Flooring & Tiling (15-20% of budget)
- Tiles, wood, or alternatives for kitchens, bathrooms, living areas
- Prep work and waterproofing add to costs
- High-end materials increase this percentage significantly

Painting & Finishing (8-12% of budget)
- Interior walls, doors, trim work
- High-quality finishes reduce rework and touch-ups

Kitchen & Bathroom Upgrades (12-18% of budget)
- Often the most expensive area; fixtures, fittings, tiling
- Premium finishes and modern appliances inflate this category

Contingency (10-15% of budget)
- Always reserve for unforeseen issues (structural repairs, additional MEP work)
- Hidden problems often surface once renovation begins

Tips to Control Budget:
1. Get detailed BOQs from multiple contractors
2. Prioritize spending on high-use areas (kitchen, bathrooms)
3. Consider phased renovation if budget is tight
4. Lock material costs early to avoid price inflation
5. Maintain contingency reserve—don't spend every dirham

Average Villa Renovation Range
- AED 150,000–300,000 for standard 3-bedroom villa refresh
- AED 300,000–600,000+ for comprehensive renovation with upgrades
- Premium properties and high-end finishes can exceed these ranges significantly

A transparent, experienced contractor provides clear cost breakdowns and helps you make informed decisions without hidden fees.`
  }
];

export const getBlogPostBySlug = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
