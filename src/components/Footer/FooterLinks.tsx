'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FooterLink } from '../../appData/Footer/footer.types';
import { FOOTER_ANIMATION_VARIANTS, FOOTER_STYLES } from '../../appData/Footer/footer.constants';

interface FooterLinksProps {
  links: FooterLink[];
}

const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-wrap gap-8"
    >
      {links.map((link, index) => (
        <motion.a
          key={link.href}
          href={link.href}
          {...FOOTER_ANIMATION_VARIANTS.staggered(0.05 * index)}
          whileHover={FOOTER_ANIMATION_VARIANTS.hover}
          className="transition-colors duration-300 hover:underline"
          style={{ color: FOOTER_STYLES.tertiaryColor }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = FOOTER_STYLES.neutralColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = FOOTER_STYLES.tertiaryColor;
          }}
        >
          {link.title}.
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FooterLinks;