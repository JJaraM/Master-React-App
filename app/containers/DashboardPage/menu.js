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
    id: 'settings',
    to: '?',
    label: 'settings',
    icon: 'fas fa-cogs',
    subMenu: [
      {
        id: 'settings.themes',
        to: '/dashboard/settings/themes',
        label: 'themes',
        icon: 'fas fa-palette',
      },
    ],
  },
];
