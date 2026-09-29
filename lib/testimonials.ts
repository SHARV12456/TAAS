export type TestimonialType = "QUOTE" | "SCREENSHOT" | "VIDEO";

export type TestimonialSource =
  | "CLIENT NOTE"
  | "WHATSAPP"
  | "GOOGLE"
  | "INSTAGRAM"
  | "VIDEO";

export type Testimonial = {
  name: string;
  area: string;
  spaceType: string;
  quote?: string;
  source?: TestimonialSource;
  type?: TestimonialType;
  image?: string;
  videoUrl?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Riya S.",
    area: "Andheri",
    spaceType: "Rental",
    quote:
      "TAAS helped us change the feel of the entire rental without expensive renovation. The decisions felt clear, practical and easy to trust.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Kunal M.",
    area: "Bandra",
    spaceType: "Home",
    quote:
      "The advice was not just aesthetic—it helped us decide where to spend, what to leave alone and how to make the space feel more intentional.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Sneha P.",
    area: "Powai",
    spaceType: "Café",
    quote:
      "We wanted a refresh without a full rebuild. The suggestions were smart, outcome-focused and easy to execute within the budget.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Amit V.",
    area: "Borivali",
    spaceType: "Home",
    quote:
      "The biggest value was clarity. We knew exactly what mattered, and we stopped spending on things that looked nice but did not improve the room.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Neha K.",
    area: "Juhu",
    spaceType: "Rental",
    quote:
      "It felt like having a design filter. We stopped making random purchases and started choosing only pieces that actually worked in the space.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Ishaan R.",
    area: "Andheri West",
    spaceType: "Commercial",
    quote:
      "We needed our office to feel sharper without a disruptive renovation. TAAS helped us focus on the details that changed the perception of the space.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Priya N.",
    area: "Malad",
    spaceType: "Home",
    quote:
      "The process was practical and surprisingly calming. It gave us a plan, helped us prioritise and made the whole makeover easier to live with.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Rohan T.",
    area: "Santacruz",
    spaceType: "Café",
    quote:
      "We were looking for a cleaner identity, not a complete overhaul. The recommendation set helped us improve the experience without wasting budget.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Anjali D.",
    area: "Goregaon",
    spaceType: "Home",
    quote:
      "Instead of adding more, TAAS helped us edit better. The end result felt more premium because the choices were more thoughtful.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
  {
    name: "Vivek C.",
    area: "Kandivali",
    spaceType: "Rental",
    quote:
      "The difference came from what was removed and reassessed, not from a full redo. The plan saved us time, money and decision fatigue.",
    source: "CLIENT NOTE",
    type: "QUOTE",
  },
];
