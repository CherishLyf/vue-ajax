export default function(router) {
  router.map({
    '/': {
      name: 'index',
      component: function index(resolve) {
        require(['./components/MainContainer.vue'], resolve);
      },
    },
    'project': {
      component: function index(resolve) {
        require(['./components/MainContainer.vue'], resolve);
      },
      subRoutes: {
        '/home': {
          name: 'home',
          component: function index(resolve) {
            require(['./views/home.vue'], resolve);
          }
        }
      }
    }
  });
  router.redirect({
    '/': '/project/home'
  });

  router.afterEach(function ({from, to}) {
    setTimeout(()=> {
      hljs.initHighlighting();
    })
  });

}
