export type ServiceSection = {
  title: string;
  content: string;
  bullets: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  shortTitle: string;
  heroImage: string;
  heroAlt: string;
  accentColor: string;
  location: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
  galleryImages: string[];
  sectionImages: string[];
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  relatedServices: string[];
};

export const SERVICES_CONTENT: ServicePageData[] = [
  {
    slug: "full-fitout",
    title: "Full Fit-Out Solutions in Dubai",
    shortTitle: "Full Fit-Out Solutions",
    heroImage:
      "/Images/fit-out-projects-1024x538.webp",
    heroAlt: "Complete fit-out execution from planning to handover",
    accentColor: "#bd1920",
    location: "Dubai, UAE",
    primaryKeyword: "Fit out company Dubai",
    secondaryKeywords: [
      "commercial fit out Dubai",
      "turnkey fit out contractor UAE",
      "MEP and interior fit out"
    ],
    intro:
      "Federal Fix delivers end-to-end fit-out solutions combining MEP works, interior finishing, and structured project management. From planning through handover, we coordinate all trades under one accountable team.",
    galleryImages: [
      "/Images/Commercial-Fitouts-dubai.webp",
      "/Images/MEP-works.webp",
      "/Images/fit-out-projects-1024x538.webp",
      "/Images/civil-works-dubai.webp",
    
    ],
    sectionImages: [
      "/Images/Commercial-Fitouts-dubai.webp",
      "/Images/MEP-works.webp",
      "/Images/fit-out-projects-1024x538.webp",
    
    ],
    sections: [
      {
        title: "Scope of Work",
        content:
          "Our full fit-out service covers every phase from initial planning through final handover. We manage MEP coordination, interior finishing, technical detailing, and quality assurance across all trades.",
        bullets: [
          "MEP first fix and second fix coordination",
          "Gypsum board, ceilings and partitions",
          "Flooring, tiling and wall finishes",
          "Painting and decorative works",
          "Testing and commissioning support"
        ]
      },
      {
        title: "Project Execution Approach",
        content:
          "Each fit-out follows a structured methodology: detailed scope review, transparent BOQ, phased execution with daily supervision, and snag-focused completion. One project manager owns all coordination.",
        bullets: [
          "Pre-construction planning and method statements",
          "Manpower and material scheduling",
          "Weekly progress meetings and reporting",
          "Change order management and documentation",
          "Final inspection and turnover checklist"
        ]
      },
      {
        title: "Why Choose Federal Fix",
        content:
          "We remove coordination complexity by managing all trades and vendors through a single point of accountability. Clear communication, transparent pricing, and consistent workmanship define every project.",
        bullets: [
          "Unified project management",
          "Experienced multi-discipline teams",
          "Transparent cost control",
          "Snag-focused quality checks",
          "Post-handover support"
        ]
      }
    ],
    faqs: [
      {
        question: "What's included in a full fit-out package?",
        answer:
          "A full fit-out includes MEP works, gypsum/ceilings, partitions, flooring, tiling, painting and all finishing works coordinated under one team from start to handover."
      },
      {
        question: "How long does a typical fit-out take?",
        answer:
          "Timeline depends on built-up area and complexity—typically 8-16 weeks. We provide a detailed schedule after scope review."
      },
      {
        question: "Do you handle both commercial and residential fit-outs?",
        answer:
          "Yes. We deliver fit-outs for offices, retail, hospitality, and residential projects with customized approaches for each project type."
      }
    ],
    relatedServices: ["shell-core-fitout", "office-fitout-renovation"]
  },

  {
    slug: "shell-core-fitout",
    title: "Shell & Core Fit-Out in Dubai",
    shortTitle: "Shell & Core Fit-Out",
    heroImage:
      "/Images/civil-works-dubai.webp",
    heroAlt: "Shell and core fit-out with MEP coordination",
    accentColor: "#ff7b80",
    location: "Dubai, UAE",
    primaryKeyword: "Shell and core fit-out Dubai",
    secondaryKeywords: [
      "commercial fit-out contractor Dubai",
      "office shell and core works",
      "MEP first fix second fix"
    ],
    intro:
      "Shell & core fit-out is the foundation for any commercial or residential space. We handle base building finishing, MEP coordination, and preparation for final tenant requirements with precision and reliability.",
    galleryImages: [
      "/Images/civil-works-dubai.webp",
      "/Images/building-refurbishment.webp",
      "/Images/MEP-works.webp",
      "/Images/fit-out-projects.webp",
    
    ],
    sectionImages: [
      "/Images/civil-works-dubai.webp",
      "/Images/MEP-works.webp",
      "/Images/building-refurbishment.webp",
    
    ],
    sections: [
      {
        title: "Base Build Preparation",
        content:
          "We prepare your shell space with structural checks, level verification, and base finishes ready for custom tenant fit-out. All work aligns with building standards and codes.",
        bullets: [
          "Structural assessment and repairs",
          "Concrete leveling and surface preparation",
          "Base flooring installation",
          "Partition rough-ins and openings"
        ]
      },
      {
        title: "First & Second Fix Works",
        content:
          "MEP works are coordinated in phases: first fix (rough-in) occurs before finishes, second fix (connection) happens after ceilings/walls. Sequencing ensures clean, conflict-free execution.",
        bullets: [
          "HVAC ductwork and AC first fix",
          "Electrical conduits and panel installation",
          "Plumbing rough-ins and drainage",
          "Testing and system readiness verification"
        ]
      },
      {
        title: "Structural & Finishing Readiness",
        content:
          "By shell & core completion, your space is structurally sound, MEP-ready, and prepared for final fit-out. All systems are tested and documented.",
        bullets: [
          "Concrete and structural finishes",
          "Ceiling base and false ceiling framing",
          "Wall preparation and finishing surfaces",
          "Testing documentation and handover logs"
        ]
      }
    ],
    faqs: [
      {
        question: "What's the difference between shell & core and fully fitted?",
        answer:
          "Shell & core covers structural and MEP readiness. Fully fitted adds interior finishes like painting, tiling, partitions and all furniture/fixtures."
      },
      {
        question: "How accurate is your shell & core handover?",
        answer:
          "We ensure all measurements, levels, and MEP layouts are documented and verified before handover so your contractor can proceed without surprises."
      }
    ],
    relatedServices: ["full-fitout", "mep-works"]
  },

  {
    slug: "office-fitout-renovation",
    title: "Office Fit-Out & Renovation in Dubai",
    shortTitle: "Office Fit-Out & Renovation",
    heroImage:
      "/Images/office-renovation.webp",
    heroAlt: "Modern office fit-out with collaborative spaces",
    accentColor: "#4a6fa5",
    location: "Dubai, UAE",
    primaryKeyword: "Office fit out Dubai",
    secondaryKeywords: [
      "office renovation Dubai",
      "office refurbishment Dubai",
      "workplace transformation service"
    ],
    intro:
      "Transform your office into a modern, productive workspace. From open-plan layouts to private meeting areas, MEP upgrades, and finishing, we deliver office environments that support today's work culture.",
    galleryImages: [
      "/Images/office-renovation.webp",
      "/Images/Glass-Partitions-and-Office-Fit-Outs.webp",
      "/Images/false-ceiling-in-dubai.webp",
      "/Images/MEP-works.webp",
    
    ],
    sectionImages: [
      "/Images/office-renovation.webp",
      "/Images/Glass-Partitions-and-Office-Fit-Outs.webp",
      "/Images/MEP-works.webp",
    
    ],
    sections: [
      {
        title: "Workspace Transformation",
        content:
          "We redesign office spaces for modern work: collaborative areas, quiet zones, meeting pods, and breakout spaces. Layout planning considers flow, technology integration, and wellness.",
        bullets: [
          "Space planning and layout design",
          "Partition and modular system design",
          "Breakout area creation",
          "Accessibility and compliance alignment"
        ]
      },
      {
        title: "Ceiling & Partition Systems",
        content:
          "Modern ceiling systems combine acoustics, lighting, and aesthetics. Partitions are designed for flexibility and professional appearance with clean finishes.",
        bullets: [
          "Suspended ceiling systems with acoustic tiles",
          "False ceiling design for service routing",
          "Glass partition systems for visual openness",
          "Drywall partition with clean finishes"
        ]
      },
      {
        title: "MEP Upgrade & Integration",
        content:
          "Electrical rewiring, AC ductwork redesign, and plumbing updates support modern office needs. Technology integration (networking, power points) is coordinated throughout.",
        bullets: [
          "Electrical panel upgrades and circuit design",
          "AC system redesign for zone control",
          "Data cabling and networking infrastructure",
          "Emergency lighting and fire safety systems"
        ]
      }
    ],
    faqs: [
      {
        question: "Can you renovate our office while we continue operations?",
        answer:
          "Yes. We can structure phased delivery, work after hours, or move operations temporarily to minimize disruption."
      },
      {
        question: "How do you handle existing furniture and equipment?",
        answer:
          "We assess existing items, protect or relocate them as needed, and integrate them into the new design where applicable."
      }
    ],
    relatedServices: ["full-fitout", "interior-finishing-works"]
  },

  {
    slug: "villa-renovation",
    title: "Villa Renovation & Finishing in Dubai",
    shortTitle: "Villa Renovation & Finishing",
    heroImage:
      "/Images/villa-renovation.webp",
    heroAlt: "Luxury villa renovation with modern finishes",
    accentColor: "#7dcfa0",
    location: "Dubai, UAE",
    primaryKeyword: "Villa renovation Dubai",
    secondaryKeywords: [
      "residential renovation contractor Dubai",
      "home refurbishment UAE",
      "gypsum and tile contractor"
    ],
    intro:
      "Professional villa renovation delivering structural updates, MEP upgrades, and finished interiors. From kitchens and bathrooms to gypsum work and painting, we handle comprehensive transformation.",
    galleryImages: [
      "/Images/villa-renovation.webp",
      "/Images/home-renovation-dubai.webp",
      "/Images/Kitchen-renovation.webp",
      "/Images/Bathroom-Works-in-Dubai.webp",
    
    ],
    sectionImages: [
      "/Images/home-renovation-dubai.webp",
      "/Images/Kitchen-renovation.webp",
      "/Images/Bathroom-Works-in-Dubai.webp",
    
    ],
    sections: [
      {
        title: "Structural & Layout Modifications",
        content:
          "We assess existing structures and execute safe modifications: removing non-load-bearing walls, creating open-plan layouts, or adding new partitions per approved designs.",
        bullets: [
          "Structural assessment and approval",
          "Safe demolition and removal",
          "Wall repositioning and opening creation",
          "Structural reinforcement where needed"
        ]
      },
      {
        title: "Gypsum & Ceiling Works",
        content:
          "Modern gypsum systems improve acoustics and flexibility. We install false ceilings for service routing, partition walls, and decorative finishes with clean execution.",
        bullets: [
          "Gypsum board partition walls",
          "False ceiling installation",
          "Acoustic tile selection and fitting",
          "Detailed finishing and joint sealing"
        ]
      },
      {
        title: "Tiling & Flooring",
        content:
          "Professional tiling in kitchens, bathrooms, and living areas. Flooring options include ceramic, porcelain, stone, or wood—each installed with precision.",
        bullets: [
          "Substrate preparation and waterproofing",
          "Tile selection and design layouts",
          "Professional installation and grout finishing",
          "Sealant application and curing"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a typical villa renovation take?",
        answer:
          "A full villa refurbishment typically takes 12-20 weeks depending on size, scope complexity, and any structural changes required."
      },
      {
        question: "Can you handle kitchen and bathroom design?",
        answer:
          "Yes. We coordinate with designers or can recommend layout and finish options aligned to your budget and style preferences."
      }
    ],
    relatedServices: ["interior-finishing-works", "mep-works"]
  },

  {
    slug: "mep-works",
    title: "MEP Works (HVAC, Electrical, Plumbing) in Dubai",
    shortTitle: "MEP Works",
    heroImage:
      "/Images/MEP-works.webp",
    heroAlt: "Professional MEP installation and coordination",
    accentColor: "#e67e22",
    location: "Dubai, UAE",
    primaryKeyword: "MEP contractor Dubai",
    secondaryKeywords: [
      "HVAC contractor UAE",
      "electrical contractor Dubai",
      "plumbing contractor"
    ],
    intro:
      "Mechanical, electrical, and plumbing systems are the backbone of any building. We design, install, test, and commission MEP systems with precision and full compliance.",
    galleryImages: [
      "/Images/MEP-works.webp",
      "/Images/electrical-works.webp",
      "/Images/plumbing.webp",
      "/Images/Mechanical-and-HVAC.webp",
    
    ],
    sectionImages: [
      "/Images/Mechanical-and-HVAC.webp",
      "/Images/electrical-works.webp",
      "/Images/plumbing.webp",
    
    ],
    sections: [
      {
        title: "Mechanical (HVAC) Works",
        content:
          "With Dubai's climate, reliable AC is essential. We design efficient HVAC systems with proper sizing, ductwork routing, and balancing for even temperature distribution.",
        bullets: [
          "HVAC system design and sizing",
          "Ductwork installation and insulation",
          "Unit placement and vibration control",
          "Balancing, testing, and commissioning"
        ]
      },
      {
        title: "Electrical Installation",
        content:
          "Safe, code-compliant electrical systems designed for current and future needs. We handle panel upgrades, circuit design, lighting, and power distribution.",
        bullets: [
          "Main panel and sub-panel installation",
          "Circuit design and breaker sizing",
          "Conduit routing and cable pulling",
          "Light fixture and switch installation",
          "Testing and certification"
        ]
      },
      {
        title: "Plumbing Systems",
        content:
          "Water supply, drainage, and sewage systems installed per building codes. We ensure proper slope, sizing, and access for maintenance.",
        bullets: [
          "Water line installation and pressure testing",
          "Drainage system design and installation",
          "Hot water system setup",
          "Fixture installation (sinks, toilets, showers)",
          "Leak testing and inspection"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you handle MEP design as well as installation?",
        answer:
          "Yes. We can design or review pre-design documents and execute full installation. We coordinate with your architect or consultant as needed."
      },
      {
        question: "Are your works compliant with Dubai regulations?",
        answer:
          "Yes. All systems are planned and installed to meet applicable requirements and project specifications."
      }
    ],
    relatedServices: ["full-fitout", "shell-core-fitout"]
  },

  {
    slug: "interior-finishing-works",
    title: "Interior Finishing Works in Dubai",
    shortTitle: "Interior Finishing Works",
    heroImage:
      "/Images/false-ceiling-in-dubai.webp",
    heroAlt: "Professional interior finishing and painting",
    accentColor: "#9b59b6",
    location: "Dubai, UAE",
    primaryKeyword: "Interior finishing contractor Dubai",
    secondaryKeywords: [
      "gypsum board contractor UAE",
      "false ceiling company Dubai",
      "partition contractor Dubai",
      "painting contractor"
    ],
    intro:
      "The finishing details define a space's quality and appeal. We deliver gypsum works, ceilings, partitions, tiling, and painting with precision and attention to every detail.",
    galleryImages: [
      "/Images/false-ceiling-in-dubai.webp",
      "/Images/gypsum-ceiling-dubai.webp",
      "/Images/painting-services-in-dubai.webp",
      "/Images/Tile-Repairs-and-Replacements-dubai.webp",
    
    ],
    sectionImages: [
      "/Images/gypsum-ceiling-dubai.webp",
      "/Images/painting-services-in-dubai.webp",
      "/Images/Tile-Repairs-and-Replacements-dubai.webp",
    
    ],
    sections: [
      {
        title: "Gypsum & Drywall Systems",
        content:
          "Gypsum board offers flexibility, sound isolation, and clean aesthetics. We install partition walls, soffit boxing, and specialty finishes with professional execution.",
        bullets: [
          "Stud framing and insulation",
          "Gypsum board installation and taping",
          "Joint compound application (3-coat system)",
          "Edge finishing and trim work"
        ]
      },
      {
        title: "Ceiling Installations",
        content:
          "Suspended ceilings combine aesthetics with functionality. Whether acoustic tiles or exposed systems, we ensure clean installation and proper integration with lighting and MEP.",
        bullets: [
          "Grid system installation and leveling",
          "Acoustic or tile selection and placement",
          "Lighting fixture integration",
          "Access panel and maintenance planning"
        ]
      },
      {
        title: "Tiling & Surface Finishes",
        content:
          "Professional tiling in kitchens, bathrooms, and feature walls. Proper waterproofing, substrate prep, and grout finishing ensure durability and aesthetics.",
        bullets: [
          "Waterproofing membrane application",
          "Tile adhesive application and curing",
          "Grout application and sealing",
          "Edge trimming and finishing"
        ]
      }
    ],
    faqs: [
      {
        question: "What's the best approach for large-area tiling?",
        answer:
          "Large areas benefit from careful planning, quality adhesive, proper curing time, and expansion joints to reduce cracking risk."
      },
      {
        question: "How do you ensure consistent paint finishes?",
        answer:
          "We use proper surface preparation, primers, consistent application techniques, and finishing inspections to maintain even coverage and clean results."
      }
    ],
    relatedServices: ["full-fitout", "villa-renovation"]
  },

  {
    slug: "shell-core-fit-out",
    title: "Shell & Core Fit-Out in Dubai",
    shortTitle: "Shell & Core Fit-Out",
    heroImage:
      "/Images/civil-works-dubai.webp",
    heroAlt: "Shell and core fit-out works for commercial spaces",
    accentColor: "#ff7b80",
    location: "Dubai, UAE",
    primaryKeyword: "Shell and core fit-out Dubai",
    secondaryKeywords: [
      "base build preparation",
      "first fix second fix works",
      "commercial fit-out contractor UAE"
    ],
    intro:
      "Our shell and core fit-out service prepares your space for complete fit-out delivery with coordinated structural, MEP, and readiness works.",
    galleryImages: [
      "/Images/civil-works-dubai.webp",
      "/Images/building-refurbishment.webp",
      "/Images/MEP-works.webp",
      "/Images/fit-out-projects.webp",
    
    ],
    sectionImages: [
      "/Images/civil-works-dubai.webp",
      "/Images/MEP-works.webp",
      "/Images/building-refurbishment.webp",
    
    ],
    sections: [
      {
        title: "Base Preparation",
        content:
          "We prepare shell spaces with level checks, structural corrections, and routing coordination to avoid rework during finishing phases.",
        bullets: [
          "Level and alignment verification",
          "Opening coordination and corrections",
          "Surface preparation and base readiness",
          "Execution sequencing by trade"
        ]
      },
      {
        title: "MEP Coordination",
        content:
          "First-fix and second-fix works are integrated with ceilings, partitions, and service access requirements for clean installation and future maintenance.",
        bullets: [
          "HVAC duct and equipment route planning",
          "Electrical conduit and panel alignment",
          "Plumbing and drainage rough-ins",
          "Service access and inspection planning"
        ]
      },
      {
        title: "Handover Readiness",
        content:
          "The space is delivered with documented checks so final fit-out works can start without scope gaps or system conflicts.",
        bullets: [
          "Progress and quality documentation",
          "Snag list closure support",
          "System readiness verification",
          "Final stage handover records"
        ]
      }
    ],
    faqs: [
      {
        question: "What does shell and core fit-out include?",
        answer:
          "It includes base preparation, coordinated MEP rough-ins, and structural readiness before final interior fit-out execution."
      },
      {
        question: "Can shell and core be phased floor by floor?",
        answer:
          "Yes. We can deliver phased packages by floor, zone, or handover milestone based on project timeline."
      }
    ],
    relatedServices: ["full-turnkey-execution", "office-fit-out"]
  },

  {
    slug: "office-fit-out",
    title: "Office Fit-Out in Dubai",
    shortTitle: "Office Fit-Out",
    heroImage:
      "/Images/office-renovation.webp",
    heroAlt: "Modern office fit-out and workspace transformation",
    accentColor: "#4a6fa5",
    location: "Dubai, UAE",
    primaryKeyword: "Office fit-out Dubai",
    secondaryKeywords: [
      "workspace refurbishment UAE",
      "office interior contractor",
      "commercial office renovation"
    ],
    intro:
      "We deliver practical and modern office fit-outs that improve employee flow, brand presentation, and operational efficiency.",
    galleryImages: [
      "/Images/office-renovation.webp",
      "/Images/Glass-Partitions-and-Office-Fit-Outs.webp",
      "/Images/false-ceiling-in-dubai.webp",
      "/Images/MEP-works.webp",
    
    ],
    sectionImages: [
      "/Images/office-renovation.webp",
      "/Images/Glass-Partitions-and-Office-Fit-Outs.webp",
      "/Images/MEP-works.webp",
    
    ],
    sections: [
      {
        title: "Planning and Layout",
        content:
          "We design office layouts around teams, circulation, and productivity while preserving flexibility for future expansion.",
        bullets: [
          "Space utilization planning",
          "Meeting and collaboration zones",
          "Reception and client-facing design",
          "Acoustic and lighting strategy"
        ]
      },
      {
        title: "Execution and Finishing",
        content:
          "Our team coordinates partitions, ceilings, flooring, joinery, and finishing packages under one supervised execution plan.",
        bullets: [
          "Partition and ceiling installation",
          "Flooring and wall finish works",
          "Custom joinery and storage units",
          "Brand color and material integration"
        ]
      },
      {
        title: "MEP and Compliance",
        content:
          "Office systems are upgraded to support modern loads, efficient cooling, and compliant safety provisions.",
        bullets: [
          "Power and data coordination",
          "HVAC balancing and zoning",
          "Emergency lighting integration",
          "Fire and authority compliance support"
        ]
      }
    ],
    faqs: [
      {
        question: "Can office fit-out be done while business is operating?",
        answer:
          "Yes. We can phase works by area and schedule disruptive activities after hours to reduce downtime."
      },
      {
        question: "Do you handle authority approvals for office projects?",
        answer:
          "Yes. We support required submissions and compliance checks as part of coordinated delivery."
      }
    ],
    relatedServices: ["shell-core-fit-out", "full-turnkey-execution"]
  },

  {
    slug: "villa-fit-out",
    title: "Villa Fit-Out in Dubai",
    shortTitle: "Villa Fit-Out",
    heroImage:
      "/Images/villa-renovation.webp",
    heroAlt: "High-end villa fit-out and finishing",
    accentColor: "#7dcfa0",
    location: "Dubai, UAE",
    primaryKeyword: "Villa fit-out Dubai",
    secondaryKeywords: [
      "residential fit-out contractor",
      "luxury villa interiors UAE",
      "villa finishing works"
    ],
    intro:
      "Our villa fit-out service combines architectural detailing, technical coordination, and premium finishing to deliver complete residential spaces.",
    galleryImages: [
      "/Images/villa-renovation.webp",
      "/Images/home-renovation-dubai.webp",
      "/Images/Kitchen-renovation.webp",
      "/Images/false-ceiling-in-dubai.webp",
    
    ],
    sectionImages: [
      "/Images/home-renovation-dubai.webp",
      "/Images/Kitchen-renovation.webp",
      "/Images/false-ceiling-in-dubai.webp",
    
    ],
    sections: [
      {
        title: "Design to Delivery",
        content:
          "From concept intent to execution details, we build villas with full visibility on scope, materials, and timeline milestones.",
        bullets: [
          "Client brief and concept review",
          "Material and sample approvals",
          "Execution sequencing by floor",
          "Milestone-based progress tracking"
        ]
      },
      {
        title: "Interior Fit-Out Works",
        content:
          "The package covers ceilings, partitions, stone and tile installation, joinery integration, and decorative finishing.",
        bullets: [
          "Gypsum and false ceiling systems",
          "Premium flooring and wall finishes",
          "Custom joinery and wood works",
          "Paint and final finishing layers"
        ]
      },
      {
        title: "Technical Integration",
        content:
          "MEP services are coordinated with interiors to maintain aesthetics while meeting performance and maintenance requirements.",
        bullets: [
          "HVAC and diffuser placement planning",
          "Electrical point optimization",
          "Plumbing fixture coordination",
          "Testing and handover checks"
        ]
      }
    ],
    faqs: [
      {
        question: "Is villa fit-out different from villa renovation?",
        answer:
          "Yes. Fit-out focuses on delivering interiors in new or shell spaces, while renovation usually upgrades existing built spaces."
      },
      {
        question: "Can you deliver turnkey villa packages?",
        answer:
          "Yes. Villa fit-out can be delivered as a full turnkey package including all coordinated trades."
      }
    ],
    relatedServices: ["full-turnkey-execution", "restaurant-cafe-fit-out"]
  },

  {
    slug: "retail-showroom-fit-out",
    title: "Retail & Showroom Fit-Out in Dubai",
    shortTitle: "Retail & Showroom Fit-Out",
    heroImage:
      "/Images/Retail-stores-Fit-outs-in-Dubai.webp",
    heroAlt: "Retail and showroom fit-out with branded interiors",
    accentColor: "#c07f2b",
    location: "Dubai, UAE",
    primaryKeyword: "Retail showroom fit-out Dubai",
    secondaryKeywords: [
      "shop fit-out contractor",
      "showroom interior execution",
      "brand-led retail design"
    ],
    intro:
      "We build retail and showroom spaces that support brand identity, customer movement, and practical daily operations.",
    galleryImages: [
      "/Images/Retail-stores-Fit-outs-in-Dubai.webp",
      "/Images/Commercial-Fitouts-dubai.webp",
      "/Images/office-renovation.webp",
      "/Images/fit-out-projects.webp",
    
    ],
    sectionImages: [
      "/Images/Retail-stores-Fit-outs-in-Dubai.webp",
      "/Images/Commercial-Fitouts-dubai.webp",
      "/Images/office-renovation.webp",
    
    ],
    sections: [
      {
        title: "Brand-Led Space Planning",
        content:
          "Layouts are built around product display, customer journey, and staff usability to improve both conversion and operations.",
        bullets: [
          "Zoning for display and circulation",
          "Storefront and entry experience design",
          "Back-of-house optimization",
          "Visual merchandising integration"
        ]
      },
      {
        title: "Fit-Out Execution",
        content:
          "We coordinate all finishes and technical packages, from feature walls to lighting effects and checkout counters.",
        bullets: [
          "Feature joinery and display systems",
          "Flooring and wall finish installation",
          "Lighting design and implementation",
          "POS area and storage fit-out"
        ]
      },
      {
        title: "Launch Readiness",
        content:
          "The final stage focuses on quality checks, snag closure, and practical readiness for soft launch or full opening.",
        bullets: [
          "Final QA walkthroughs",
          "Brand finish consistency checks",
          "Snag closure and rectification",
          "Opening support coordination"
        ]
      }
    ],
    faqs: [
      {
        question: "Can you deliver fit-outs for multi-branch retail brands?",
        answer:
          "Yes. We can standardize material and detail packages for consistent rollout across multiple branches."
      },
      {
        question: "Do you support mall and authority requirements?",
        answer:
          "Yes. We coordinate required documents and execution details for mall and authority compliance."
      }
    ],
    relatedServices: ["restaurant-cafe-fit-out", "full-turnkey-execution"]
  },

  {
    slug: "restaurant-cafe-fit-out",
    title: "Restaurant & Cafe Fit-Out in Dubai",
    shortTitle: "Restaurant & Cafe Fit-Out",
    heroImage:
      "/Images/Hospitality-fit-out-in-dubai.webp",
    heroAlt: "Restaurant and cafe fit-out with coordinated kitchen and dining zones",
    accentColor: "#9b5f3f",
    location: "Dubai, UAE",
    primaryKeyword: "Restaurant cafe fit-out Dubai",
    secondaryKeywords: [
      "hospitality fit-out contractor",
      "cafe interior design and build",
      "restaurant turnkey execution UAE"
    ],
    intro:
      "We build hospitality environments that balance ambience, service efficiency, and kitchen back-of-house requirements.",
    galleryImages: [
      "/Images/Hospitality-fit-out-in-dubai.webp",
      "/Images/Kitchen-renovation.webp",
      "/Images/MEP-works.webp",
      "/Images/Commercial-Fitouts-dubai.webp",
    
    ],
    sectionImages: [
      "/Images/Hospitality-fit-out-in-dubai.webp",
      "/Images/Kitchen-renovation.webp",
      "/Images/MEP-works.webp",
    
    ],
    sections: [
      {
        title: "Concept and Guest Experience",
        content:
          "We plan front-of-house zones, seating styles, and ambience details to match your brand positioning and guest turnover strategy.",
        bullets: [
          "Dining flow and seating layouts",
          "Mood lighting and finishes",
          "Service route optimization",
          "Brand identity integration"
        ]
      },
      {
        title: "Kitchen and Technical Systems",
        content:
          "Back-of-house areas are coordinated for ventilation, drainage, power loads, and maintenance access from day one.",
        bullets: [
          "Kitchen MEP coordination",
          "Ventilation and exhaust routing",
          "Drainage and grease management planning",
          "Power and equipment load checks"
        ]
      },
      {
        title: "Execution and Opening Support",
        content:
          "We deliver finishing works and closeout with clear QA control to support smooth trial runs and official opening.",
        bullets: [
          "Finishing and detailing works",
          "Stage-wise inspections",
          "Snag list closure before launch",
          "Final handover documentation"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you handle cafe and restaurant kitchen fit-out coordination?",
        answer:
          "Yes. We coordinate kitchen services with front-of-house fit-out to keep operations efficient and compliant."
      },
      {
        question: "Can you execute fast-track hospitality projects?",
        answer:
          "Yes. We can fast-track planning and phased execution based on opening deadlines and authority sequence."
      }
    ],
    relatedServices: ["retail-showroom-fit-out", "full-turnkey-execution"]
  },

  {
    slug: "full-turnkey-execution",
    title: "Full Turnkey Execution in Dubai",
    shortTitle: "Full Turnkey Execution",
    heroImage:
      "/Images/fit-out-projects.webp",
    heroAlt: "End-to-end turnkey project execution",
    accentColor: "#bd1920",
    location: "Dubai, UAE",
    primaryKeyword: "Turnkey fit-out execution Dubai",
    secondaryKeywords: [
      "design and build turnkey delivery",
      "single point fit-out contractor",
      "end-to-end project management"
    ],
    intro:
      "Our turnkey model gives you one accountable delivery team from planning and procurement to execution, QA, and final handover.",
    galleryImages: [
      "/Images/fit-out-projects.webp",
      "/Images/Commercial-Fitouts-dubai.webp",
      "/Images/MEP-works.webp",
      "/Images/civil-works-dubai.webp",
    
    ],
    sectionImages: [
      "/Images/Commercial-Fitouts-dubai.webp",
      "/Images/MEP-works.webp",
      "/Images/civil-works-dubai.webp",
    
    ],
    sections: [
      {
        title: "Single-Point Accountability",
        content:
          "You work with one project lead coordinating consultants, procurement, and multi-trade delivery under one timeline and reporting structure.",
        bullets: [
          "Centralized planning and controls",
          "Integrated design and execution review",
          "Procurement and logistics coordination",
          "Unified progress reporting"
        ]
      },
      {
        title: "Execution Control",
        content:
          "All packages are executed through stage gates with quality checks, risk tracking, and clear issue escalation controls.",
        bullets: [
          "Method statement and schedule control",
          "Stage-wise QA and inspections",
          "Cost and variation management",
          "Snag prevention through coordination"
        ]
      },
      {
        title: "Handover and Post-Handover",
        content:
          "Closeout includes testing records, as-built documentation, snag closure, and support after occupancy.",
        bullets: [
          "Testing and commissioning records",
          "As-built and handover document package",
          "Final snag closeout",
          "Defects liability support"
        ]
      }
    ],
    faqs: [
      {
        question: "What is included in turnkey execution?",
        answer:
          "Turnkey includes planning, procurement, site execution, QA control, handover documentation, and post-handover support."
      },
      {
        question: "Who coordinates subcontractors in turnkey projects?",
        answer:
          "Our project management team coordinates all subcontractors and packages under one integrated schedule."
      }
    ],
    relatedServices: ["shell-core-fit-out", "office-fit-out"]
  }
];

export const getServiceBySlug = (slug: string) =>
  SERVICES_CONTENT.find((service) => service.slug === slug);

export const SERVICE_NAME_TO_SLUG: Record<string, string> = {
  "Full Fit-Out Solutions": "full-fitout",
  "Shell & Core Fit-Out": "shell-core-fit-out",
  "Office Fit-Out & Renovation": "office-fitout-renovation",
  "Villa Renovation & Finishing": "villa-renovation",
  "MEP Works": "mep-works",
  "Interior Finishing Works": "interior-finishing-works",
  "Shell & Core Fit-Out (Legacy)": "shell-core-fitout",
  "Office Fit-Out": "office-fit-out",
  "Villa Fit-Out": "villa-fit-out",
  "Retail & Showroom Fit-Out": "retail-showroom-fit-out",
  "Restaurant & Cafe Fit-Out": "restaurant-cafe-fit-out",
  "Full Turnkey Execution": "full-turnkey-execution"
};






