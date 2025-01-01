import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink("/"),
    },
    {
      text: 'Our Story',
      href: getPermalink("#our-story"),
    },
    {
      text: 'Products',
      href: getPermalink("#products"),
    },
    {
      text: 'Contact Us',
      href: getPermalink("#form"),
    },
  ],
};

export const footerData = {
  links: [   
    {
      title: 'Company',
      links: [
        { text: 'Our Story', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Contact Us', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],

};
