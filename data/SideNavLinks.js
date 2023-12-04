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
    path: '/list-your-property',
  },
  {
    name: 'My trips',
    path: '/my-trips',
  },
]

export const NavLinksProfile = {
  name: 'Profile',
  path: '',
  pathList: [
    {
      name: 'My Bookings',
      path: '/my-bookings',
    },
    {
      name: 'My Profile',
      path: '/My-Profile',
    },
    {
      name: 'Bookmarks',
      path: '/Bookmarks',
    },
    {
      name: 'My Properties',
      path: '/My-Properties',
    },
    {
      name: 'Logout',
      path: '/My-Properties',
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
