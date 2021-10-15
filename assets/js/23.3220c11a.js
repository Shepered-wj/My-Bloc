(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{553:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("掘金团队号上线，助你 Offer 临门！ 点击 "),s("a",{attrs:{href:"https://juejin.cn/offer",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看详情"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("第一次参加掘金打卡活动，别的不说 主要是奔着奖励来的。4.12开始为了达到14题小目标 冲冲冲！！！这是第8题。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/733d8d8d4b2a4210af53062d7e0bea68~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),s("h3",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("题目链接："),s("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/",target:"_blank",rel:"noopener noreferrer"}},[t._v("删除有序数组中的重复项"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("题目描述我用截图leetcode的为主，所以题目如下图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0af058c05788457285064921e7abc4a8~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),s("h3",{attrs:{id:"思路分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),s("p",[t._v("题目解析：一开始我在想这里就是一个简单数组去重 不是很快嘛")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1af16b539060459f83ba4c89c87012a3~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n提交发现错误了\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/936317c74fc44d85898b90ed499a8f55~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n看来要重新审题了")]),t._v(" "),s("p",[t._v("1.给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。\n看见这句话 有没有熟悉的感觉js的splice")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0ccdba8897b4c72af9a19a8bc6090b7~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n2.nums 已按升序排列 说明不是乱序的")]),t._v(" "),s("p",[t._v("那就用最简单的遍历数组 然后用splice去删除重复项目")]),t._v(" "),s("p",[t._v("试一下：\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96ff1b50bf94480b81ba14166f7f2d66~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),t._v("\n成功通过了")]),t._v(" "),s("h3",{attrs:{id:"ac-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[t._v("#")]),t._v(" AC 代码")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n * @param {number[]} nums\n * @return {number}\n */\nvar removeDuplicates = function(nums) {\n  if(nums.length===0){\n      return 0\n   }\n   for(let i = 0; i < nums.length; i++) {\n        if(nums[i] === nums[i+1]) {\n            nums.splice(i, 1)\n            i = i - 1\n        }\n    }\n    return nums.length\n};\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("坚持就是胜利。第8题算法完成，坚持就是胜利！！！")]),t._v(" "),s("p",[t._v("       ↓↓↓")]),t._v(" "),s("p",[t._v("→  "),s("a",{attrs:{href:"https://juejin.cn/post/6950903770834272292/",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法系列链接"),s("OutboundLink")],1),t._v(" ←")]),t._v(" "),s("p",[t._v("       ↑↑↑")]),t._v(" "),s("p",[t._v("这里可以点！这里可以点！这里可以点！")])])}),[],!1,null,null,null);a.default=n.exports}}]);