import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: 'pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  {
    title: 'Dashboard',
    icon: 'book-open',
    children: [
      {
        title: 'Vehicles Overview',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Real Time Data',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Events',
        link: '/pages/layout/stepper',
      },
    ],
  },
  {
    title: 'Vehicles',
    icon: 'car',
    children: [
      {
        title: 'Fleet',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Vehicles Assignment',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Vehicle Details',
        link: '/pages/forms/buttons',
      },
    ],
  },
  {
    title: 'Trips',
    icon: 'map',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Overview',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Upcoming Trip',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Schedule Trip',
        link: '/pages/ui-features/typography',
      },
    ],
  },
  {
    title: 'Maintenance',
    icon: 'settings-2',
    children: [
      {
        title: 'Maintenance Planner',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'History',
        link: '/pages/modal-overlays/window',
      },
    ],
  },
  {
    title: 'Analytics',
    icon: 'pie-chart',
  },

  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
