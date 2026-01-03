'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { ContactInfo } from '../../appData/Footer/footer.types';
import { FOOTER_ANIMATION_VARIANTS, FOOTER_STYLES } from '../../appData/Footer/footer.constants';

interface FooterBrandProps {
  contactInfo: ContactInfo;
}

const FooterBrand = ({ contactInfo }: FooterBrandProps) => {
  return (
    <motion.div {...FOOTER_ANIMATION_VARIANTS.container}>
      <h5 className="mb-8 flex items-center gap-3">
        <motion.div
          {...FOOTER_ANIMATION_VARIANTS.rotate}
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${FOOTER_STYLES.gradientStart}, ${FOOTER_STYLES.gradientEnd})`
          }}
        >
          <Code2 className="w-5 h-5 text-white" />
        </motion.div>
        <span 
          className="text-lg font-semibold"
          style={{ color: FOOTER_STYLES.neutralColor }}
        >
          {contactInfo.name}
        </span>
      </h5>
      <p 
        className="leading-relaxed"
        style={{ color: FOOTER_STYLES.tertiaryColor }}
      >
        {contactInfo.description}
      </p>
      <motion.a
        href="#home"
        whileHover={FOOTER_ANIMATION_VARIANTS.hover}
        className="mt-4 inline-flex items-center gap-2 text-xs hover:underline"
        style={{ color: FOOTER_STYLES.neutralColor }}
      >
        More about me 
        <span 
          className="inline-block h-[10px] w-[10px] rounded-full"
          style={{ backgroundColor: FOOTER_STYLES.neutralColor }}
        />
      </motion.a>
    </motion.div>
  );
};

export default FooterBrand;