'use client';
import { useState, useEffect, useRef } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { usePathname, useSearchParams } from 'next/navigation';
import { MOCK_BOOKINGS, Booking, formatDuration, formatCurrency } from '@/lib/mockData';
import { Play, Square, AlertCircle, CheckCircle2, ChevronLeft, Volume2, VolumeX, Clock } from 'lucide-react';
import Link from 'next/link';

type TimerState = 'NOT_STARTED' | 'ACTIVE' | 'WARNING_10' | 'WARNING_5' | 'COMPLETE' | 'OVERTIME' | 'SUMMARY';

export default function AdminTimer() {
  const path = usePathname();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId') || MOCK_BOOKINGS.find(b => b.status === 'Confirmed')?.id || MOCK_BOOKINGS[0].id;
  const booking = MOCK_BOOKINGS.find(b => b.id === bookingId) as Booking;

  const [timerState, setTimerState] = useState<TimerState>('NOT_STARTED');
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notes, setNotes] = useState({ observations: '', recommendations: '', nextSteps: '', private: '' });
  
  const totalDurationSeconds = booking ? booking.duration * 60 : 0;
  const remainingSeconds = totalDurationSeconds - elapsedSeconds;
  const overtimeSeconds = elapsedSeconds > totalDurationSeconds ? elapsedSeconds - totalDurationSeconds : 0;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Setup audio context on mount
    audioRef.current = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg'); // Fallback URL
    audioRef.current.loop = false;
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerState === 'ACTIVE' || timerState === 'WARNING_10' || timerState === 'WARNING_5' || timerState === 'OVERTIME') {
      interval = setInterval(() => {
        setElapsedSeconds(prev => {
          const next = prev + 1;
          const remaining = totalDurationSeconds - next;
          
          if (remaining === 600 && timerState !== 'WARNING_10') setTimerState('WARNING_10');
          if (remaining === 300 && timerState !== 'WARNING_5') setTimerState('WARNING_5');
          if (remaining === 0) {
            setTimerState('COMPLETE');
            if (soundEnabled && audioRef.current) {
              audioRef.current.play().catch(console.error);
            }
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerState, totalDurationSeconds, soundEnabled]);

  const startClock = () => {
    // Initialize audio on user interaction
    if (soundEnabled && audioRef.current) {
      audioRef.current.play().then(() => {
        audioRef.current?.pause();
        if (audioRef.current) audioRef.current.currentTime = 0;
      }).catch(console.error);
    }
    setTimerState('ACTIVE');
  };

  const endConsultation = () => {
    setTimerState('SUMMARY');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const markCompleted = () => {
    alert('Consultation saved successfully.');
    window.location.href = '/admin/consultations';
  };

  if (!booking) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-off-white)' }}>
        <AdminSidebar activePath={path} />
        <div className="admin-main" style={{ flex: 1, padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Booking not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-near-black)', color: 'var(--color-white)' }}>
      {/* Mobile-optimized header */}
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between', zIndex: 10 }}>
        <Link href="/admin/consultations" style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8125rem', textDecoration: 'none' }}>
          <ChevronLeft size={16} /> Back
        </Link>
        <button onClick={() => setSoundEnabled(!soundEnabled)} style={{ background: 'none', border: 'none', color: soundEnabled ? 'var(--color-white)' : 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.75rem' }}>
          {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />} SOUND {soundEnabled ? 'ON' : 'OFF'}
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', width: '100%' }}>
        
        {timerState === 'NOT_STARTED' && (
          <div style={{ maxWidth: 480, width: '100%', background: 'var(--color-white)', color: 'var(--color-near-black)', padding: '2.5rem', borderRadius: 0, textAlign: 'center' }}>
            <p className="label-caps" style={{ color: 'var(--color-grey)', marginBottom: '1.5rem' }}>Ready to begin?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', marginBottom: '2rem', background: 'var(--color-off-white)', padding: '1.5rem', border: '1px solid var(--color-light-grey)' }}>
              {[
                ['Client', booking.customer],
                ['Service', booking.service],
                ['Duration', `${booking.duration} minutes`],
                ['Scheduled', `${booking.time} — ${booking.date}`],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9375rem' }}>
                  <span style={{ color: 'var(--color-charcoal-light)' }}>{k}</span>
                  <span style={{ fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" onClick={startClock} style={{ width: '100%', fontSize: '1rem', padding: '1.25rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem' }}>
              <Play size={18} fill="currentColor" /> START THE CLOCK
            </button>
          </div>
        )}

        {(timerState === 'ACTIVE' || timerState === 'WARNING_10' || timerState === 'WARNING_5' || timerState === 'COMPLETE' || timerState === 'OVERTIME') && (
          <div style={{ width: '100%', maxWidth: 600, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{booking.customer}</h2>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>{booking.service} • {booking.duration} min</p>
            </div>

            {/* Timer Display */}
            <div style={{ 
              marginBottom: '4rem', 
              transition: 'all 0.3s ease',
              color: timerState === 'WARNING_5' || timerState === 'COMPLETE' ? '#ef4444' : timerState === 'WARNING_10' ? '#f59e0b' : timerState === 'OVERTIME' ? '#3b82f6' : 'var(--color-white)'
            }}>
              <div style={{ fontSize: 'clamp(5rem, 15vw, 9rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                {timerState === 'OVERTIME' ? `+${formatDuration(overtimeSeconds)}` : formatDuration(Math.abs(remainingSeconds))}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '1rem', opacity: 0.8 }}>
                {timerState === 'OVERTIME' ? 'ADDITIONAL TIME' : timerState === 'COMPLETE' ? 'TIME COMPLETE' : 'TIME REMAINING'}
              </div>
            </div>

            {/* Alerts */}
            {(timerState === 'WARNING_10' || timerState === 'WARNING_5' || timerState === 'COMPLETE') && (
              <div style={{ background: timerState === 'COMPLETE' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)', border: `1px solid ${timerState === 'COMPLETE' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`, color: timerState === 'COMPLETE' ? '#f87171' : '#fbbf24', padding: '1rem 2rem', borderRadius: '4px', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.75rem', animation: 'pulse-soft 2s infinite' }}>
                <AlertCircle size={20} />
                <span style={{ fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem' }}>
                  {timerState === 'WARNING_10' ? '10 MINUTES REMAINING' : timerState === 'WARNING_5' ? '5 MINUTES REMAINING' : 'YOUR BOOKED CONSULTATION TIME HAS ENDED'}
                </span>
              </div>
            )}

            {/* Controls */}
            <div style={{ display: 'flex', gap: '1rem', width: '100%', flexDirection: 'column' }}>
              {timerState === 'COMPLETE' && (
                <button onClick={() => setTimerState('OVERTIME')} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '1.25rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.05)'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                  <Play size={16} /> CONTINUE CONSULTATION
                </button>
              )}
              <button onClick={endConsultation} style={{ background: 'var(--color-white)', border: 'none', color: 'var(--color-near-black)', padding: '1.25rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', transition: 'all 0.2s' }}>
                <Square size={16} fill="currentColor" /> END CONSULTATION
              </button>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', opacity: 0.5, fontSize: '0.75rem' }}>
              <span>Booked: {booking.duration}m</span>
              <span>Elapsed: {formatDuration(elapsedSeconds)}</span>
            </div>
          </div>
        )}

        {timerState === 'SUMMARY' && (
          <div style={{ maxWidth: 640, width: '100%', background: 'var(--color-white)', color: 'var(--color-near-black)', padding: '3rem', border: '1px solid var(--color-light-grey)', textAlign: 'left', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 className="heading-3" style={{ marginBottom: '2rem' }}>Consultation Summary</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem', padding: '1.5rem', background: 'var(--color-off-white)', border: '1px solid var(--color-light-grey)' }}>
              <div>
                <p className="label">Booked</p>
                <p style={{ fontWeight: 600 }}>{booking.duration} min</p>
              </div>
              <div>
                <p className="label">Actual</p>
                <p style={{ fontWeight: 600 }}>{Math.floor(elapsedSeconds / 60)} min {elapsedSeconds % 60} sec</p>
              </div>
              {overtimeSeconds > 0 && (
                <div style={{ gridColumn: '1 / -1', color: '#3b82f6' }}>
                  <p className="label" style={{ color: '#3b82f6' }}>Additional Time</p>
                  <p style={{ fontWeight: 600 }}>{Math.floor(overtimeSeconds / 60)} min {overtimeSeconds % 60} sec</p>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="label">Key Observations & Recommendations</label>
                <textarea className="input" rows={4} value={notes.recommendations} onChange={e => setNotes({...notes, recommendations: e.target.value})} placeholder="What was discussed?" />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="label">Next Steps for Client</label>
                <textarea className="input" rows={3} value={notes.nextSteps} onChange={e => setNotes({...notes, nextSteps: e.target.value})} placeholder="Action items..." />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="label">Private Notes (Admin only)</label>
                <textarea className="input" rows={3} value={notes.private} onChange={e => setNotes({...notes, private: e.target.value})} placeholder="Internal notes, pricing discussed, etc." style={{ background: '#fefce8' }} />
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary" onClick={markCompleted} style={{ flex: 1, justifyContent: 'center' }}>
                <CheckCircle2 size={16} /> SAVE & MARK COMPLETED
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
