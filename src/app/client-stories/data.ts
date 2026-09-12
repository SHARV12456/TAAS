// src/app/client-stories/data.ts
// ─────────────────────────────────────────────────────────────────────────────
// TAAS — Client Stories Data Library
//
// PUBLISH RULES:
//   status must be 'client-approved' to appear publicly.
//   All other statuses are invisible to visitors.
//
// TO ADD A REAL STORY:
//   1. Fill every field with verified information only.
//   2. Get explicit client permission.
//   3. Set status: 'client-approved'
//   4. git push — Vercel deploys automatically.
//
// NEVER:
//   • Invent names, quotes, locations, project details.
//   • Use AI-generated photographs.
//   • Paraphrase a client's words to sound more polished.
//   • Publish without permissionGranted: true.
// ─────────────────────────────────────────────────────────────────────────────

export type StoryStatus = 'draft' | 'verified' | 'client-approved';
export type PermissionStatus = 'pending' | 'approved' | 'declined';
export type FeedbackSource = 'google' | 'whatsapp' | 'email' | 'instagram' | 'in-person' | null;
export type ConsultationDuration = '30-min' | '60-min' | '90-min';
export type ProjectStage = 'planning' | 'pre-execution' | 'mid-renovation' | 'post-renovation' | 'new-home';

export interface StoryDecision {
  label: string;           // e.g. "01 — Layout"
  detail: string;          // what they were stuck on — real info only
}

export interface ConsultationStep {
  phase: 'understand' | 'look' | 'question' | 'direction' | 'decide';
  content: string;
}

export interface TaasRecommendation {
  category: string;        // e.g. "LAYOUT", "MATERIALS", "STORAGE"
  detail: string;          // what was actually discussed/recommended
}

export interface StoryImage {
  src: string;             // real file path or URL — never AI-generated
  caption: string;
  type: 'project' | 'site' | 'material' | 'before' | 'after' | 'floorplan' | 'client';
}

export interface ClientStory {
  // ── Identity & routing ────────────────────────────────────────────────────
  slot: number;            // 1–15 — editorial numbering
  slug: string;            // URL slug: e.g. "priya-bandra-layout"
  status: StoryStatus;
  permissionGranted: boolean;
  feedbackSource: FeedbackSource;

  // ── Admin category (not shown publicly) ───────────────────────────────────
  adminCategory: string;

  // ── Client ────────────────────────────────────────────────────────────────
  clientName: string;
  clientPhoto: string | null;   // real photo path only
  location: string;             // e.g. "Bandra West"
  propertyType: string;         // e.g. "2BHK"
  projectType: string;          // e.g. "Kitchen Renovation"

  // ── Consultation ──────────────────────────────────────────────────────────
  consultationDuration: ConsultationDuration;
  consultationDate: string;     // display string: "August 2026"
  projectStage: ProjectStage;
  topics: string[];             // tags: ["LAYOUT", "STORAGE", "MATERIALS"]

  // ── Story content (all fields must be real) ────────────────────────────────
  /** One strong line: what was the core decision they needed to make? */
  indexDecision: string;

  /** 2-4 paragraphs: what was this client actually dealing with? */
  situation: string;

  /** The specific design problems they were stuck on */
  decisions: StoryDecision[];

  /** What the client had / was considering / feared before TAAS */
  beforeConsultation: {
    hadAlready: string;
    wasConsidering: string;
    whatWasntWorking: string;
    wasAfraidOf: string;
    budget?: string;
  };

  /** Step-by-step consultation account */
  consultationTimeline: ConsultationStep[];

  /** What TAAS helped with, by category */
  recommendations: TaasRecommendation[];

  /** The client's EXACT words — do NOT paraphrase or polish */
  exactQuote: string;

  /** Longer narrative: what changed after the session */
  whatChangedAfter: string;

  // ── Profile summary ───────────────────────────────────────────────────────
  whyTheyCame: string;
  whatTheyNeeded: string;
  whatTheyLeftWith: string;

  // ── Media (real photos only) ──────────────────────────────────────────────
  images: StoryImage[];
}

// ─────────────────────────────────────────────────────────────────────────────
// THE 15 STORY SLOTS
//
// Status: All are 'draft' until you have real, approved client data.
// The index page shows all 15 slots editorially.
// Only 'client-approved' stories open to a full case study.
// ─────────────────────────────────────────────────────────────────────────────

export const CLIENT_STORIES: ClientStory[] = [
  {
    slot: 1,
    slug: 'story-01',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'New home layout decision',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'New Home Layout',
    consultationDuration: '60-min',
    consultationDate: '',
    projectStage: 'planning',
    topics: ['LAYOUT', 'FURNITURE', 'FLOW'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 2,
    slug: 'story-02',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Kitchen planning',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Kitchen Planning',
    consultationDuration: '60-min',
    consultationDate: '',
    projectStage: 'pre-execution',
    topics: ['KITCHEN', 'STORAGE', 'LAYOUT'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 3,
    slug: 'story-03',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Material selection',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Material Selection',
    consultationDuration: '30-min',
    consultationDate: '',
    projectStage: 'pre-execution',
    topics: ['MATERIALS', 'FINISHES', 'BUDGET'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 4,
    slug: 'story-04',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Storage planning',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Storage Planning',
    consultationDuration: '30-min',
    consultationDate: '',
    projectStage: 'planning',
    topics: ['STORAGE', 'LAYOUT', 'SMALL SPACE'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 5,
    slug: 'story-05',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Furniture planning',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Furniture Planning',
    consultationDuration: '30-min',
    consultationDate: '',
    projectStage: 'new-home',
    topics: ['FURNITURE', 'LAYOUT', 'PROPORTION'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 6,
    slug: 'story-06',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Lighting decisions',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Lighting Design',
    consultationDuration: '30-min',
    consultationDate: '',
    projectStage: 'pre-execution',
    topics: ['LIGHTING', 'MOOD', 'ELECTRICAL'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 7,
    slug: 'story-07',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Whole-home design direction',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Whole-Home Direction',
    consultationDuration: '90-min',
    consultationDate: '',
    projectStage: 'planning',
    topics: ['DIRECTION', 'LAYOUT', 'MATERIALS', 'BUDGET'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 8,
    slug: 'story-08',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Contractor / design disagreement',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Contractor Review',
    consultationDuration: '60-min',
    consultationDate: '',
    projectStage: 'pre-execution',
    topics: ['SECOND OPINION', 'CONTRACTOR', 'LAYOUT'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 9,
    slug: 'story-09',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Second opinion before spending',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Second Opinion',
    consultationDuration: '60-min',
    consultationDate: '',
    projectStage: 'pre-execution',
    topics: ['SECOND OPINION', 'BUDGET', 'DECISION'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 10,
    slug: 'story-10',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Renovation planning',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Renovation Planning',
    consultationDuration: '90-min',
    consultationDate: '',
    projectStage: 'planning',
    topics: ['RENOVATION', 'BUDGET', 'PHASING'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 11,
    slug: 'story-11',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Small apartment planning',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '1BHK',
    projectType: 'Small Space Planning',
    consultationDuration: '30-min',
    consultationDate: '',
    projectStage: 'planning',
    topics: ['SMALL SPACE', 'STORAGE', 'FURNITURE'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 12,
    slug: 'story-12',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Bedroom design',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Bedroom Design',
    consultationDuration: '30-min',
    consultationDate: '',
    projectStage: 'pre-execution',
    topics: ['BEDROOM', 'STORAGE', 'MATERIALS'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 13,
    slug: 'story-13',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Commercial space',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: 'Commercial',
    projectType: 'Commercial Interior',
    consultationDuration: '90-min',
    consultationDate: '',
    projectStage: 'planning',
    topics: ['COMMERCIAL', 'BRAND', 'LAYOUT'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 14,
    slug: 'story-14',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Budget allocation decisions',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Budget Planning',
    consultationDuration: '60-min',
    consultationDate: '',
    projectStage: 'planning',
    topics: ['BUDGET', 'PRIORITIES', 'MATERIALS'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
  {
    slot: 15,
    slug: 'story-15',
    status: 'draft',
    permissionGranted: false,
    feedbackSource: null,
    adminCategory: 'Final design validation',
    clientName: '',
    clientPhoto: null,
    location: '',
    propertyType: '',
    projectType: 'Design Validation',
    consultationDuration: '90-min',
    consultationDate: '',
    projectStage: 'pre-execution',
    topics: ['VALIDATION', 'CONFIDENCE', 'DIRECTION'],
    indexDecision: '',
    situation: '',
    decisions: [],
    beforeConsultation: { hadAlready: '', wasConsidering: '', whatWasntWorking: '', wasAfraidOf: '' },
    consultationTimeline: [],
    recommendations: [],
    exactQuote: '',
    whatChangedAfter: '',
    whyTheyCame: '',
    whatTheyNeeded: '',
    whatTheyLeftWith: '',
    images: [],
  },
];

// ── Public-facing helpers ──────────────────────────────────────────────────

/** Stories the public can read */
export const PUBLISHED_STORIES = CLIENT_STORIES.filter(
  (s) => s.status === 'client-approved' && s.permissionGranted,
);

/** Total slot count — always 15 */
export const TOTAL_SLOTS = CLIENT_STORIES.length;

/** Zero-padded slot number: 1 → "01" */
export function padSlot(n: number) {
  return String(n).padStart(2, '0');
}

/** Readable consultation label */
export const DURATION_LABELS: Record<string, string> = {
  '30-min': 'Quick Clarity · 30 min',
  '60-min': 'Deep Dive · 60 min',
  '90-min': 'Complete Direction · 90 min',
};

/** Source label for verification badge */
export const SOURCE_LABELS: Record<string, string> = {
  google: 'GOOGLE REVIEW',
  whatsapp: 'WHATSAPP',
  email: 'EMAIL',
  instagram: 'INSTAGRAM',
  'in-person': 'IN-PERSON',
};

export const PHASE_LABELS: Record<string, string> = {
  understand: 'UNDERSTAND',
  look: 'LOOK',
  question: 'QUESTION',
  direction: 'DIRECTION',
  decide: 'DECIDE',
};
