// src/app/client-stories/data.ts
// ─────────────────────────────────────────────────────────────────────────────
// ADMIN DATA FILE — Client Stories for TAAS
//
// RULES:
//   • Set published: true ONLY when permissionStatus === 'approved' AND
//     you have real client info (name, exact quote, location, project details).
//   • NEVER invent names, quotes, photos, locations, or project outcomes.
//   • All 15 slots exist. Unpublished slots are invisible to visitors.
//   • clientPhoto / projectImages must be real paths — never AI-generated faces.
//
// TO ADD A STORY:
//   1. Fill every required field with real, verified information.
//   2. Set permissionStatus: 'approved'
//   3. Set published: true
//   4. Run `git push` — Vercel will deploy automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type PermissionStatus = 'pending' | 'approved' | 'declined';
export type VerificationSource = 'google' | 'whatsapp' | 'email' | 'instagram' | 'in-person' | null;
export type ConsultationType = '30-min' | '60-min' | '90-min';

export interface ClientStory {
  /** Slot number 1–15. Used for editorial numbering "01 / 15" */
  slot: number;

  /** Category direction for this slot — admin reference only, not shown publicly */
  adminCategory: string;

  /** Set to true only when all fields are verified and permission is granted */
  published: boolean;

  /** 'approved' required before publishing */
  permissionStatus: PermissionStatus;

  /** Where the client's testimonial was received */
  verificationSource: VerificationSource;

  // ── Client Identity ────────────────────────────────────────────────────────
  clientName: string;

  /** Absolute URL or relative /images/... path. null = no photo available */
  clientPhoto: string | null;

  /** e.g. "Bandra West" | "Andheri East" | "Powai" */
  location: string;

  /** e.g. "2BHK Renovation" | "Kitchen Planning" | "Commercial Office" */
  projectType: string;

  consultationType: ConsultationType;

  /** Display month + year: e.g. "August 2026" */
  consultationDate: string;

  /** Short tags, max 3: e.g. ["LAYOUT", "STORAGE", "MATERIALS"] */
  topics: string[];

  // ── Story Content ──────────────────────────────────────────────────────────

  /** One sentence: What was the client trying to decide? */
  theDecision: string;

  /** 2–4 sentences: What was confusing or blocking them? */
  theProblem: string;

  /** 2–4 sentences: What did TAAS help them work through? */
  theConsultation: string;

  /** 2–3 sentences: What became clearer afterward? */
  theOutcome: string;

  /**
   * EXACT client words — do NOT paraphrase, clean up, or make sound polished.
   * If the client wrote it casually, keep it casual. That's the authenticity.
   */
  exactQuote: string;

  // ── Media ─────────────────────────────────────────────────────────────────

  /**
   * Real project/space images.
   * Use actual project photos only. Never stock, never AI-generated.
   * Empty array if none available.
   */
  projectImages: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// THE 15 STORY SLOTS
// All currently unpublished — set published: true when real data is added.
// ─────────────────────────────────────────────────────────────────────────────

export const CLIENT_STORIES: ClientStory[] = [
  {
    slot: 1,
    adminCategory: 'Layout decision',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '60-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 2,
    adminCategory: 'Kitchen planning',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '60-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 3,
    adminCategory: 'Material selection',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '30-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 4,
    adminCategory: 'Storage planning',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '30-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 5,
    adminCategory: 'Furniture placement',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '30-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 6,
    adminCategory: 'Lighting decision',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '30-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 7,
    adminCategory: 'Whole-home direction',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '90-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 8,
    adminCategory: 'Second opinion',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '60-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 9,
    adminCategory: 'Contractor / design confusion',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '60-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 10,
    adminCategory: 'Budget allocation',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '60-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 11,
    adminCategory: 'Small-space planning',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '30-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 12,
    adminCategory: 'Bedroom planning',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '30-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 13,
    adminCategory: 'Commercial interior decision',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '90-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 14,
    adminCategory: 'Renovation decision',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '60-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
  {
    slot: 15,
    adminCategory: 'Final design confidence',
    published: false,
    permissionStatus: 'pending',
    verificationSource: null,
    clientName: '',
    clientPhoto: null,
    location: '',
    projectType: '',
    consultationType: '90-min',
    consultationDate: '',
    topics: [],
    theDecision: '',
    theProblem: '',
    theConsultation: '',
    theOutcome: '',
    exactQuote: '',
    projectImages: [],
  },
];

/** Only stories the public sees */
export const PUBLISHED_STORIES = CLIENT_STORIES.filter(
  (s) => s.published && s.permissionStatus === 'approved'
);

export const TOTAL_SLOTS = CLIENT_STORIES.length;
