import React from 'react';

const TestimonialBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.03) 1px, transparent 0)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default TestimonialBackground;