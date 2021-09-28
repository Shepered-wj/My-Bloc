const sidebar = require('./siderbar.js');
module.exports = {
  "title": "Sppx的博客",
  "description": "Sppx的博客",
  "dest": "public",
  "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.gexing.com%2FGSF%2Ftouxiang%2F20200629%2F06%2F4ymqf8uhhobkd12ccvtphy8tu.jpg%40%21200x200_3%3Frecache%3D20131108&refer=http%3A%2F%2Fp5.gexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635388744&t=049fd385304d103a36d8851460e560d0"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "plugins": ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting", [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang', {
        theme: [
          'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: {
          welcome: '欢迎来到我的博客',
          home: '爱你呦',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '你不喜欢我了吗？痴痴地望着你。'
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", {
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
          // },
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]
      }
    ],
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: 'circle', // shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light',
    "subSidebar": 'auto',
    "valineConfig": {
      "appId": 'aCSipIDPBNQTreNNNr4bT5R4-gzGzoHsz',
      "appKey": 'zuQELzuRINaCxHgIozNrnwKO',
    },
    "nav": [{
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      { "text": '留言板', "link": '/blogs/views/messageBoard.html', "icon": 'reco-suggestion' },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [{
          "text": "GitHub",
          "link": "https://github.com/Shepered-wj",
          "icon": "reco-github"
        }]
      },
    ],
    sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      "tag": {
        "location": 3,
        "text": "标签索引"
      }
    },
    "friendLink": [{
      "title": "vuepress-theme-reco",
      "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      "link": "https://vuepress-theme-reco.recoluan.com"
    }],
    "logo": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.gexing.com%2FGSF%2Ftouxiang%2F20200629%2F06%2F4ymqf8uhhobkd12ccvtphy8tu.jpg%40%21200x200_3%3Frecache%3D20131108&refer=http%3A%2F%2Fp5.gexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635388744&t=049fd385304d103a36d8851460e560d0",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "wj",
    "authorAvatar": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp5.gexing.com%2FGSF%2Ftouxiang%2F20200629%2F06%2F4ymqf8uhhobkd12ccvtphy8tu.jpg%40%21200x200_3%3Frecache%3D20131108&refer=http%3A%2F%2Fp5.gexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635388744&t=049fd385304d103a36d8851460e560d0",
    "record": "首页",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}