export type ServiceImageSet = {
  heroImage: string;
  heroAlt?: string;
  galleryImages: string[];
  sectionImages: string[];
};

// Central image library for service pages.
// Update paths here to change service-page images site-wide.
const IMAGE_PRESETS = {
  default: [
    "/Images/Commercial-Fitouts-dubai.webp",
    "/Images/MEP-works.webp",
    "/Images/false-ceiling-in-dubai.webp",
    "/Images/home-renovation-dubai.webp",
    "/Images/villa-renovation.webp"
  ],
  fitout: [
    "/Images/fit-out-projects-1024x538.webp",
    "/Images/Commercial-Fitouts-dubai.webp",
    "/Images/office-renovation.webp",
    "/Images/MEP-works.webp",
    "/Images/civil-works-dubai.webp"
  ],
  office: [
    "/Images/office-renovation.webp",
    "/Images/Glass-Partitions-and-Office-Fit-Outs.webp",
    "/Images/false-ceiling-in-dubai.webp",
    "/Images/MEP-works.webp",
    "/Images/Commercial-Fitouts-dubai.webp"
  ],
  villa: [
    "/Images/villa-renovation.webp",
    "/Images/home-renovation-dubai.webp",
    "/Images/Kitchen-renovation.webp",
    "/Images/Bathroom-Works-in-Dubai.webp",
    "/Images/false-ceiling-in-dubai.webp"
  ],
  mep: [
    "/Images/MEP-works.webp",
    "/Images/Mechanical-and-HVAC.webp",
    "/Images/electrical-works.webp",
    "/Images/plumbing.webp",
    "/Images/fire-safety.webp"
  ],
  interior: [
    "/Images/false-ceiling-in-dubai.webp",
    "/Images/gypsum-ceiling-dubai.webp",
    "/Images/painting-services-in-dubai.webp",
    "/Images/Tile-Repairs-and-Replacements-dubai.webp",
    "/Images/home-renovation-dubai.webp"
  ],
  retail: [
    "/Images/Retail-stores-Fit-outs-in-Dubai.webp",
    "/Images/Commercial-Fitouts-dubai.webp",
    "/Images/office-renovation.webp",
    "/Images/fit-out-projects.webp",
    "/Images/false-ceiling-in-dubai.webp"
  ],
  hospitality: [
    "/Images/Hospitality-fit-out-in-dubai.webp",
    "/Images/Kitchen-renovation.webp",
    "/Images/MEP-works.webp",
    "/Images/Commercial-Fitouts-dubai.webp",
    "/Images/false-ceiling-in-dubai.webp"
  ],
  technology: [
    "/Images/Structured-Cabling-works.webp",
    "/Images/office-renovation.webp",
    "/Images/Commercial-Fitouts-dubai.webp",
    "/Images/fit-out-projects.webp",
    "/Images/MEP-works.webp"
  ],
  security: [
    "/Images/fire-safety.webp",
    "/Images/Structured-Cabling-works.webp",
    "/Images/office-renovation.webp",
    "/Images/Commercial-Fitouts-dubai.webp",
    "/Images/MEP-works.webp"
  ]
} as const;

type ImagePresetKey = keyof typeof IMAGE_PRESETS;

export const PRESET_IMAGE_SLOT_LABELS = [
  "Hero",
  "Gallery 1",
  "Gallery 2",
  "Gallery 3",
  "Gallery 4"
] as const;

const slugToPreset: Record<string, ImagePresetKey> = {
  "full-fitout": "fitout",
  "shell-core-fitout": "fitout",
  "office-fitout-renovation": "office",
  "villa-renovation": "villa",
  "mep-works": "mep",
  "interior-finishing-works": "interior",
  "shell-core-fit-out": "fitout",
  "office-fit-out": "office",
  "villa-fit-out": "villa",
  "retail-showroom-fit-out": "retail",
  "restaurant-cafe-fit-out": "hospitality",
  "full-turnkey-execution": "fitout",
  "audio-visuals": "technology",
  "smart-home-solutions": "technology",
  "structured-cabling": "technology",
  cctv: "security",
  "telephony-systems": "technology",
  "gate-barriers": "security",
  "wifi-network-setup": "technology",
  "access-control": "security",
  "iptv-installation": "technology"
};

export const SERVICE_IMAGE_CHECKLIST = [
  { slug: "full-fitout", service: "Full Fit-Out Solutions", preset: slugToPreset["full-fitout"] },
  { slug: "shell-core-fitout", service: "Shell & Core Fit-Out (Legacy)", preset: slugToPreset["shell-core-fitout"] },
  { slug: "office-fitout-renovation", service: "Office Fit-Out & Renovation", preset: slugToPreset["office-fitout-renovation"] },
  { slug: "villa-renovation", service: "Villa Renovation & Finishing", preset: slugToPreset["villa-renovation"] },
  { slug: "mep-works", service: "MEP Works", preset: slugToPreset["mep-works"] },
  { slug: "interior-finishing-works", service: "Interior Finishing Works", preset: slugToPreset["interior-finishing-works"] },
  { slug: "shell-core-fit-out", service: "Shell & Core Fit-Out", preset: slugToPreset["shell-core-fit-out"] },
  { slug: "office-fit-out", service: "Office Fit-Out", preset: slugToPreset["office-fit-out"] },
  { slug: "villa-fit-out", service: "Villa Fit-Out", preset: slugToPreset["villa-fit-out"] },
  { slug: "retail-showroom-fit-out", service: "Retail & Showroom Fit-Out", preset: slugToPreset["retail-showroom-fit-out"] },
  { slug: "restaurant-cafe-fit-out", service: "Restaurant & Cafe Fit-Out", preset: slugToPreset["restaurant-cafe-fit-out"] },
  { slug: "full-turnkey-execution", service: "Full Turnkey Execution", preset: slugToPreset["full-turnkey-execution"] },
  { slug: "audio-visuals", service: "Audio Visual Systems", preset: slugToPreset["audio-visuals"] },
  { slug: "smart-home-solutions", service: "Smart Home Solutions", preset: slugToPreset["smart-home-solutions"] },
  { slug: "structured-cabling", service: "Structured Cabling", preset: slugToPreset["structured-cabling"] },
  { slug: "cctv", service: "CCTV Systems", preset: slugToPreset.cctv },
  { slug: "telephony-systems", service: "Telephony Systems", preset: slugToPreset["telephony-systems"] },
  { slug: "gate-barriers", service: "Gate Barrier Systems", preset: slugToPreset["gate-barriers"] },
  { slug: "wifi-network-setup", service: "Wi-Fi & Network Setup", preset: slugToPreset["wifi-network-setup"] },
  { slug: "access-control", service: "Access Control Systems", preset: slugToPreset["access-control"] },
  { slug: "iptv-installation", service: "IPTV Installation", preset: slugToPreset["iptv-installation"] }
] as const;

/*
Checklist for replacing service images:
1. Pick a preset in IMAGE_PRESETS and replace all 5 paths in this order:
   Hero, Gallery 1, Gallery 2, Gallery 3, Gallery 4.
2. Use SERVICE_IMAGE_CHECKLIST to confirm each service points to the correct preset.
3. If a service needs unique images, create a new preset and update slugToPreset.
*/

const serviceAltOverrides: Partial<Record<string, string>> = {
  "full-fitout": "Complete fit-out execution from planning to handover",
  "shell-core-fitout": "Shell and core fit-out with MEP coordination",
  "office-fitout-renovation": "Modern office fit-out with collaborative spaces",
  "villa-renovation": "Villa renovation and finishing with premium detailing",
  "mep-works": "Integrated MEP works for building performance",
  "interior-finishing-works": "Interior finishing works with high-quality execution"
};

const ensureFiveImages = (images: readonly string[]): string[] => {
  const fallback = IMAGE_PRESETS.default;
  const merged = [...images, ...fallback];
  return merged.slice(0, 5);
};

const toImageSet = (images: readonly string[], heroAlt?: string): ServiceImageSet => {
  const normalized = ensureFiveImages(images);
  return {
    heroImage: normalized[0],
    heroAlt,
    galleryImages: normalized.slice(1, 5),
    sectionImages: normalized.slice(0, 3)
  };
};

const imageSetBySlug: Record<string, ServiceImageSet> = Object.fromEntries(
  Object.entries(slugToPreset).map(([slug, preset]) => [slug, toImageSet(IMAGE_PRESETS[preset], serviceAltOverrides[slug])])
);

export const applyServiceImageOverrides = <
  T extends {
    slug: string;
    heroImage: string;
    heroAlt: string;
    galleryImages: string[];
    sectionImages: string[];
  }
>(
  service: T
): T => {
  const imageSet = imageSetBySlug[service.slug];
  if (!imageSet) return service;

  return {
    ...service,
    heroImage: imageSet.heroImage,
    heroAlt: imageSet.heroAlt ?? service.heroAlt,
    galleryImages: imageSet.galleryImages,
    sectionImages: imageSet.sectionImages
  };
};

export const getStockImagesByPath = (path: string): string[] => {
  const value = path.toLowerCase();

  if (value.includes("office")) return [...IMAGE_PRESETS.office];
  if (value.includes("villa") || value.includes("home") || value.includes("residential")) return [...IMAGE_PRESETS.villa];
  if (value.includes("retail") || value.includes("showroom") || value.includes("shop")) return [...IMAGE_PRESETS.retail];
  if (value.includes("restaurant") || value.includes("cafe") || value.includes("hospitality")) return [...IMAGE_PRESETS.hospitality];
  if (value.includes("mep") || value.includes("hvac") || value.includes("electrical") || value.includes("plumbing") || value.includes("fire") || value.includes("safety")) return [...IMAGE_PRESETS.mep];
  if (value.includes("interior") || value.includes("gypsum") || value.includes("ceiling") || value.includes("tile") || value.includes("painting") || value.includes("wallpaper")) return [...IMAGE_PRESETS.interior];
  if (value.includes("shell") || value.includes("core") || value.includes("civil") || value.includes("structural")) return [...IMAGE_PRESETS.fitout];

  return [...IMAGE_PRESETS.default];
};
