const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/aseril/Documents/kevin-dev/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/aseril/Documents/kevin-dev/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/aseril/Documents/kevin-dev/src/templates/Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/aseril/Documents/kevin-dev/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    path: "/:title/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
