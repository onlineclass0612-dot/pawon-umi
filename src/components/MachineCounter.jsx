import React, { useEffect, useRef, useCallback } from 'react';
import { useInView, animate } from 'motion/react';
import { parseStatValue } from '../utils/formatters';

/**
 * MachineCounter Component
 * High-Performance Counter utilizing direct DOM updates to eliminate React reconciliation
 * overhead on mobile devices, ensuring silky-smooth 60/120 FPS mechanical deceleration.
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
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });

  const parsed = parseStatValue(value);
  const { targetNumber, decimals, prefix, suffix } = parsed;

  const formatValue = useCallback((num) => {
    return decimals > 0
      ? num.toFixed(decimals)
      : Math.floor(num).toLocaleString('id-ID');
  }, [decimals]);

  useEffect(() => {
    if (!numberRef.current) return;

    // On mobile devices or reduced motion, display the target number directly to keep main thread 100% free for instant LCP & 0 TBT
    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (isMobile) {
      numberRef.current.textContent = formatValue(targetNumber);
      return;
    }

    if (!isInView) return;

    // Set initial text
    numberRef.current.textContent = formatValue(0);

    // Animate from 0 to targetNumber using direct textContent mutation (0 React re-renders) on desktop
    const controls = animate(0, targetNumber, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (numberRef.current) {
          numberRef.current.textContent = formatValue(latest);
        }
      },
      onComplete() {
        if (numberRef.current) {
          numberRef.current.textContent = formatValue(targetNumber);
        }
      }
    });

    return () => controls.stop();
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
