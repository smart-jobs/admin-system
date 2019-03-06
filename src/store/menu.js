const items = [
  {
    title: '系统管理',
    path: '/system',
    icon: 'system',
    module: 'system',
    children: [
      {
        title: '用户管理',
        path: '/user',
        icon: 'account',
      },
      {
        title: '部门管理',
        path: '/dept',
        icon: 'dept',
      },
      {
        title: '标签用户',
        path: '/tag',
        icon: 'tag',
      },
      {
        title: '单位管理',
        path: '/unit',
        icon: 'corp',
        platform: 'master',
      },
      {
        title: '字典管理',
        path: '/dict',
        icon: 'dict',
        platform: 'master',
      },
      // {
      //   title: '操作日志',
      //   path: '/log',
      //   icon: 'log',
      // },
    ],
  },
  {
    title: '信息发布',
    path: '/cms',
    icon: 'news',
    module: 'cms',
    children: [
      {
        title: '通知公告',
        path: '/cms/notice',
        icon: 'column',
      },
      {
        title: '政策法规',
        path: '/cms/policy',
        icon: 'column',
      },
      {
        title: '新闻栏目',
        path: '/cms/news',
        icon: 'column',
      },
    ],
  },
];

const MapMenu = (catalog = []) => item => ({
  title: item.title,
  options: {
    icon: item.icon,
    path: item.path,
    url: item.url,
    target: item.target,
    tooltip: item.tooltip,
    module: item.module,
    platform: item.platform,
    roles: item.roels,
    tags: item.tags,
    meta: { catalog: catalog.concat(item.title) },
  },
  children: (item.children || []).map(MapMenu(catalog.concat(item.title))),
});

// initial state
export const state = () => ({
  items: items.map(MapMenu()),
});
