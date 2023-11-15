// navigation list for small screen
export const SideNavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "List your property",
    path: "/list-your-property",
  },
  {
    name: "My trips",
    path: "/my-trips",
  },
  {
    name: "Profile",
    path: "",
    pathList: [
      {
        name: "My Bookings",
        path: "/my-bookings",
      },
      {
        name: "My Profile",
        path: "/My-Profile",
      },
      {
        name: "Bookmarks",
        path: "/Bookmarks",
      },
      {
        name: "My Properties",
        path: "/My-Properties",
      },
      {
        name: "Logout",
        path: "/My-Properties",
      },
    ],
  },
  {
    name: "Language",
    path: "",
    pathList: [
      {
        name: "English",
        path: "",
        icon: "",
      },
      {
        name: "Chinese",
        path: "",
        icon: "",
      },
      {
        name: "German",
        path: "",
        icon: "",
      },
      {
        name: "Spanish",
        path: "",
        icon: "",
      },
    ],
  },
];
