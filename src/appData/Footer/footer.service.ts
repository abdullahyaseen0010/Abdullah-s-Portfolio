import { footerLinks, socialLinks, contactInfo } from './footer.data';
import { FooterLink, SocialLink, ContactInfo } from './footer.types';

export class FooterService {
  static getFooterLinks(): FooterLink[] {
    return footerLinks;
  }

  static getSocialLinks(): SocialLink[] {
    return socialLinks;
  }

  static getContactInfo(): ContactInfo {
    return contactInfo;
  }

  static getLinkByTitle(title: string): FooterLink | undefined {
    return footerLinks.find(link => link.title.toLowerCase() === title.toLowerCase());
  }

  static getSocialByName(name: string): SocialLink | undefined {
    return socialLinks.find(social => social.name.toLowerCase() === name.toLowerCase());
  }
}
