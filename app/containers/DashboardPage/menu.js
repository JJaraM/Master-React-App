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
    id: 'exam',
    to: '/dashboard/exam',
    label: 'exam',
    icon: 'fas fa-book-open',
  },
  {
    id: 'webservices',
    to: '/dashboard/webservices',
    label: 'webservices',
    icon: 'fab fa-edge',
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
      {
        id: 'settings.webservices',
        to: '/dashboard/settings/webservices',
        label: 'webservices',
        icon: 'fab fa-edge',
      }
    ],
  },

];
