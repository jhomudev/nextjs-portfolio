import { MY_EMAIL, MY_GITHUB_PROFILE_LINK, MY_LINKEDIN_PROFILE_LINK, MY_PHONE_NUMBER, MY_WHATSAPP_NUMBER } from ".";

export const networks = [
  {
    name: 'Github',
    link: MY_GITHUB_PROFILE_LINK,
    image: '/images/svgs/github.svg',
    isMain: true
  },
  {
    name: 'Linkedin',
    link: MY_LINKEDIN_PROFILE_LINK,
    image: '/images/svgs/linkedin.svg',
    isMain: true
  },
  {
    name: 'Email',
    link: `mailto:${MY_EMAIL}`,
    image: '/images/svgs/gmail.svg',
    isMain: true
  },
  {
    name: 'Whatsapp',
    link: `https://api.whatsapp.com/send?phone=${MY_WHATSAPP_NUMBER}&text=Hola.`,
      // icon: faWhatsapp,
    isMain: false
  },
  {
    name: 'Teléfono',
    link: `tel:${MY_PHONE_NUMBER}`,
      // icon: faPhone,
    isMain: false
  }
]