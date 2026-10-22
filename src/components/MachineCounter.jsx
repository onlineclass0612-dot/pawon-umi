import React, { useEffect, useRef, useState, useCallback } from 'react';
import { parseStatValue } from '../utils/formatters';

/**
 * MachineCounter Component
 * Ultra-Lightweight Native Counter with 0 external dependencies (0 KB framer-motion overhead).
 * Utilizes native IntersectionObserver and requestAnimationFrame for smooth 60 FPS counter on desktop
 * and instant static text on mobile devices to keep main thread completely idle for sub-second LCP.
 */
export default function MachineCounter({
  value,
  duration = 2.0,
  delay = 0,
  className = "",
  suffixClassName = "text-[#C5A059] font-sans font-medium text-2xl md:text-3xl ml-0.5 select-none"
}) {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const parsed = parseStatValue(value);
  const { targetNumber, decimals, prefix, suffix } = parsed;

  const formatValue = useCallback((num) => {
    return decimals > 0
      ? num.toFixed(decimals)
      : Math.floor(num).toLocaleString('id-ID');
  }, [decimals]);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { rootMargin: '-40px' });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!numberRef.current) return;

    // On mobile devices or reduced motion, display the target number directly to keep main thread 100% free for instant LCP & 0 TBT
    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (isMobile) {
      numberRef.current.textContent = formatValue(targetNumber);
      return;
    }

    if (!isInView) return;

    numberRef.current.textContent = formatValue(0);

    let rafId;
    let startTimestamp = null;
    const durationMs = duration * 1000;
    const delayMs = delay * 1000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp - delayMs;

      if (elapsed <= 0) {
        rafId = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetNumber * easedProgress;

      if (numberRef.current) {
        numberRef.current.textContent = formatValue(currentVal);
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else if (numberRef.current) {
        numberRef.current.textContent = formatValue(targetNumber);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, targetNumber, duration, delay, formatValue]);

  return (
    <span
      ref={containerRef}
      className={`inline-flex items-baseline justify-center tabular-nums transform-gpu ${className}`}
    >
      {prefix && <span>{prefix}</span>}
      <span ref={numberRef} className="font-serif tracking-tight">
        {formatValue(targetNumber)}
      </span>
      {suffix && (
        <span className={suffixClassName}>
          {suffix}
        </span>
      )}
    </span>
  );
}
