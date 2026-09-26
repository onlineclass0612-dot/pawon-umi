import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';
import { parseStatValue } from '../utils/formatters';

/**
 * MachineCounter Component
 * Animates counting from 0 up to target number with mechanical machine deceleration curve.
 */
export default function MachineCounter({
  value,
  duration = 2.2,
  delay = 0,
  className = "",
  suffixClassName = "text-[#C5A059] font-sans font-medium text-2xl md:text-3xl ml-0.5 select-none"
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const parsed = parseStatValue(value);
  const { targetNumber, decimals, prefix, suffix } = parsed;

  const [currentNum, setCurrentNum] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let hasCompleted = false;

    // Animate from 0 to targetNumber with mechanical deceleration
    const controls = animate(0, targetNumber, {
      duration,
      delay,
      // Precision mechanical curve: starts with momentum, settles deliberately into final slot
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (!hasCompleted) {
          setCurrentNum(latest);
        }
      },
      onComplete() {
        hasCompleted = true;
        setCurrentNum(targetNumber);
        setIsCompleted(true);
      }
    });

    return () => controls.stop();
  }, [isInView, targetNumber, duration, delay]);

  // Format number with proper locale
  const formattedNumber = decimals > 0
    ? currentNum.toFixed(decimals)
    : Math.floor(currentNum).toLocaleString('id-ID');

  return (
    <span
      ref={ref}
      className={`inline-flex items-baseline justify-center tabular-nums transition-transform duration-500 ${
        isCompleted ? 'scale-100' : 'scale-[0.98]'
      } ${className}`}
    >
      {prefix && <span>{prefix}</span>}
      <span className="font-serif tracking-tight">{formattedNumber}</span>
      {suffix && (
        <span className={suffixClassName}>
          {suffix}
        </span>
      )}
    </span>
  );
}
