// Imports
import Vue from 'vue'
import Router from 'vue-router'
import vuetify from '@/plugins/vuetify'
import kebabCase from 'lodash/kebabCase'

Vue.use(Router)

function layout (path, name, children) {
  const folder = kebabCase(name)

  return {
    path,
    component: () => import(
      /* webpackChunkName: "layout-[request]" */
      `@/layouts/${folder}/Index`
    ),
    children,
  }
}

function redirect (redirect) {
  return { path: '*', redirect }
}

function route (path, name, file) {
  const folder = (file || `${kebabCase(name)}`).toLowerCase()

  return {
    path,
    name,
    component: () => import(
      /* webpackChunkName: "route-[request]" */
      `@/views/${folder}/Index.vue`
    ),
  }
}

const router = new Router({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return vuetify.framework.goTo(scrollTo)
  },
  routes: [
    layout('/', 'App', [
      route('/', 'Home'),
      redirect('/'),
    ]),
    redirect('/'),
  ],
})

export default router
