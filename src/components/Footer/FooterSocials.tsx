'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '../../appData/Footer/footer.types';
import { useFooterHover } from '../../lib/hooks/Footer/useFooterHover';
import { FOOTER_ANIMATION_VARIANTS, FOOTER_STYLES } from '../../appData/Footer/footer.constants';

interface FooterSocialsProps {
  socialLinks: SocialLink[];
}

const FooterSocials = ({ socialLinks }: FooterSocialsProps) => {
  const { hoveredSocial, handleMouseEnter, handleMouseLeave } = useFooterHover();

  const getIcon = (name: string) => {
    switch (name) {
      case 'LinkedIn':
        return Linkedin;
      case 'Email':
        return Mail;
      default:
        return Mail;
    }
  };

  return (
    <ul className="flex flex-col gap-4">
      {socialLinks.map((social, index) => {
        const Icon = getIcon(social.name);
        const isHovered = hoveredSocial === social.name;
        
        return (
          <motion.li 
            key={index}
            {...FOOTER_ANIMATION_VARIANTS.staggered(0.1 * index)}
          >
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={FOOTER_ANIMATION_VARIANTS.hover}
              onHoverStart={() => handleMouseEnter(social.name)}
              onHoverEnd={handleMouseLeave}
              className="flex items-center gap-2 transition-all duration-300"
              style={{ 
                color: isHovered ? social.color : FOOTER_STYLES.neutralColor
              }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{social.name}</span>
            </motion.a>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default FooterSocials;