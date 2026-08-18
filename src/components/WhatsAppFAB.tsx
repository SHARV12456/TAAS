'use client';
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppNumber } from '@/lib/mockData';

export default function WhatsAppFAB() {
  const [number, setNumber] = useState(getWhatsAppNumber());

  useEffect(() => {
    setNumber(getWhatsAppNumber());
  }, []);

  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '56px',
        height: '56px',
        backgroundColor: '#25D366',
        color: '#ffffff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 99,
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <MessageCircle size={28} />
    </a>
  );
}
