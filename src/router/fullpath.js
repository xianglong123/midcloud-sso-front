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
    }, {
      path: 'pending',
      name: 'Redis工单审核',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }, {
      path: 'order',
      name: 'Redis工单查询',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }, {
      path: 'instance',
      name: 'Redis实例列表',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }, {
      path: 'hostList',
      name: 'Redis主机管理',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }, {
      path: 'hostGroupList',
      name: 'Redis主机组管理',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }, {
      path: 'system',
      name: 'Redis系统管理',
      meta: {
      },
      component: (resolve) => require(['../views/redirect.vue'], resolve)
    }]
  }, {
    path: '/mysql',
    name: 'mysql服务',
    meta: {
      icon: '&#xe62e;'
    },
    component: Abstract,
    children: [{
      path: 'login',
      name: 'mysql服务跳转',
      meta: {
      },
      component: (resolve) => require(['../views/mysql-parent.vue'], resolve)
    }]
  }]
}];
