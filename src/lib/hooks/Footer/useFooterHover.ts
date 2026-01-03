import { useState } from 'react';

export const useFooterHover = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setHoveredSocial(name);
  };

  const handleMouseLeave = () => {
    setHoveredSocial(null);
  };

  return {
    hoveredSocial,
    handleMouseEnter,
    handleMouseLeave,
  };
};