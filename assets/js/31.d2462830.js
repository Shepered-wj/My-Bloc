(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{559:function(s,n,a){"use strict";a.r(n);var t=a(3),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("hr"),s._v(" "),a("h2",{attrs:{id:"theme-channing-cyan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-channing-cyan"}},[s._v("#")]),s._v(" theme: channing-cyan")]),s._v(" "),a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("以前在自己博客写过，这里简单重新复习一下并加点拓展。\n"),a("br"),s._v(" "),a("i",[s._v("之前粗略版：https://www.cnblogs.com/wangxiaoer5200/p/11981063.html")]),s._v(" "),a("br"),s._v("\ncall、apply、bind的作用是改变函数运行时this的指向，this永远指向最后调用它的这个对象。关于this这里就不多说了，现在开始康康"),a("code",[s._v("call/apply/bind")])]),s._v(" "),a("h3",{attrs:{id:"相似点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相似点"}},[s._v("#")]),s._v(" 相似点")]),s._v(" "),a("ul",[a("li",[s._v("都是用来改变函数的this对象的指向的。")]),s._v(" "),a("li",[s._v("第一个参数都是this要指向的对象。")]),s._v(" "),a("li",[s._v("都可以利用后续参数传参。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var xw = {  name : "小王",gender : "男" age : 24, say : function() {console.log(this.name + " , " + this.gender + " ,今年" + this.age); }\n\n  var xh = {  name : "小黄" ,gender : "女", age : 18 }\n\n调用xw.say(); //这个简单 打印出：小王，男，今年24\n\n那么如何用xw的say方法来显示xh的数据呢。这时候就可以用到call、apply、bind\n\nxw.say.call(xh);  //这时打印的就是：  小黄，女，今年18\n\nxw.say.apply(xh); //打印的 小黄，女，今年18\n\nxw.say.bind(xh)(); //打印的  小黄，女，今年18\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[s._v("#")]),s._v(" 区别")]),s._v(" "),a("ul",[a("li",[s._v("这里call和apply的区别主要在于带参的形式，可以记住apply是以array数组形式调用，和call是...arg形式，bind和call一样；")]),s._v(" "),a("li",[s._v("使用时bind比call和apply调用多了(),所以bind返回函数需要自己再执行调用一次，而bind和call都是对函数的直接调用\n"),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30e2f90f2b4e49108f1d36378faf03ae~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})])]),s._v(" "),a("h3",{attrs:{id:"自己使用js简单实现这个三个方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自己使用js简单实现这个三个方法"}},[s._v("#")]),s._v(" 自己使用js简单实现这个三个方法")]),s._v(" "),a("p",[s._v("call实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Function.prototype.mycall = function(obj,...arg){\n  const fn = Symbol('test')\n  obj[fn] = this\n  obj[fn](...arg)\n  delete obj[fn]\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("apply实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Function.prototype.myapply=function(obj,arg){\n    const fn = Symbol('test')\n    obj[fn] = this\n    obj[fn](...arg)\n    delete obj[fn]\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("bind实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Function.prototype.myBind = function(obj,...args){\n   const Fn = this\n   let fBind = function(...args2){\n   const isNew = this instanceof fBind\n   const context = isNew?this:Object(obj)\n   return Fn.call(context,...args,...args2)\n  }\n   fBind.prototype = Object.create(Fn.prototype)\n   return fBind\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("然后声明后试试\n"),a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4c5dac433f24599b1533679d3d6c117~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),a("p",[s._v("perfect! 一个人如果没有梦想，跟无忧无虑有什么区别呢？")])])}),[],!1,null,null,null);n.default=e.exports}}]);