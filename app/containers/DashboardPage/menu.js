export default [
  {
    id: 'dashboard',
    to: '/dashboard',
    label: 'home',
    icon: 'fas fa-home',
  },
  {
    id: 'codeSnippet',
    to: '/dashboard/codeSnippet',
    label: 'codeSnippet',
    icon: 'fas fa-home',
  },
  {
    id: 'ui',
    to: '/ui',
    label: 'ui',
    icon: 'fas fa-bookmark',
  },
  {
    id: 'settings',
    to: '?',
    label: 'settings',
    icon: 'fas fa-cogs',
    subMenu: [
      {
        id: 'settings.themes',
        to: '/dashboard/settings/themes',
        label: 'themes',
        icon: 'fas fa-cogs',
      },
      {
        id: 'settings.users',
        to: '/dashboard/settings/users',
        label: 'users',
        icon: 'fas fa-cogs',
      },
    ],
  },
];
