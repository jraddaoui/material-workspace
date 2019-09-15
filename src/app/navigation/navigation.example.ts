export const NAVIGATION = [
  {
    label: 'Navigation item 1',
    icon: 'new_releases',
    route: '.',
  },
  {
    label: 'Navigation parent A',
    icon: 'report_problem',
    children: [
      {
        label: 'Navigation item A.1',
        route: '.',
      },
      {
        label: 'Navigation item A.2',
        route: '.',
      },
    ],
  },
  {
    label: 'Navigation item 2',
    icon: 'assignment_late',
    route: '.',
  },
  {
    label: 'Navigation item 3',
    icon: 'report',
    route: '.',
  },
  {
    label: 'Navigation parent B',
    icon: 'feedback',
    children: [
      {
        label: 'Navigation item B.1',
        route: '.',
      },
      {
        label: 'Navigation item B.2',
        route: '.',
      },
    ],
  },
];
