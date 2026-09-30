"use client";

import { useRef, useEffect } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
};

export default function BeforeAfter({ beforeSrc, afterSrc, alt = "comparison" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const beforeRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetPctRef = useRef<number>(0);
  const currentPctRef = useRef<number>(0);
  const isPointerDownRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onPointerMove = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      // keep within 5-95 to avoid fully hidden edge cases
      pct = Math.max(5, Math.min(95, pct));
      targetPctRef.current = pct;
      startRAF();
    };

    const pointerMove = (e: PointerEvent) => {
      onPointerMove(e.clientX);
    };

    const touchMove = (e: TouchEvent) => {
      onPointerMove(e.touches[0].clientX);
    };

    const onEnter = (e: PointerEvent) => {
      container.classList.add("is-hovered");
      pointerMove(e);
    };

    const onLeave = () => {
      container.classList.remove("is-hovered");
      // animate back to 0% (hide before) smoothly
      targetPctRef.current = 0;
      startRAF();
    };

    const onDown = (e: PointerEvent) => {
      isPointerDownRef.current = true;
      (e.target as Element).setPointerCapture?.((e as any).pointerId);
    };

    const onUp = (e: PointerEvent) => {
      isPointerDownRef.current = false;
    };

    container.addEventListener("pointerenter", onEnter);
    container.addEventListener("pointermove", pointerMove);
    container.addEventListener("pointerleave", onLeave);
    container.addEventListener("pointerdown", onDown);
    container.addEventListener("pointerup", onUp);
    container.addEventListener("pointercancel", onUp);

    container.addEventListener("touchmove", touchMove, { passive: true });

    return () => {
      container.removeEventListener("pointerenter", onEnter);
      container.removeEventListener("pointermove", pointerMove);
      container.removeEventListener("pointerleave", onLeave);
      container.removeEventListener("pointerdown", onDown);
      container.removeEventListener("pointerup", onUp);
      container.removeEventListener("pointercancel", onUp);
      container.removeEventListener("touchmove", touchMove as any);
      stopRAF();
    };
  }, []);

  function startRAF() {
    if (rafRef.current) return;
    const loop = () => {
      const cur = currentPctRef.current;
      const tgt = targetPctRef.current;
      const diff = tgt - cur;
      const step = diff * 0.18; // smoothing factor
      const next = cur + step;
      currentPctRef.current = next;
      applyWidth(next);
      if (Math.abs(diff) > 0.1) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        // snap to target and stop
        currentPctRef.current = tgt;
        applyWidth(tgt);
        stopRAF();
      }
    };
    rafRef.current = requestAnimationFrame(loop);
  }

  function stopRAF() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  function applyWidth(pct: number) {
    const before = beforeRef.current;
    const handle = handleRef.current;
    if (!before || !handle) return;
    // before overlay width is pct%
    before.style.width = `${pct}%`;
    handle.style.left = `${pct}%`;
  }

  return (
    <div className="before-after" ref={containerRef} role="img" aria-label={alt}>
      <img src={afterSrc} alt={alt + " - after"} className="ba-after"/>
      <div className="ba-before" ref={beforeRef} aria-hidden>
        <img src={beforeSrc} alt={alt + " - before"} />
      </div>
      <div className="ba-handle" ref={handleRef} aria-hidden>
        <div className="ba-line" />
        <div className="ba-dot" />
      </div>
      <div className="ba-label ba-label-after">AFTER</div>
      <div className="ba-label ba-label-before">BEFORE</div>
      <div className="ba-caption">SEE THE TRANSFORMATION →</div>
    </div>
  );
}
