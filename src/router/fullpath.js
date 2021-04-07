import Abstract from '../views/common/abstract.vue';

export default [{
  path: '/',
  name: '首页',
  component: (resolve) => require(['../views/index.vue'], resolve),
  children: [{
    path: '/rabbitmq',
    name: 'rabbitmq服务',
    meta: {
      icon: '&#xe62e;'
    },
    component: Abstract,
    children: [{
      path: 'apply',
      name: 'MQ工单申请',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }, {
      path: 'instance',
      name: 'MQ实例列表',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }, {
      path: 'order',
      name: 'MQ工单列表',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }, {
      path: 'manager',
      name: 'MQ系统管理',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }]
  }, {
    path: '/redis',
    name: 'redis服务',
    meta: {
      icon: '&#xe62e;'
    },
    component: Abstract,
    children: [{
      path: 'apply',
      name: 'Redis工单申请',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }]
  }]
}];
