import React from 'react';
import { getCurrentYear } from '../../lib/utils/Footer/footer.utils';
import { FOOTER_STYLES } from '../../appData/Footer/footer.constants';

const FooterCopyright = () => {
  const currentYear = getCurrentYear();
  
  return (
    <p 
      className="flex flex-col self-end text-right text-xs md:text-center"
      style={{ color: FOOTER_STYLES.tertiaryColor }}
    >
      <span>© {currentYear} — Copyright</span>
      <span>All Rights reserved</span>
    </p>
  );
};

export default FooterCopyright;