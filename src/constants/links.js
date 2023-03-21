const UNMATCHED_ROUTE = '/*';
const APP_FC_ROUTE = '/func/*';
const APP_CC_ROUTE = '/class/*';
const HOME_FC_ROUTE = '/func/home';
const HOME_CC_ROUTE = '/class/home';
const SETTINGS = 'settings';
const HOME_ROUTE = '/home';
const routesLink = [
  { path: HOME_FC_ROUTE, title: 'HomeFC' },
  { path: HOME_CC_ROUTE, title: 'HomeCC' },
  { path: SETTINGS, title: 'Settings' },
];
export default routesLink;
export {
  APP_CC_ROUTE,
  APP_FC_ROUTE,
  HOME_CC_ROUTE,
  HOME_FC_ROUTE,
  HOME_ROUTE,
  SETTINGS,
  UNMATCHED_ROUTE,
};
