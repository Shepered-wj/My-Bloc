(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{574:function(t,a,e){"use strict";e.r(a);var s=e(3),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("昨天中午写了篇博文"),e("a",{attrs:{href:"https://juejin.cn/post/6959403986495471647",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用VuePress快速搭建个人博客"),e("OutboundLink")],1),t._v("，其中扩展提到留言板的功能,所以这算是续集了,下图是昨天立的flag")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6eca26f742814641bbabc2ac25209ae6~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n那今天趁着中午午休就给安排上。")]),t._v(" "),e("h3",{attrs:{id:"留言板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#留言板"}},[t._v("#")]),t._v(" 留言板")]),t._v(" "),e("h4",{attrs:{id:"增加留言板tab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加留言板tab"}},[t._v("#")]),t._v(" 增加留言板tab")]),t._v(" "),e("p",[t._v("在config.js配置中的nav里增加一个link配置项")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  { \"text\": '留言板', \"link\": '/blogs/views/messageBoard.html', \"icon\": 'reco-suggestion' }\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("实现效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/480085dd1a4c453b94e55d2ab1e24157~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n这时候是有增加这个留言板模块，但是没有对应功能，所以请往下看。")]),t._v(" "),e("h4",{attrs:{id:"reco主题关于留言板的实现-这部分可跳过-也可点击查看详情"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reco主题关于留言板的实现-这部分可跳过-也可点击查看详情"}},[t._v("#")]),t._v(" reco主题关于留言板的实现(这部分可跳过，也可点击查看详情)")]),t._v(" "),e("details",[e("summary",[t._v("→点击查看详情←")]),t._v(" "),e("div",[t._v("\n首先选的主题[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)里是有提供这个插件的\n"),e("p",[t._v("主题内置评论插件 "),e("RouterLink",{attrs:{to:"/views/plugins/"}},[t._v("@vuepress-reco/vuepress-plugin-comments")]),t._v("，可以根据自己的喜好选择 "),e("code",[t._v("Valine")]),t._v(" 或者 "),e("code",[t._v("Vssue")]),t._v("；")],1),t._v(" "),e("p",[t._v("如果你想默认不加载评论，而只在某些页面显示评论功能，可以在 "),e("code",[t._v("valineConfig")]),t._v(" 或 "),e("code",[t._v("vssueConfig")]),t._v(" 中设置 "),e("code",[t._v("showComment: false")]),t._v("，并在需要展示评论的页面 设置 "),e("code",[t._v("isShowComments: true")]),t._v("。")]),t._v(" "),e("p",[t._v("如果仅是某篇文章不想设置开启评论功能，可以在 "),e("code",[t._v("front-matter")]),t._v(" 设置 "),e("code",[t._v("isShowComments: false")]),t._v("。")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("浏览量")]),t._v(" 仅在使用 "),e("code",[t._v("Valine")]),t._v(" 时显示；")]),t._v(" "),e("li",[t._v("因为 "),e("strong",[t._v("浏览量")]),t._v(" 需要在页面加载时去调用相关接口，所以列表页的所有数据会一起加载下来，如果文章数量很多会影响加载速度，所以在 "),e("code",[t._v("1.2.0")]),t._v(" 之后去掉文章列表的浏览量。")])]),t._v(" "),e("p",[t._v("其他参数参考 "),e("a",{attrs:{href:"https://valine.js.org/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Valine配置"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2988d66d1ec4677889109b694956166~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})])])]),e("p"),t._v(" "),e("h4",{attrs:{id:"valine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[t._v("#")]),t._v(" Valine")]),t._v(" "),e("p",[t._v("从"),e("a",{attrs:{href:"https://valine.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Valine官网"),e("OutboundLink")],1),t._v("也可以发现")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b74559d8f7a4b988353651f076d31a7~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),e("p",[t._v("所以我们打开"),e("a",{attrs:{href:"https://console.leancloud.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leancloud官网"),e("OutboundLink")],1),t._v("创建应用去获取APP ID 和 APP Key。这里按步骤注册和验证邮箱然后就可以建立自己的应用，可以在设置中查看自己对应的appid和appkey。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b847b5117b064511aabb26ccd5dfb16a~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),e("h4",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("在博客上的config.js增加配置")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    valineConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      appId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your appId")]),t._v("\n      appKey"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your appKey")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[t._v("配置后的效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef215469e5d741d78ddc22ff5de98f4e~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d62af200eb041fe8c45743217ee5dc1~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),e("p",[t._v("可以从上图发现可以留言和回复，而且多了个浏览数。到这就完成了博客留言板的实现，代码已更新上传。")]),t._v(" "),e("h3",{attrs:{id:"持续更新中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续更新中"}},[t._v("#")]),t._v(" 持续更新中...")]),t._v(" "),e("p",[t._v("我理想中的博客我也没底 就是想到什么加什么 只希望它越来越好 后续持续更新内容都将放在本文。下一步应该是朝着美化博客页面去了，增加一些背景和动效，就像"),e("a",{attrs:{href:"https://juejin.cn/post/6959403986495471647",target:"_blank",rel:"noopener noreferrer"}},[t._v("上篇"),e("OutboundLink")],1),t._v("中提到的案例。")]),t._v(" "),e("h3",{attrs:{id:"结束语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),e("p",[t._v("附上博客和模板预览链接")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://8.136.42.145/",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的博客"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://8.136.42.145:88/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客模板预览"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("code",[t._v("然后又是不要脸的求点赞!")])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("求点赞！求点赞！求点赞！")])])])}),[],!1,null,null,null);a.default=r.exports}}]);