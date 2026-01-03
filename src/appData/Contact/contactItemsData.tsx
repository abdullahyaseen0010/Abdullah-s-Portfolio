// app/data/contactItemsData.tsx

import { Mail } from 'lucide-react';
import { PhoneIcon, LocationIcon } from '../../components/Contact/contactIcons';
import { ContactItem } from './contactTypes';
import { contactConfig } from './contactData';

export const getContactItems = (): ContactItem[] => [
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    label: 'Email',
    value: contactConfig.email,
    href: `mailto:${contactConfig.email}`,
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: contactConfig.phone.display,
    href: contactConfig.phone.href,
  },
  {
    icon: <LocationIcon />,
    label: 'Location',
    value: contactConfig.location.full,
    href: null,
  },
];