import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TAAS | Professional Interior Design Consultation',
  description: 'Book a professional interior design consultation in Mumbai. Expert guidance on layout, materials, furniture, storage and more. 60 minutes from ₹3,999.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
