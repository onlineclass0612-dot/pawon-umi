import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * Reusable, fully-accessible FormInput component
 * Adheres to WCAG 2.1 AA form accessibility standards (labels, aria-invalid, aria-describedby, error alert).
 */
export default function FormInput({
  id,
  name,
  label,
  type = 'text',
  icon: Icon,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  helperText,
  required = false,
  maxLength,
  min,
  max,
  disabled = false,
  className = ''
}) {
  const errorId = error ? `${id}-error` : undefined;
  const helperId = helperText && !error ? `${id}-helper` : undefined;
  const describedBy = errorId || helperId;

  return (
    <div className={`w-full min-w-0 ${className}`}>
      {label && (
        <label htmlFor={id} className="label-md text-[#2C2521] block mb-2 cursor-pointer">
          {label} {required && <span className="text-[#775A19] font-bold" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon 
            className="w-4 h-4 text-[#7F7667] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" 
            aria-hidden="true" 
          />
        )}

        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          min={min}
          max={max}
          disabled={disabled}
          aria-required={required ? 'true' : undefined}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={describedBy}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 rounded-[0.25rem] bg-white border body-sm text-sm transition-colors ${
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
              : 'border-[#E8DFD1] focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059]'
          }`}
        />
      </div>

      {error ? (
        <p
          id={errorId}
          role="alert"
          aria-live="polite"
          className="text-red-600 text-xs mt-1.5 flex items-center gap-1.5 font-medium"
        >
          <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-[11px] text-[#7F7667] mt-1">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
