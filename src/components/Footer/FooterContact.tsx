'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { ContactInfo } from '../../appData/Footer/footer.types';
import { createMailtoLink, createTelLink } from '../../lib/utils/Footer/footer.utils';
import { FOOTER_ANIMATION_VARIANTS, FOOTER_STYLES } from '../../appData/Footer/footer.constants';

interface FooterContactProps {
  contactInfo: ContactInfo;
}

const FooterContact = ({ contactInfo }: FooterContactProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-10 md:self-end"
    >
      {/* Contact */}
      <div className="flex flex-col">
        <h5 
          className="mb-4 text-lg font-medium flex items-center gap-2"
          style={{ color: FOOTER_STYLES.neutralColor }}
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </h5>
        <motion.a
          href={createMailtoLink(contactInfo.email)}
          whileHover={FOOTER_ANIMATION_VARIANTS.hover}
          className="text-sm font-light transition-colors duration-300 flex items-center gap-2"
          style={{ color: FOOTER_STYLES.tertiaryColor }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = FOOTER_STYLES.neutralColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = FOOTER_STYLES.tertiaryColor;
          }}
        >
          <ExternalLink className="w-3 h-3" />
          {contactInfo.email}
        </motion.a>
        <motion.a
          href={createTelLink(contactInfo.phone)}
          whileHover={FOOTER_ANIMATION_VARIANTS.hover}
          className="text-sm font-light transition-colors duration-300 flex items-center gap-2 mt-1"
          style={{ color: FOOTER_STYLES.tertiaryColor }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = FOOTER_STYLES.neutralColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = FOOTER_STYLES.tertiaryColor;
          }}
        >
          <Phone className="w-3 h-3" />
          {contactInfo.phoneDisplay}
        </motion.a>
      </div>

      {/* Location */}
      <div>
        <h5 
          className="mb-4 text-lg font-medium flex items-center gap-2"
          style={{ color: FOOTER_STYLES.neutralColor }}
        >
          <MapPin className="w-5 h-5" />
          Location
        </h5>
        <address 
          className="flex flex-col text-sm font-light not-italic"
          style={{ color: FOOTER_STYLES.tertiaryColor }}
        >
          <span>{contactInfo.location.city}, {contactInfo.location.state}</span>
          <span>{contactInfo.location.country}</span>
        </address>
      </div>
    </motion.div>
  );
};

export default FooterContact;