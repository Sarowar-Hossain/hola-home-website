import englishLogo from 'public/LanguageIcons/english.png'
import chineseLogo from 'public/LanguageIcons/chinese.png'
import germanLogo from 'public/LanguageIcons/german.png'
import spanishLogo from 'public/LanguageIcons/spanish.png'

export const SideNavLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'List your property',
    path: '/profile/list-your-property',
  },
  {
    name: 'My trips',
    path: '/profile/my-trips',
  },
]

export const NavLinksProfile = {
  name: 'Profile',
  path: '',
  pathList: [
    {
      name: 'My Bookings',
      path: '/profile/bookings',
    },
    {
      name: 'My Profile',
      path: '/profile',
    },
    {
      name: 'Bookmarks',
      path: '/profile/bookmarks',
    },
    {
      name: 'My Properties',
      path: '/profile/My-Properties',
    },
  ],
}
export const NavLinksHelp = {
  name: 'Help',
  path: '',
  pathList: [
    {
      name: 'Contact Us',
      path: '/contact-us',
    },
    {
      name: 'Report a bug',
      path: '/report-bug',
    },
  ],
}
export const NavLinksLanguage = {
  name: 'Languages',
  path: '',
  pathList: [
    {
      name: 'English',
      path: '',
      icon: englishLogo,
    },
    {
      name: 'Chinese',
      path: '',
      icon: chineseLogo,
    },
    {
      name: 'German',
      path: '',
      icon: germanLogo,
    },
    {
      name: 'Spanish',
      path: '',
      icon: spanishLogo,
    },
  ],
}
