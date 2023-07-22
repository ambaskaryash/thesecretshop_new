import type { IconName } from '@components/ui/custom-icon';

type ContactInfo = {
  href: string;
  style: string;
  title: string;
  iconName: IconName;
};

export const contactInfos: Readonly<ContactInfo[]> = [
  {
    href: 'https://goo.gl/maps/PxD3wGwbXDKQP5ML9',
    style: 'hover:bg-red-400 focus-visible:bg-red-400',
    title: 'Location',
    iconName: 'MapPinIcon'
  },
  {
    href: 'mailto:admin@example.com',
    style: 'hover:bg-blue-400 focus-visible:bg-blue-400',
    title: 'Email',
    iconName: 'AtIcon'
  },
  {
    href: 'tel:+919284280275',
    style: 'hover:bg-green-400 focus-visible:bg-green-400',
    title: 'Phone',
    iconName: 'PhoneIcon'
  },
  {
    href: 'https://www.instagram.com/thesecretshopnagpur/',
    style: 'hover:bg-rose-400 focus-visible:bg-rose-400',
    title: 'Instagram',
    iconName: 'InstagramIcon'
  },
  {
    href: 'https://wa.me/9284280275',
    style: 'hover:bg-green-400 focus-visible:bg-green-400',
    title: 'WhatsApp',
    iconName: 'WhatsAppIcon'
  },
  // {
  //   href: 'https://www.facebook.com/thesecretshopnagpur',
  //   style: 'hover:bg-green-400 focus-visible:bg-green-400',
  //   title: 'Facebook',
  //   iconName: 'FacebookIcon'
  // }
];
