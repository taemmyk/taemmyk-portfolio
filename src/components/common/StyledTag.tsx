import React from 'react';
import { MoveRight } from "lucide-react";

interface StyledTagProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  hasBgAnimation?: boolean;
  url?: string;
}

const StyledTag: React.FC<StyledTagProps> = ({
  children,
  onClick,
  className,
  showArrow = false,
  hasBgAnimation = true,
  url,
}) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative overflow-hidden transition-all duration-300 group w-fit px-4 py-2 bg-secondary rounded-md border border-background flex items-center gap-x-2 whitespace-nowrap ${className}`}
      >
        {hasBgAnimation && (
          <div className="absolute inset-0 bg-muted z-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
        )}
        {showArrow && <MoveRight className="relative z-5" />}
        <span className="relative z-5 font-semibold">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden transition-all duration-300 group w-fit px-4 py-2 bg-secondary rounded-md border border-background flex items-center gap-x-2 whitespace-nowrap ${className}`}
    >
      {hasBgAnimation && (
        <div className="absolute inset-0 bg-muted z-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
      )}
      {showArrow && <MoveRight className="relative z-5" />}
      <span className="relative z-5 font-semibold">{children}</span>
    </button>
  );
};

export default StyledTag;