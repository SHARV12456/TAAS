// src/app/client-stories/data.ts
// ─────────────────────────────────────────────────────────────────────────────
// TAAS — Client Stories Data
//
// AUTHENTICITY RULES:
//   1. Only publish a story when permissionStatus === 'approved'
//   2. Never invent clientName, review, images, location, or project details
//   3. If a field is unknown, omit it — do NOT fill it with placeholder text
//      that will be visible on the public page
//   4. Use clientDisplayName to control what name appears publicly
// ─────────────────────────────────────────────────────────────────────────────

export type PermissionStatus = 'pending' | 'approved' | 'declined';
export type FeedbackSource   = 'google' | 'whatsapp' | 'email' | 'instagram' | 'in-person' | null;
export type Duration         = '30-min' | '60-min' | '90-min';

export interface ProjectImage {
  src:     string;   // path relative to /public, e.g. '/images/stories/01/kitchen.jpg'
  caption: string;   // short factual label, e.g. 'Kitchen after consultation'
}

export interface DesignDecision {
  before:         string;
  taasDirection:  string;
  finalDecision:  string;
}

export interface ClientStory {
  // ── Identity ───────────────────────────────────────────────────────────────
  slug:             string;
  slot:             number;
  permissionStatus: PermissionStatus; // must be 'approved' to show on site

  clientName:        string | null;  // Full legal name — keep null if not confirmed
  clientDisplayName: string | null;  // What to show publicly (e.g. 'S. B.' or full name)
  location:          string | null;  // Mumbai locality, e.g. 'Bandra West'
  propertyType:      string | null;  // e.g. '3BHK Apartment'
  projectType:       string | null;  // e.g. 'Residential'
  area:              string | null;  // e.g. '1,450 sq.ft.'
  consultationDate:  string | null;  // e.g. 'August 2026'
  consultationDuration: Duration;

  // ── Content ────────────────────────────────────────────────────────────────
  primaryProblem:    string | null;  // 1-line problem for the index card
  clientSituation:   string | null;  // 2–4 paragraphs for THE SITUATION
  topics:            string[];       // e.g. ['LAYOUT', 'KITCHEN']
  designQuestion:    string | null;  // Large editorial quote — client's own words if possible
  analysis:          string[];       // Ordered list for 'WHAT TAAS LOOKED AT'
  recommendations:   string | null;  // THE RECOMMENDATION section body
  designDecisions:   DesignDecision[];
  outcomes:          string[];       // 'WHAT CHANGED' bullet list
  review:            string | null;  // Exact client words — never rewritten
  reviewSource:      FeedbackSource;

  // ── Media ──────────────────────────────────────────────────────────────────
  heroImage:    ProjectImage | null; // Primary large image — must be real project photo
  projectImages: ProjectImage[];     // Gallery — only real project photos
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
export function padSlot(n: number) { return String(n).padStart(2, '0'); }

export const DURATION_LABELS: Record<Duration, string> = {
  '30-min': '30 Min · Quick Clarity',
  '60-min': '60 Min · Deep Decision',
  '90-min': '90 Min · Complex Space',
};

export const SOURCE_LABELS: Record<string, string> = {
  google:      'Google Review',
  whatsapp:    'WhatsApp Feedback',
  email:       'Email Feedback',
  instagram:   'Instagram Feedback',
  'in-person': 'Post-Consultation Feedback',
};

// ─────────────────────────────────────────────────────────────────────────────
// STORIES
// ─────────────────────────────────────────────────────────────────────────────

// ── Story 01 ─────────────────────────────────────────────────────────────────
// STATUS: Awaiting real client data and permission from admin.
//         When real data is available, fill all null fields and set
//         permissionStatus to 'approved'.
// ─────────────────────────────────────────────────────────────────────────────
const story01: ClientStory = {
  slug:             'story-01',
  slot:             1,
  permissionStatus: 'pending',       // ← change to 'approved' once verified

  clientName:         null,          // ← fill with real verified name
  clientDisplayName:  null,          // ← fill with approved public display name
  location:           null,          // ← fill with real locality
  propertyType:       null,
  projectType:        null,
  area:               null,
  consultationDate:   null,
  consultationDuration: '60-min',

  primaryProblem:   null,
  clientSituation:  null,
  topics:           [],
  designQuestion:   null,
  analysis:         [],
  recommendations:  null,
  designDecisions:  [],
  outcomes:         [],
  review:           null,
  reviewSource:     null,

  heroImage:     null,               // ← add real project photo path here
  projectImages: [],
};

// ── Slots 2–15 (awaiting real client data) ───────────────────────────────────
const makeDraft = (slot: number, adminNote: string): ClientStory => ({
  slug:             `story-${String(slot).padStart(2, '0')}`,
  slot,
  permissionStatus: 'pending',
  clientName:       null,
  clientDisplayName: null,
  location:         null,
  propertyType:     null,
  projectType:      null,
  area:             null,
  consultationDate: null,
  consultationDuration: '60-min',
  primaryProblem:   null,
  clientSituation:  null,
  topics:           [],
  designQuestion:   null,
  analysis:         [],
  recommendations:  null,
  designDecisions:  [],
  outcomes:         [],
  review:           null,
  reviewSource:     null,
  heroImage:        null,
  projectImages:    [],
});

export const CLIENT_STORIES: ClientStory[] = [
  story01,
  makeDraft(2,  'Kitchen planning'),
  makeDraft(3,  'Material selection'),
  makeDraft(4,  'Storage planning'),
  makeDraft(5,  'Furniture planning'),
  makeDraft(6,  'Lighting design'),
  makeDraft(7,  'Whole-home direction'),
  makeDraft(8,  'Contractor review'),
  makeDraft(9,  'Second opinion'),
  makeDraft(10, 'Renovation planning'),
  makeDraft(11, 'Small space planning'),
  makeDraft(12, 'Bedroom design'),
  makeDraft(13, 'Commercial interior'),
  makeDraft(14, 'Budget planning'),
  makeDraft(15, 'Design validation'),
];

export const TOTAL_SLOTS     = CLIENT_STORIES.length;
export const PUBLISHED_STORIES = CLIENT_STORIES.filter(s => s.permissionStatus === 'approved');
