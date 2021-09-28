(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{544:function(n,a,e){"use strict";e.r(a);var t=e(3),r=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("strong",[n._v("掘金团队号上线，助你 Offer 临门！ 点击 "),e("a",{attrs:{href:"https://juejin.cn/offer",target:"_blank",rel:"noopener noreferrer"}},[n._v("查看详情"),e("OutboundLink")],1)])]),n._v(" "),e("h3",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),e("p",[n._v("第一次参加掘金打卡活动，别的不说 主要是奔着奖励来的。4.12开始为了达到14题小目标 冲冲冲！！！这是第12题。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/733d8d8d4b2a4210af53062d7e0bea68~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),e("h3",{attrs:{id:"题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[n._v("#")]),n._v(" 题目描述")]),n._v(" "),e("p",[n._v("题目链接："),e("a",{attrs:{href:"https://leetcode-cn.com/problems/median-of-two-sorted-arrays/",target:"_blank",rel:"noopener noreferrer"}},[n._v("寻找两个正序数组的中位数"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("题目描述我用截图leetcode的为主，所以题目如下图")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/544df9b51b0b4e71938b588d79e2f7c4~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),e("h3",{attrs:{id:"思路分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[n._v("#")]),n._v(" 思路分析")]),n._v(" "),e("p",[n._v("一看见题目我的想法是合并两个数组然后重新排序，得到一个合并后的正序数组，然后写个方法可以求得正序数组的中位数，依题长度为1直接返回 长度大于2的话分"),e("code",[n._v("奇数/偶数")]),n._v("两种情况")]),n._v(" "),e("ul",[e("li",[n._v("奇数：返回最中间的数(下标为Math.floor(lenth/2))")]),n._v(" "),e("li",[n._v("偶数：返回最中间两位数之和的平均数(下标分别是length/2-1和length/2)\n理清思路直接开撸：")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94aeab0b9ac94ccfa02b7784089995d7~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),e("p",[n._v("虽然依照这个思路是可行的但是用时长消耗空间大。\n想了一会儿，一时也没想到好的优化方法，所以去看了一下别人思路参考一下：\n看见下面这个求第K小数的解法的思路真的是秒。"),e("a",{attrs:{href:"https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-2/",target:"_blank",rel:"noopener noreferrer"}},[n._v("第K"),e("OutboundLink")],1),n._v(" "),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/083474a814d44092be50d8af8681d381~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),n._v(" "),e("h3",{attrs:{id:"ac-代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ac-代码"}},[n._v("#")]),n._v(" AC 代码")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function(nums1, nums2) {\n    // 先写一个非空正序数组求中位数的方法\n    var getMid=(arr)=>{\n        if(arr.length===1){\n            return arr[0]\n        }\n        if(arr.length%2===0){\n            let index=arr.length/2\n            return (arr[index-1]+arr[index])/2\n        }else{\n            let index=Math.floor(arr.length/2)\n            return arr[index]\n        }\n    }\n    let newArr=[...nums1,...nums2]\n    newArr.sort((a,b)=>{\n        return a-b\n    })\n    return getMid(newArr)\n};\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br")])]),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),e("p",[n._v("坚持就是胜利。第12题算法完成，坚持就是胜利！！！")]),n._v(" "),e("p",[n._v("       ↓↓↓")]),n._v(" "),e("p",[n._v("→  "),e("a",{attrs:{href:"https://juejin.cn/post/6950903770834272292/",target:"_blank",rel:"noopener noreferrer"}},[n._v("算法系列链接"),e("OutboundLink")],1),n._v(" ←")]),n._v(" "),e("p",[n._v("       ↑↑↑")]),n._v(" "),e("p",[n._v("这里可以点！这里可以点！这里可以点！")])])}),[],!1,null,null,null);a.default=r.exports}}]);