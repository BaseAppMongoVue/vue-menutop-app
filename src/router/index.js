import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import { index as auth } from './routes-modules/auth';
import { index as accounts } from './routes-modules/accounts';
import { index as settings } from './routes-modules/settings';
import { index as home } from './routes-modules/home';

export default new Router({
  mode: 'history',
  routes: [
    ...auth,
    ...accounts,
    ...settings,
    ...home,
  ]
})
