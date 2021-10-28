// router.ts
import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw,
} from 'vue-router';

import useFirebase from '../composables/useFirebase';

const { user } = useFirebase();

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../screens/Routines.vue'),
    meta: { logInRequired: true },
  },
  {
    path: '/add',
    component: () => import('../screens/AddRoutine.vue'),
    meta: { logInRequired: true },
  },
  {
    path: '/:routineId',
    component: () => import('../screens/Todos.vue'),
    meta: { logInRequired: true },
  },
  {
    path: '/:routineId/add',
    component: () => import('../screens/AddTodo.vue'),
    meta: { logInRequired: true },
  },
  {
    path: '/login',
    component: () => import('../screens/Login.vue'),
    meta: { logInRequired: false },
  },
  {
    path: '/register',
    component: () => import('../screens/Register.vue'),
    meta: { logInRequired: false },
  },
  // ...
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

// const userIsAllowed = false;

// Route guard
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    // Check a property that you added to the route meta
    if (to.meta.logInRequired && to.meta.logInRequired == true) {
      // If user is allowed
      if (user.value) {
        next();
        // Else redirect to error or path, etc.
      } else {
        next('/login');
      }
    } else {
      next('/login');
    }
  }
);

export default router;
