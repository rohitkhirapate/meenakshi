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
      title: 'Home',
      links:[
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
  ]}
  ],
  secondaryLinks: [
    { text: 'Gat no 174, Ganesh Nagar Rd, Near Talawade, Maharashtra 412114' },
  ],

};
