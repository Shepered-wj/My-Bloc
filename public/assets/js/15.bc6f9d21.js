(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{548:function(n,a,t){"use strict";t.r(a);var s=t(3),e=Object(s.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("strong",[n._v("掘金团队号上线，助你 Offer 临门！ 点击 "),t("a",{attrs:{href:"https://juejin.cn/offer",target:"_blank",rel:"noopener noreferrer"}},[n._v("查看详情"),t("OutboundLink")],1)])]),n._v(" "),t("h3",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),t("p",[n._v("第一次参加掘金打卡活动，别的不说 主要是奔着奖励来的。4.12开始为了达到14题小目标 冲冲冲！！！这是第13题。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/733d8d8d4b2a4210af53062d7e0bea68~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),t("h3",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[n._v("#")]),n._v(" 题目描述")]),n._v(" "),t("p",[n._v("题目链接："),t("a",{attrs:{href:"https://leetcode-cn.com/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"}},[n._v("最大子序和"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("题目描述我用截图leetcode的为主，所以题目如下图")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab163a81d7784b0bb1896b7df3756a90~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),t("h3",{attrs:{id:"思路分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[n._v("#")]),n._v(" 思路分析")]),n._v(" "),t("p",[n._v("这道题题末提示"),t("code",[n._v("尝试使用更为精妙的 分治法 求解")]),n._v("说明采用分治法是不错的解题思路，顺手搜了一下分治法的概念：")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30c53d8f783f4037b9e8b8e20dcb492f~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),t("p",[n._v("看完好的，还是没有很好的解题思路。那就按自己比较笨的方法实现吧。\n思路：因为是连续数组组成的和，那我可以先遍历得到一组以自己本身为起点的最大值(从下标0开始到结束,最后一个可以直接输出本身),然后再求出这个数组的最大值，思路很容易理解 至于会不会超时要验证一下。")]),n._v(" "),t("p",[n._v("写完检查一下感觉逻辑没问题 点击提交 一直在loading我还以为会超时，好的最后还是成功了 但是这个耗时和内存消耗不敢恭维，确实是最差的方法了")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9666045bbb48448c8fde791cdec63848~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),n._v("\n那思路不变的情况下去优化看看，最后是存进一个数组然后再去取值这里太浪费内存，所以改成一个数，然后每次取到total去对比并记录max值，运行如下：")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd6d1f68525b46c7b7511017bd06869e~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),n._v("\n可以发现内存消耗上提升了很多，现在的问题是优化时间了，现在时间复杂度是O(n²),我需要思考思考。")]),n._v(" "),t("h3",{attrs:{id:"ac-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[n._v("#")]),n._v(" AC 代码")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/**\n * @param {number[]} nums\n * @return {number}\n */\n // 1\nvar maxSubArray = function(nums) {\n    if(nums.length===1){\n        return nums[0]\n    }\n    let maxArr = []\n    for(let i=0;i<nums.length;i++){\n        let total=nums[i]\n        let total2 = 0\n        for(let j = i;j<nums.length;j++){\n            total2+=nums[j]\n            if(total<total2){\n                total=total2\n            }\n        }\n        maxArr.push(total)\n    }\n    return Math.max(...maxArr)\n};\n\n// 2\nvar maxSubArray = function(nums) {\n    if(nums.length===1){\n        return nums[0]\n    }\n    let max = nums[0]\n    for(let i=0;i<nums.length;i++){\n        let total=nums[i]\n        let total2 = 0\n        for(let j = i;j<nums.length;j++){\n            total2+=nums[j]\n            if(total<total2){\n                total=total2\n            }\n        }\n        if(total>max){\n            max=total\n        }\n    }\n    return max\n};\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br")])]),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),t("p",[n._v("坚持就是胜利。第13题算法完成，坚持就是胜利！！！")]),n._v(" "),t("p",[n._v("       ↓↓↓")]),n._v(" "),t("p",[n._v("→  "),t("a",{attrs:{href:"https://juejin.cn/post/6950903770834272292/",target:"_blank",rel:"noopener noreferrer"}},[n._v("算法系列链接"),t("OutboundLink")],1),n._v(" ←")]),n._v(" "),t("p",[n._v("       ↑↑↑")]),n._v(" "),t("p",[n._v("这里可以点！这里可以点！这里可以点！")])])}),[],!1,null,null,null);a.default=e.exports}}]);