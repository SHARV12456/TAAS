export type SpaceType = "Home" | "Rental" | "Cafe" | "Other";
export type ProjectScope = "Whole Space" | "One Room" | "A Few Things" | "Not Sure";
export type BudgetTier = "₹3L" | "₹5L" | "₹10L+" | "NOT SURE";

export interface BookingFormData {
  spaceType: SpaceType | "";
  scope: ProjectScope | "";
  budget: BudgetTier | "";
  fullName: string;
  whatsapp: string;
  location: string;
  projectDetails: string;
}

export const initialFormData: BookingFormData = {
  spaceType: "",
  scope: "",
  budget: "",
  fullName: "",
  whatsapp: "",
  location: "",
  projectDetails: "",
};
