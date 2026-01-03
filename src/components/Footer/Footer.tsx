import React from 'react';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';
import FooterContact from './FooterContact';
import FooterCopyright from './FooterCopyright';
import FooterBackground from './FooterBackground';
import { FooterService } from '../../appData/Footer/footer.service';
import { FOOTER_STYLES } from '../../appData/Footer/footer.constants';

const Footer = () => {
  const contactInfo = FooterService.getContactInfo();
  const links = FooterService.getFooterLinks();
  const socialLinks = FooterService.getSocialLinks();

  return (
    <footer 
      className="relative flex min-h-[560px] flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:p-14"
      style={{ backgroundColor: FOOTER_STYLES.backgroundColor }}
    >
      <FooterBackground />

      {/* Top section */}
      <div className="relative z-20 grid grid-cols-1 items-start gap-20 md:grid-cols-2 md:gap-12">
        <FooterBrand contactInfo={contactInfo} />
        <FooterLinks links={links} />
      </div>

      {/* Bottom section */}
      <div className="relative z-20 flex flex-col-reverse gap-20 md:grid md:grid-cols-2 md:gap-12">
        <div className="grid grid-cols-2 gap-4">
          <FooterSocials socialLinks={socialLinks} />
          <FooterCopyright />
        </div>
        <FooterContact contactInfo={contactInfo} />
      </div>
    </footer>
  );
};

export default Footer;