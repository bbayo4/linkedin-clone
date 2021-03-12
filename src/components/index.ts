
import PageLogin from './Login';
import PageSignup from './SignUp';
import Dashboard from './Dashboard';
import HomePage from './Home';
import ProfilePage from './Profile';

export const publicNavs = [
  {
    key: "home",
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    key: "login",
    path: "/login",
    component: PageLogin,
    exact: true
  },
  {
    key: "signup",
    path: "/signup",
    component: PageSignup,
    exact: true
  }
];

export const privateNavs = [
  {
    key: "feed",
    path: "/feed",
    component: Dashboard,
    exact: true
  },
  {
    key: "profile",
    path: "/profile",
    component: ProfilePage, // sub routing is handled in that component
    exact: false // important, PageSettings is just a new Router switch container
  }
];