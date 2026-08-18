'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { SERVICES, TIME_SLOTS, PROPERTY_TYPES, BUDGET_RANGES, generateBookingId, formatCurrency, generateBookingRequestMessage, WHATSAPP_CONFIG, getWhatsAppNumber, openWhatsApp } from '@/lib/mockData';
import { ArrowRight, ArrowLeft, Check, Upload } from 'lucide-react';
import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameDay, isBefore, addMonths, subMonths } from 'date-fns';

const STEPS = ['Consultation', 'Your Details', 'Date & Time', 'Review'];

function ProgressBar({ step }: { step: number }) {
  return (
    <div style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--color-light-grey)', marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        {STEPS.map((label, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                background: i < step ? 'var(--color-near-black)' : i === step ? 'var(--color-near-black)' : 'var(--color-light-grey)',
                color: i <= step ? 'var(--color-white)' : 'var(--color-grey)',
                transition: 'all 0.3s',
              }}>
                {i < step ? <Check size={13} /> : i + 1}
              </div>
              <span style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: i === step ? 'var(--color-near-black)' : 'var(--color-grey)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: 1, background: i < step ? 'var(--color-near-black)' : 'var(--color-light-grey)', margin: '0 0.5rem', marginBottom: '1.25rem', transition: 'background 0.3s' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarPicker({ selected, onSelect }: { selected: Date | null; onSelect: (d: Date) => void }) {
  const [month, setMonth] = useState(new Date());
  const start = startOfWeek(startOfMonth(month), { weekStartsOn: 1 });
  const end = endOfWeek(endOfMonth(month), { weekStartsOn: 1 });
  const days: Date[] = [];
  let d = start;
  while (d <= end) { days.push(d); d = addDays(d, 1); }
  const today = new Date();

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={() => setMonth(subMonths(month, 1))} style={{ background: 'none', border: '1px solid var(--color-light-grey)', cursor: 'pointer', padding: '0.375rem 0.75rem', fontSize: '0.875rem' }}>←</button>
        <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{format(month, 'MMMM yyyy')}</span>
        <button onClick={() => setMonth(addMonths(month, 1))} style={{ background: 'none', border: '1px solid var(--color-light-grey)', cursor: 'pointer', padding: '0.375rem 0.75rem', fontSize: '0.875rem' }}>→</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: '0.5rem' }}>
        {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-grey)', padding: '0.375rem 0' }}>{d}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
        {days.map((day, i) => {
          const isCurrentMonth = day.getMonth() === month.getMonth();
          const isPast = isBefore(day, today) && !isSameDay(day, today);
          const isSunday = day.getDay() === 0;
          const isSelected = selected && isSameDay(day, selected);
          const disabled = isPast || isSunday || !isCurrentMonth;
          return (
            <button key={i} disabled={disabled} onClick={() => !disabled && onSelect(day)}
              style={{
                aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8125rem', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
                background: isSelected ? 'var(--color-near-black)' : 'transparent',
                color: isSelected ? 'white' : disabled ? 'var(--color-light-grey)' : 'var(--color-near-black)',
                fontWeight: isSameDay(day, today) ? 700 : 400,
                transition: 'all 0.15s',
              }}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(SERVICES[1]);
  const [form, setForm] = useState({ name: '', phone: '', email: '', propertyType: '', location: '', size: '', concern: '', budget: '', notes: '' });
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId] = useState(generateBookingId());
  const [isProcessing, setIsProcessing] = useState(false);

  const handleWhatsAppBooking = () => {
    setIsProcessing(true);
    
    // Generate the message based on the form
    const message = generateBookingRequestMessage({
      name: form.name,
      phone: form.phone,
      email: form.email,
      propertyType: form.propertyType,
      location: form.location,
      size: form.size,
      concern: form.concern,
      budget: form.budget,
      notes: form.notes,
      serviceName: selected.name,
      serviceShortName: selected.shortName || selected.name,
      duration: selected.duration,
      price: selected.price,
      dateFormatted: date ? format(date, 'd MMMM yyyy') : '',
      time: time,
      complimentaryMinutes: selected.complimentaryMinutes
    });

    // Open WhatsApp
    openWhatsApp(getWhatsAppNumber(), message);
    
    // Simulate completing the form flow
    setTimeout(() => {
      setConfirmed(true);
      setIsProcessing(false);
    }, 1500);
  };

  const field = (id: string, label: string, placeholder: string, type = 'text') => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
      <label className="label" htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} value={form[id as keyof typeof form]} onChange={e => setForm({ ...form, [id]: e.target.value })} className="input" />
    </div>
  );

  if (confirmed) return (
    <main>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'var(--color-off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem' }}>
        <div style={{ maxWidth: 540, width: '100%', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-light-grey)', padding: '3rem', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-near-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Check size={24} color="white" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>Request Sent.</h1>
            <p style={{ color: 'var(--color-grey)', marginBottom: '2rem', fontSize: '0.9375rem' }}>Your booking request has been forwarded to WhatsApp.</p>
            <div style={{ background: 'var(--color-off-white)', padding: '1.5rem', marginBottom: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)' }}>
                <strong>Your appointment is confirmed once the requested slot and payment have been verified.</strong>
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-light)', marginTop: '0.5rem' }}>
                Please continue the conversation in WhatsApp to securely complete your payment.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Return to Homepage</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );

  return (
    <main>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'var(--color-off-white)', paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ marginBottom: '2rem' }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '0.5rem' }}>Booking</p>
            <h1 className="heading-2">Book Your Consultation</h1>
          </div>
          <ProgressBar step={step} />
          <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-light-grey)', padding: '2.5rem' }}>

            {/* STEP 0: Choose Service */}
            {step === 0 && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Choose Your Consultation</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {SERVICES.map(s => (
                    <div key={s.id} onClick={() => !s.isEnquiry && setSelected(s)}
                      style={{
                        padding: '1.5rem', border: `1px solid ${selected.id === s.id ? 'var(--color-near-black)' : 'var(--color-light-grey)'}`,
                        cursor: s.isEnquiry ? 'default' : 'pointer', background: selected.id === s.id ? 'var(--color-off-white)' : 'var(--color-white)',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s',
                      }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem' }}>
                          <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{s.name}</h3>
                          {s.tag && <span style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em', padding: '0.2rem 0.5rem', background: 'var(--color-near-black)', color: 'white' }}>{s.tag}</span>}
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-grey)' }}>{s.description}</p>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '1rem' }}>
                        <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{s.isEnquiry ? 'From ₹7,500' : formatCurrency(s.price)}</p>
                        {s.duration > 0 && <p style={{ fontSize: '0.75rem', color: 'var(--color-grey)' }}>{s.duration} min</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1: Details */}
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Tell Us About Your Space</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {field('name', 'Full Name', 'Your name')}
                  {field('phone', 'Phone', '+91 XXXXX XXXXX', 'tel')}
                  {field('email', 'Email', 'your@email.com', 'email')}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label className="label">Property Type</label>
                    <select className="input" value={form.propertyType} onChange={e => setForm({ ...form, propertyType: e.target.value })} style={{ appearance: 'none' }}>
                      <option value="">Select type</option>
                      {PROPERTY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  {field('location', 'Project Location', 'City / Area')}
                  {field('size', 'Approx. Space Size', 'e.g. 800 sq ft')}
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label className="label">What would you like help with?</label>
                    <textarea className="input" rows={3} placeholder="Describe your design concerns..." value={form.concern} onChange={e => setForm({ ...form, concern: e.target.value })} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label className="label">Budget Range</label>
                    <select className="input" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} style={{ appearance: 'none' }}>
                      <option value="">Select range</option>
                      {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label className="label">Additional Notes (Optional)</label>
                    <textarea className="input" rows={2} placeholder="Anything else you'd like us to know..." value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
                  </div>
                  {/* Photo upload UI (mock) */}
                  <div style={{ border: '1px dashed var(--color-light-grey)', padding: '1.5rem', textAlign: 'center', cursor: 'pointer' }}>
                    <Upload size={20} style={{ margin: '0 auto 0.5rem', color: 'var(--color-grey)' }} />
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-grey)' }}>Upload photos of your space (optional)</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-mid-grey)', marginTop: '0.25rem' }}>JPG, PNG up to 10MB each</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Date & Time */}
            {step === 2 && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Choose Date & Time</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <p className="label" style={{ marginBottom: '1rem' }}>Select Date</p>
                    <CalendarPicker selected={date} onSelect={setDate} />
                  </div>
                  <div>
                    <p className="label" style={{ marginBottom: '1rem' }}>Available Slots {date && `— ${format(date, 'dd MMM')}`}</p>
                    {!date ? (
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-grey)', marginTop: '2rem' }}>Select a date to see available slots.</p>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        {TIME_SLOTS.map(slot => (
                          <button key={slot.time} disabled={!slot.available} onClick={() => slot.available && setTime(slot.time)}
                            style={{
                              padding: '0.625rem', fontSize: '0.8125rem', fontWeight: 500,
                              border: `1px solid ${time === slot.time ? 'var(--color-near-black)' : 'var(--color-light-grey)'}`,
                              background: time === slot.time ? 'var(--color-near-black)' : slot.available ? 'white' : 'var(--color-off-white)',
                              color: time === slot.time ? 'white' : slot.available ? 'var(--color-near-black)' : 'var(--color-mid-grey)',
                              cursor: slot.available ? 'pointer' : 'not-allowed',
                              textDecoration: slot.available ? 'none' : 'line-through',
                              transition: 'all 0.15s',
                            }}>
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    )}
                    {date && time && (
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-charcoal)', marginTop: '1rem', padding: '0.75rem', background: 'var(--color-off-white)' }}>
                        Your consultation starts at <strong>{time}</strong> on <strong>{format(date, 'EEEE, d MMMM')}</strong>.
                      </p>
                    )}
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-grey)', marginTop: '1rem' }}>All times are in IST (Asia/Kolkata). Mon–Sat only.</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Review */}
            {step === 3 && (
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>YOUR DESIGN TIME</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { section: 'Consultation', items: [['Service', selected.name], ['Duration', `${selected.duration} minutes`], ['Amount', formatCurrency(selected.price)]] },
                    { section: 'Appointment', items: [['Date', date ? format(date, 'd MMMM yyyy') : '—'], ['Time', time || '—'], ['Location', form.location || '—']] },
                  ].map(({ section, items }) => (
                    <div key={section} style={{ padding: '1.25rem', background: 'var(--color-off-white)', border: '1px solid var(--color-light-grey)' }}>
                      <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '0.875rem' }}>{section}</p>
                      {items.map(([k, v]) => (
                        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.375rem 0', fontSize: '0.9rem', borderBottom: '1px solid var(--color-light-grey)' }}>
                          <span style={{ color: 'var(--color-charcoal-light)' }}>{k}</span>
                          <span style={{ fontWeight: 500 }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>HOW YOU'LL SECURE IT</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', padding: '1.25rem', background: 'var(--color-off-white)', borderLeft: '3px solid var(--color-charcoal)', lineHeight: '1.6' }}>
                    <strong>Your booking request will open a direct WhatsApp conversation where payment and final slot confirmation will be handled personally.</strong>
                  </p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <button
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '1.25rem', fontSize: '0.9375rem', justifyContent: 'center', opacity: isProcessing ? 0.7 : 1 }}
                    onClick={handleWhatsAppBooking}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'OPENING WHATSAPP...' : `RESERVE MY DESIGN TIME`}
                  </button>
                </div>
              </div>
            )}

            {/* Nav buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-light-grey)' }}>
              <button
                onClick={() => setStep(s => s - 1)}
                disabled={step === 0}
                className="btn btn-ghost"
                style={{ opacity: step === 0 ? 0.3 : 1, padding: '0.75rem 1.5rem', fontSize: '0.8125rem' }}
              >
                <ArrowLeft size={14} /> Back
              </button>
              {step < 3 && (
                <button onClick={() => setStep(s => s + 1)} className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.8125rem' }}>
                  Continue <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
