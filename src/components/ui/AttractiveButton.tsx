// components/AttractiveButton.tsx
import React from 'react';

interface AttractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'pulse' | 'shine' | 'both';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const AttractiveButton: React.FC<AttractiveButtonProps> = ({
  children,
  onClick,
  variant = 'both',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Base classes
  const baseClasses = `
    relative
    font-semibold
    rounded-xl
    border-2
    border-white
    text-white
    transition-all
    duration-300
    transform
    hover:scale-105
    active:scale-95
    focus:outline-none
    focus:ring-4
    focus:ring-white/50
    overflow-hidden
    group
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  // Gradient background
  const gradientClasses = `
    bg-gradient-to-r
    from-blue-500
    via-purple-500
    to-pink-500
    bg-size-200
    bg-pos-0
    hover:bg-pos-100
  `;

  // Pulse animation classes
  const pulseClasses = variant.includes('pulse') || variant === 'both' ? `
    animate-pulse
    hover:animate-none
  ` : '';

  // Shine effect
  const shineEffect = variant.includes('shine') || variant === 'both' ? `
    before:absolute
    before:inset-0
    before:bg-gradient-to-r
    before:from-transparent
    before:via-white/30
    before:to-transparent
    before:translate-x-[-100%]
    hover:before:translate-x-[100%]
    before:transition-transform
    before:duration-1000
    before:ease-in-out
  ` : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${gradientClasses}
        ${pulseClasses}
        ${shineEffect}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {/* Shine overlay */}
      {variant.includes('shine') || variant === 'both' ? (
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      ) : (
        children
      )}
      
      {/* Optional: Add a subtle glow */}
      <span className="absolute inset-0 rounded-xl bg-white/10 blur-md group-hover:bg-white/20 transition-colors duration-300 -z-10" />
    </button>
  );
};

// Alternative version with more intense effects
export const GlowButton: React.FC<AttractiveButtonProps> = ({
  children,
  onClick,
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        ${sizeClasses[size]}
        font-bold
        rounded-xl
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-600
        text-white
        border-2
        border-white/20
        transition-all
        duration-500
        transform
        hover:scale-110
        hover:shadow-2xl
        active:scale-95
        group
        overflow-hidden
        animate-pulse
        hover:animate-none
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 -z-10" />
    </button>
  );
};

export default AttractiveButton;