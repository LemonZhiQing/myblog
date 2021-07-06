module.exports = {
  "title": "lemon",
  "description": "追番是最快乐的事情",
  "dest": "public",
  "base": "/blog/",
  "locales": {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    // 百度统计
    ["script", { src: "/assets/js/jquery-1.11.3.min.js" }],
    ["script", { src: "/assets/js/bodyClick.js" }],
    ["script", {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?1dd6a922ba031e44241e70062c507bda";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'dark',
    "noFoundPageByTencent": true,
    "valineConfig": {
      appId: 'e6ojaBbYmQvJLNWeBouhonP6-gzGzoHsz',// your appId
      appKey: '050ScrJoJUW37QqwVwzSmKoX', // your appKey
    },
    "nav": [
      {
        "text": "我的主页",
        "link": "/",
        "icon": "reco-home",
      },
      {
        text: "项目",
        icon: 'iconfont icon-tools',
        items: [
          { text: '暂时未放上来', link: '/', icon: "" },
        ]
      },
      {
        "text": "时间轴",
        "link": '/timeline/',
        "icon": "reco-date",
        "href": "http://zpzpup.com/assets/image/home.svg"
      },
      {
        "text": "分类",
        "icon": "",
        "href": "http://zpzpup.com/assets/image/home.svg",
        "items": [
          {
            "text": "七杂八杂",
            "link": "/docs/jottings/mobile"
          },
          {
            "text": "Vue3.0",
            "link": "/docs/Vue/ref"
          },
          {
            "text": "吃吃吃",
            "link": "/docs/delicacys/无油捞汁粉丝"
          }
        ]
      },
      { text: "留言板", link: "/docs/others/message", icon: "reco-message" },
      {
        "text": "联系我吧",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "/",
            "icon": "reco-github",
            "href": "http://zpzpup.com/assets/image/home.svg"
          }
        ]
      }
    ],

    // subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // sidebar: "auto",//所有页面自动生成侧边栏
    // author: "lemon",

    "sidebar": {
      "/docs/jottings/": [
        "mobile",
        "Git",
        "HarmonyOS",
        "DOM",
        "BOM",
        "particles",
        // "genealogy",
        "carousel",
        "whirligig",
        "filter",
        "scrollTemp",
        "reset",
        "Nginx",
        "accordion",
        "loading",
        "shadow",
        "flexbox"
      ],
      "/docs/Vue/": [
        {
          "title": "Vue3.0",
          "collapsable": false,
          "children": [
              'ref',
              'asyncComponent',
              'attribute',
              'directive',
              'v-is',
              'Data',
              'event',
              'filters',
              'template',
              'funComponent',
              'API',
              'renderFun',
              'slot',
              'animationClass',
              'v-model',
              'v-if&v-for',
              'v-bind'
          ]
        }
      ]
    },
    "type": "blog",
    "blogConfig": {
      "tag": {
        "location": 3,
        "text": "普通的标签"
      }
    },
    "friendLink": [
      // {
      //   "title": "饭团也有春天",
      //   "desc": "没有梦想，也能远方",
      //   "email": "690996726@qq.com",
      //   "link": "www.zpzpup.com/blog"
      // },
      {
        title: '欢迎各位入驻哦',
        desc: '你来了，世界便亮了',
        logo: "https://xiaolan35.gitee.io/medias/logo.gif",
        link: '/'
      },
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "lemon",
    "authorAvatar": "/avatar.png",
    "record": "暂无",//备案号
    "startYear": "2019" // 项目开始时间
    
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        '@assets': '/assets'
      }
    }
  },
  "markdown": {
    "lineNumbers": true //代码显示行号
  },
  "plugins": [
    require("./packages/copy/index.js"),

    // 首页女神图
    ["sakura", {
      num: 30,  // 默认数量
      show: true,
      zIndex: 2,
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png'     // 绝对路径
      }
    }],

    // 彩带
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: 1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],

    
    // 播放器
    [
      'meting', {
        meting: {
          auto:'http://music.163.com/#/song?id=28018269'
        },
        aplayer: {
        lrcType: 3, // 显示歌词
        autoplay: true, //自动播放
        // {url:'http://music.163.com/#/song?id=536622304'},
        // {url:'http://music.163.com/#/song?id=512376195'}
        }
      }
    ],
    // 点击爆炸的彩带效果
    ["cursor-effects",{
      size: 3,                    // size of the particle, default: 2
      shape: ['circle'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    }],
    ['go-top'],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)",
        hideIcon: "/favicon.ico",
        hideText: "别走呀",
        recoverTime: 2000
      }
    ],
    // 看板娘插件
    //  ['z16', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto',
    //   'koharu', 'izumi', 'shizuku', 'wanko', 'miku'],
    [
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 1 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}
