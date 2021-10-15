(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{552:function(e,t,a){"use strict";a.r(t);var r=a(3),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("strong",[e._v("掘金团队号上线，助你 Offer 临门！ 点击 "),a("a",{attrs:{href:"https://juejin.cn/offer",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看详情"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("第一次参加掘金打卡活动，别的不说 主要是奔着奖励来的。4.12开始为了达到14题小目标 冲冲冲！！！这是第四题")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/733d8d8d4b2a4210af53062d7e0bea68~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),a("p",[e._v("题目链接："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-integer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("整数反转"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("题目描述我用截图leetcode的为主，所以题目如下图")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4afde3a17d594182aa7a2a924c49905b~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("h3",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[e._v("#")]),e._v(" 思路分析")]),e._v(" "),a("p",[e._v("依照题目可以知道，求一个整数然后把数字类似来个reverse的操作，我想把他分为正整数和负整数去考虑，直接把整数变成字符串然后切割成数组，再用数组的reverse()方法去得到反转数组，然后再使用join()方法去得到对应的数字，最后去判断这个数字是否超出范围 如果超出范围则返回0,也就是")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e247e772d63486792eb12217036a2a5~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c267c66a2754467d85e14fe46b8ce0f7~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("p",[e._v("这道题只要知道几个常用的js就可以实现 当然看运行结果就知道还有更好的 这时候就需要我们去，我也是自己实现的基础上去看一下别人的题解，就会发现别人的才是厉害，所以如果自己做完没想到其它解法可以看看别人怎么解 或者碰到不会的时候看看别人解题思路 然后自己实现一遍")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/970bfa753fb34b089a63ca08e0db96b8~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),e._v(" "),a("h3",{attrs:{id:"ac-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[e._v("#")]),e._v(" AC 代码")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar reverse = function(x) {\nif(x>0){\n    let newNum = parseInt(Array.from(x.toString()).reverse().join(''))\n    if(newNum>Math.pow(2,31)-1){return 0}else{\n      return newNum\n    }\n }else{\n    let newNum = -parseInt(Array.from(Math.abs(x).toString()).reverse().join(''))\n    if(newNum< -Math.pow(2,31)){return 0}else{\n      return newNum\n    }\n  }\n};\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br")])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("多动手，多思考。第四题算法完成，坚持就是胜利！！！")]),e._v(" "),a("p",[e._v("       ↓↓↓")]),e._v(" "),a("p",[e._v("→  "),a("a",{attrs:{href:"https://juejin.cn/post/6950903770834272292/",target:"_blank",rel:"noopener noreferrer"}},[e._v("算法系列链接"),a("OutboundLink")],1),e._v(" ←")]),e._v(" "),a("p",[e._v("       ↑↑↑")]),e._v(" "),a("p",[e._v("这里可以点！这里可以点！这里可以点！")])])}),[],!1,null,null,null);t.default=s.exports}}]);