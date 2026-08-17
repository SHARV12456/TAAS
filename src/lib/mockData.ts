// =========================================================
// TAAS — Mock Data (Frontend Only)
// Replace with real API calls when backend is connected
// =========================================================

export const SERVICES = [
  {
    id: 'quick-30',
    name: 'Quick Consultation',
    duration: 30,
    price: 1999,
    description: 'For focused design questions and quick decisions.',
    featured: false,
  },
  {
    id: 'design-hour-60',
    name: 'TAAS',
    duration: 60,
    price: 3999,
    description: 'For detailed design consultation. First 15 minutes complimentary.',
    featured: true,
    tag: 'MOST POPULAR',
    complimentaryMinutes: 15,
  },
  {
    id: 'deep-dive-90',
    name: 'Deep Dive',
    duration: 90,
    price: 5999,
    description: 'For larger spaces or multiple design concerns.',
    featured: false,
  },
  {
    id: 'commercial',
    name: 'Commercial Consultation',
    duration: 0,
    price: 7500,
    priceLabel: 'From ₹7,500',
    description: 'For offices, cafés, restaurants, retail spaces and studios.',
    featured: false,
    isEnquiry: true,
  },
];

export const TIME_SLOTS = [
  { time: '09:00', available: true },
  { time: '09:30', available: false },
  { time: '10:00', available: true },
  { time: '10:30', available: true },
  { time: '11:00', available: false },
  { time: '11:30', available: true },
  { time: '12:00', available: true },
  { time: '12:30', available: false },
  { time: '14:00', available: true },
  { time: '14:30', available: true },
  { time: '15:00', available: true },
  { time: '15:30', available: false },
  { time: '16:00', available: true },
  { time: '16:30', available: true },
  { time: '17:00', available: true },
  { time: '17:30', available: false },
];

export const PROPERTY_TYPES = [
  'Residential – Apartment',
  'Residential – Villa / Independent House',
  'Rental Home',
  'Modular Kitchen',
  'Living Room',
  'Bedroom',
  'Office',
  'Retail Space',
  'Café',
  'Restaurant',
  'Commercial Interior',
  'Other',
];

export const BUDGET_RANGES = [
  'Under ₹1 Lakh',
  '₹1–3 Lakhs',
  '₹3–5 Lakhs',
  '₹5–10 Lakhs',
  '₹10–25 Lakhs',
  '₹25 Lakhs+',
  'Not decided yet',
];

export const FAQS = [
  {
    q: 'What is TAAS?',
    a: 'TAAS is a professional design consultation service where you book a designer for a fixed duration. You get expert advice on your space without committing to a full interior design project.',
  },
  {
    q: 'What is the first 15 minutes complimentary?',
    a: 'The first 15 minutes of your 60-minute consultation are complimentary. This time is used to understand your space, requirements and key concerns. Your full payment covers the entire session.',
  },
  {
    q: 'Do I need to hire you for the full project after consultation?',
    a: 'No. The consultation is an independent service. You are free to use the advice independently, approach other contractors, or discuss a larger project separately.',
  },
  {
    q: 'What should I prepare for the consultation?',
    a: 'Photos, measurements, floor plans or mood references can be helpful, but they are not mandatory. Just bring your questions and we will help you get clarity.',
  },
  {
    q: 'Is payment required before the appointment?',
    a: 'Yes. Your appointment is confirmed only after successful online payment. This ensures a committed consultation time for both parties.',
  },
  {
    q: 'Can I reschedule my consultation?',
    a: 'Yes. Rescheduling is allowed subject to our cancellation and rescheduling policy. Please review the policy page for details.',
  },
  {
    q: 'Do you consult on commercial spaces?',
    a: 'Yes. Commercial consultations are available for offices, cafés, restaurants, retail spaces and studios. These are priced separately.',
  },
  {
    q: 'Is this an online or in-person consultation?',
    a: 'Both options are available. You can choose an on-site consultation at your location or a video consultation. Please specify your preference during booking.',
  },
];

export const MOCK_BOOKINGS = [
  {
    id: 'DH-2024-001',
    customer: 'Priya Mehta',
    email: 'priya.m@gmail.com',
    phone: '+91 98200 12345',
    service: 'TAAS',
    duration: 60,
    date: '2024-08-19',
    time: '10:00',
    amount: 3999,
    payment: 'Paid',
    status: 'Confirmed',
    location: 'Bandra West, Mumbai',
    propertyType: 'Residential – Apartment',
  },
  {
    id: 'DH-2024-002',
    customer: 'Rohan Singhania',
    email: 'rohan.s@company.com',
    phone: '+91 99876 54321',
    service: 'Commercial Consultation',
    duration: 90,
    date: '2024-08-19',
    time: '14:00',
    amount: 7500,
    payment: 'Paid',
    status: 'Confirmed',
    location: 'Lower Parel, Mumbai',
    propertyType: 'Office',
  },
  {
    id: 'DH-2024-003',
    customer: 'Ananya Kapoor',
    email: 'ananya@gmail.com',
    phone: '+91 91234 56789',
    service: 'Quick Consultation',
    duration: 30,
    date: '2024-08-20',
    time: '11:00',
    amount: 1999,
    payment: 'Paid',
    status: 'Pending',
    location: 'Powai, Mumbai',
    propertyType: 'Modular Kitchen',
  },
  {
    id: 'DH-2024-004',
    customer: 'Vikram Sharma',
    email: 'v.sharma@outlook.com',
    phone: '+91 87654 32109',
    service: 'Deep Dive',
    duration: 90,
    date: '2024-08-21',
    time: '15:00',
    amount: 5999,
    payment: 'Paid',
    status: 'Completed',
    location: 'Andheri East, Mumbai',
    propertyType: 'Residential – Villa / Independent House',
  },
  {
    id: 'DH-2024-005',
    customer: 'Shreya Joshi',
    email: 'shreya.j@gmail.com',
    phone: '+91 90000 11111',
    service: 'TAAS',
    duration: 60,
    date: '2024-08-22',
    time: '09:30',
    amount: 3999,
    payment: 'Refunded',
    status: 'Cancelled',
    location: 'Malad West, Mumbai',
    propertyType: 'Rental Home',
  },
  {
    id: 'DH-2024-006',
    customer: 'Arjun Nair',
    email: 'arjun.nair@email.com',
    phone: '+91 92345 67890',
    service: 'TAAS',
    duration: 60,
    date: '2024-08-23',
    time: '16:00',
    amount: 3999,
    payment: 'Paid',
    status: 'Rescheduled',
    location: 'Thane, Mumbai',
    propertyType: 'Bedroom',
  },
];

export const REVENUE_DATA = [
  { month: 'Mar', revenue: 87500, bookings: 22 },
  { month: 'Apr', revenue: 112000, bookings: 28 },
  { month: 'May', revenue: 98500, bookings: 25 },
  { month: 'Jun', revenue: 134000, bookings: 34 },
  { month: 'Jul', revenue: 159000, bookings: 40 },
  { month: 'Aug', revenue: 184500, bookings: 46 },
];

export const BOOKING_BREAKDOWN = [
  { name: '30 Min', value: 18, color: '#9b9a97' },
  { name: '60 Min', value: 58, color: '#1a1917' },
  { name: '90 Min', value: 15, color: '#6b6a68' },
  { name: 'Commercial', value: 9, color: '#3d3c3a' },
];

export const AD_SOURCE_DATA = [
  { source: 'Google Ads', bookings: 18, percentage: 39 },
  { source: 'Meta Ads', bookings: 14, percentage: 30 },
  { source: 'Organic', bookings: 10, percentage: 22 },
  { source: 'Direct', bookings: 4, percentage: 9 },
];

export const MOCK_CUSTOMERS = [
  { name: 'Priya Mehta', email: 'priya.m@gmail.com', bookings: 2, totalSpent: 7998, lastBooking: '2024-08-19' },
  { name: 'Rohan Singhania', email: 'rohan.s@company.com', bookings: 1, totalSpent: 7500, lastBooking: '2024-08-19' },
  { name: 'Vikram Sharma', email: 'v.sharma@outlook.com', bookings: 3, totalSpent: 13997, lastBooking: '2024-08-21' },
  { name: 'Ananya Kapoor', email: 'ananya@gmail.com', bookings: 1, totalSpent: 1999, lastBooking: '2024-08-20' },
  { name: 'Arjun Nair', email: 'arjun.nair@email.com', bookings: 2, totalSpent: 7998, lastBooking: '2024-08-23' },
];

export const ADMIN_SERVICES = [
  {
    id: '1',
    name: '30-Minute Design Consultation',
    description: 'For focused design questions and quick decisions.',
    duration: 30,
    price: 1999,
    complimentaryMinutes: 0,
    status: 'Active',
    availability: 'Mon–Sat',
  },
  {
    id: '2',
    name: '60-Minute Design Consultation',
    description: 'For detailed design consultation. First 15 minutes complimentary.',
    duration: 60,
    price: 3999,
    complimentaryMinutes: 15,
    status: 'Active',
    availability: 'Mon–Sat',
  },
  {
    id: '3',
    name: '90-Minute Design Consultation',
    description: 'For larger spaces or multiple design concerns.',
    duration: 90,
    price: 5999,
    complimentaryMinutes: 0,
    status: 'Active',
    availability: 'Mon–Sat',
  },
  {
    id: '4',
    name: 'Commercial Consultation',
    description: 'For offices, cafés, restaurants, retail spaces and studios.',
    duration: 0,
    price: 7500,
    complimentaryMinutes: 0,
    status: 'Active',
    availability: 'Mon–Fri',
  },
];

// =========================================================
// Integration Placeholders — Replace with real IDs
// =========================================================

export const TRACKING_CONFIG = {
  META_PIXEL_ID: 'META_PIXEL_ID',
  GOOGLE_ANALYTICS_ID: 'GOOGLE_ANALYTICS_ID',
  GOOGLE_ADS_CONVERSION_ID: 'GOOGLE_ADS_CONVERSION_ID',
  GOOGLE_ADS_LABEL_BOOKING_STARTED: 'BOOKING_STARTED_LABEL',
  GOOGLE_ADS_LABEL_BOOKING_COMPLETED: 'BOOKING_COMPLETED_LABEL',
  GOOGLE_ADS_LABEL_PAYMENT_INITIATED: 'PAYMENT_INITIATED_LABEL',
  GOOGLE_ADS_LABEL_PAYMENT_COMPLETED: 'PAYMENT_COMPLETED_LABEL',
};

// =========================================================
// Payment Gateway Placeholder
// =========================================================

export const PAYMENT_CONFIG = {
  GATEWAY: 'RAZORPAY', // Replace with actual gateway: 'RAZORPAY' | 'STRIPE' | 'CASHFREE'
  KEY_ID: 'RAZORPAY_KEY_ID',
  CURRENCY: 'INR',
};

export type BookingStatus = 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled' | 'Rescheduled';

export function generateBookingId(): string {
  const year = new Date().getFullYear();
  const num = Math.floor(Math.random() * 9000) + 1000;
  return `DH-${year}-${num}`;
}

export function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
