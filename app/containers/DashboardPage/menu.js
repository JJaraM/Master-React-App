export default [
  {
    id: 'codeSnippetApp',
    to: '/dashboard/codeSnippetApp',
    label: 'codeSnippet',
    icon: 'fab fa-free-code-camp',
  },
  {
    id: 'codeSnippet',
    to: '/dashboard/codeSnippet',
    label: 'codeSnippet',
    icon: 'fas fa-code',
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
