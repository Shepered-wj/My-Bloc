### 其它

##### break：终止整个程序，当前条件满足，停止执行程序，下面的条件满足也不执行

##### continue：终止当前程序，当前条件满足，停止执行程序，下面的条件满足，继续执行

### 鼠标事件种类

##### .onclick：单击事件

##### .ondblclick：双击事件

##### .onmouseover：鼠标经过事件

##### .onmouseout：鼠标离开事件

##### .onmouseenter：鼠标经过事件

##### .onmouseleave：鼠标离开事件

##### .onmousedown：鼠标按下事件

##### .onmouseup：鼠标松开事件

##### .oncontextmenu：右键事件

### 测试语句

##### alert()：是js自带的弹出框

##### console.log()：在控制台打印

##### prompt()：是js自带的对话框，带一个确定和取消按钮

#####  document.write()：在网页上打印

### 标签内容获取

##### 标签.value：单标签内容获取设置

##### 标签.innerHTML：双标签内容获取设置，识别标签

##### 标签.innerText：双标签内容获取设置，不识别标签

### 获取元素

##### document.getElementById('ID名')：通过id获取元素

##### document.getElementsByClassName(’类名‘)：通过class获取

##### document.getElementsByTagName(’标签‘)：获取文档里所有的这个标签

##### document.querySelector(’标签‘)：获取文档里第一个这个标签

##### document.querySelectorAll(’标签‘)：获取文档里所有的这个标签

### 改变class

##### className = '新类名' ：设置class属性名

### 修改样式

##### 标签.style.样式名='样式值' ：修改行间样式

##### 标签.style.cssText = '样式名: 样式值;'：修改行间样式，可写多个样式

### 简单的数据类型

##### number：数值

##### String：字符串

##### boolean：布尔

##### undefined：没有值

##### null：空值

### 复杂的数据类型

##### Object()：对象

##### function()()：函数

##### Array()：数组

### 检测数据类型

##### typeof 变量名：检测数据类型

##### typeof (变量名)：检测数据类型

##### (变量名) instanceof  函数：检测对象是否是自己创建的

### 数值类型转换

##### Number()：获取‘纯数字的’，如果遇到其他不能转换、停止转换，也不会返回之前转换完成的数据

##### parseInt()：获取整数，如果遇到不能转换，就停止，返回之前转换完成的

##### parseFloat()：获取整数和浮点数，如果遇到不能转换，就停止，返回之前转换完成的

### 字符串类型转换

##### 转换的数据.toString()：把其他类型转换成字符串

##### String(转换的数据)：把其他类型转换成字符串

### 布尔类型转换

##### Boolean(转换的数据)：把其他类型转换成布尔类型，0、空、null、NaN、undefined、false这六种为假，其他都为真

### 算法运算符

##### （+）加、（-）减、（*）乘、（/）除、（%）除于

### 自增和自减运算符

##### （++）自增、（--）自减

### 赋值运算符

##### （=）等于、（+=）加等于、（-=）减等于、（*=）乘等于、（/=）除等于

### 比较运算符

##### （>）大于、（<）小于、（>=）大于等于、（<=）小于等于、（==）双等于、（===）全等于、（!=）不等于、（!==）不全等于

### 逻辑运算符

##### （&&）与、（||）或、（!）非/不是

### 三目(元)运算符

##### 条件 ？ 成立返回的值 : 不成立返回的值

### 返回值

##### return 需要返回的代码块：返回值，可以终止代码块

### 延迟定时器

##### setTimeout ( 函数 { 动作代码块 } , 时间);：时间是以毫秒为单位

##### clearTimeout(定时器名称)：清除定时器要给定时器附加个名称

### 间隔定时器

##### setInterval( 函数 { 动作代码块 } , 时间);：时间是以毫秒为单位

##### clearInterval(定时器名称)：清除定时器要给定时器附加个名称

### 时间函数

##### Date()：获取计算机本地时间（）括号内可以设置时间，非字符串的方式月份要减1

##### getFullYear()：年

##### getMonth()：月，1-12月（0~11）

##### getDate()：天

##### getHours()：时

##### getMinutes()：分

##### getSeconds()：秒

##### toLocaleString()：计算机本地时间的年月日+上下午+时分秒

##### toLocaleDateString()：计算机本地时间的年月日

##### toLocaleTimeString()：计算机本地时间的上下午+时分秒

##### getTime()：时间戳(1970年1月1号凌晨开始)到现在的毫秒数

### 字符串的使用方式

##### 字符串.charCodeAt(下标)：通过下标返回ASCII编码

##### 字符串.indexOf(查找的字符,起始位置)：字符串查找，从前往后一次查找，第二个参数可以不用填

##### 字符串.lastIndexOf(查找的字符，起始位置)：字符串查找，从后往前一次查找第二个参数可以不用填

##### 字符串.substring(开始位置,结束位置)：截取字符串，包括开始不包括结束

##### 字符串.slic(开始位置,结束位置)：截取字符串，包括开始不包括结束

##### 字符串.substr(开始位置,结束个数)：截取字符串

##### 字符串.trim()：字符串去左右空格

##### 字符串.replace(被替换的字符，替换的字符)：字符串的替换

##### 字符串.split()：把字符串切割成数组

### 数组的使用方式

##### 数组.join()：把数组切割成字符串

##### 数组.push(参数)：添加数组，在原先的数组后面添加

##### 数组.pop()：删除数组，数组末尾删除一个元素，没有参数

##### 数组.unshift(参数)：添加数组，在原先的数组前面添加

##### 数组.shift()：删除数组，数组末尾删除一个元素，没有参数

##### 数组.splice(起始位置,0,添加的项目)：第二个参数必须是0，不然会变成替换

##### 数组.splice(起始位置,删除的各数)：删除数组，包含起始位置

##### 数组.splice(起始位置,替换的位置,添加的项数)：替换数组

##### 数组.join(分隔标志)：给数组之前添加标志

##### 数组.concat(数组)：合并数组，不会改变原来的数组

##### 数组.reverse()：反转数组

##### 数组.indexOf(查找的数组,起始位置)：数组查找，从前往后一次查找，第二个参数可以不用填

##### 数组.lastIndexOf(查找的数组,起始位置)：数组查找，从后往前一次查找，第二个参数可以不用填

##### 数组.slice()：截取数组，截取起始位置到结束位置的数组,不包含结束位置，不会改变原来的数组

##### Array.isArray(数组)：判单是不是数组

### 取数字方式

##### Math.floor(数字)：浮点数向下(小)取整

##### Math.ceil(数字)：浮点数向上(大)取整

##### Math.round(数字)：四舍五入

##### Math.max(数字, 数字)：数字里取最大值

##### Math.min(数字,数字)：数字里取最小值

##### Math.pow(数字, 数字)：开平方

##### Math.random()：随机数

### 排序

##### 数组.sprt(数组)：数组排序，从小到大，只能排单数

##### 数组.sort(function(a,b){return a-b})：数组排序，如果是a-b小到大排序，b-a大到小排序

##### .localeCompare：拿到中文汉字拼音的第一个字母

### 节点

##### 元素.nodeType：节点类型，如果是元素返回1，属性返回2，文本返回3

##### 元素.nodeName：节点名称，返回节点名称都是大写的

##### 元素.nodeValue：节点属性

##### 元素:parentNode：通过子节点获取父节点

##### 元素.children：标准浏览器，通过父元素获取子元素，通过下标的方式可以获取单个

##### 元素.childNodes：非标准浏览器，通过父元素获取子元素，通过下标的方式可以获取单个

##### 元素:firstElementChild：标准浏览器，获取第一个节点

##### 元素:firstChild：非标准浏览器，获取第一个节点

##### 元素.lastElementChildren：标准浏览器，获取最后一个节点

##### 元素.lastChildren：非标准浏览器，获取最后一个节点

##### 变量名 = document.createElement('标签名')：创建一格元素节点

##### 父元素.appendChild(创建标签的变量名)：添加节点

##### 父元素.insertBefore(需要植入的新元素,插入的节点)：插入节点

##### 父元素.removeChild(被删除的元素)：删除节点

##### 父元素.replaceChild(新节点,替换的节点)：替换节点

##### 父元素.cloneNode()：克隆节点，没有参数是浅拷贝，只拷贝标签，有参数是深拷贝，拷贝标签和内容

##### 元素.getAttribute("属性名")：获取节点非原有属性

##### 元素.setAttribute("属性名",'属性值')：设置节点非原有属性

##### 元素.removeAttribute("属性名")：删除节点非原有属性

### window系列

##### window.onload = function(){}：在页面的所有资源（dom,css,图片）全部加载完成后，在加载这个对象内的代码，每个页面之能含有一个onload 

##### window.addEventListener(事件名称, 执行函数){}：监听事件，当页面的DOM加载完成之后，就可以加载js、不含图片、css等，注意：事件名称不能带'on'

##### window.onresize = function(){}：用来监听浏览器窗口的大小，可以随着浏览器窗口的大小，执行不同的结果

##### window.inner高或宽：用来监听窗口高或宽的

##### window.open(url, 是否在新窗口打开，窗口的设置)：打开窗口，可以只设置url文档路径

##### window.close()：关闭窗口

### location系列

##### location.href：获取完成的url地址  跳转界面  重点

##### location.search：重点  接收数据

##### location.host：返回服务器名称和端口号（如果有）

##### location.port‘：返回服务器端口号

##### location.pathname：返回文件路径

##### location.hostname：返回不带端口号的服务器名称

##### location.search：返回 ？ 后面的数据

##### location.hash：返回或返回从#开始的url部分

### history模拟浏览器系列

##### history.forward()：往前一个页面

##### history.back()：往后退一个页面

##### history.go(1)：往前一个页面，推荐使用

##### history.go(-1)：往后退一个页面，推荐是哟

### offset系列

##### 元素.offsetLeft：=父级左内边距+左边框+左外边距+自身左外边距组成

##### 元素.offsetTop：=父级上内边距+上边框+上外边距+自身上外边距组成

##### 元素.offsetWidth：=自身的内容+内边框+边框组成

##### 元素.offsetHeight：=自身的内容+内边框+边框组成

### scroll系列：滚动事件，谷歌认为这个对象是body，其他浏览器认为这个对象是html。所以要写兼容

##### document.documentElement.scrollLeft || document.body.scrollLeft ：监视滚动条左边距离

##### document.documentElement.scrollTop || document.body.scrollTop：监视滚动条上边距离

##### scrollWidth

##### scrollHeight

### client系列

##### 元素.clientLeft：获取元素的边框，上下左右都可以，第二个单词要大写

##### 元素.clientWidth：获取元素的边框

### 表单

##### 标签.onsubmit = function () { }：提交按钮

##### 标签.onreset = function () { }：重置按钮

##### 标签.onfocus = function* () {}：聚焦

##### 标签.onblur = function* () {}：失焦

### 事件监听—现在版

##### 语法：元素.addEventListener(事件名称,函数，false)：标准浏览器，监听事件，false有两个值，布尔值true和false，默认是false

##### 元素.attachEvent(事件名称,函数)：非标准浏览器，监听事件，注意：没有第三个函数，这个事件名称是需要加on

##### 元素.removeEventListener(事件名称,函数,false)：标准浏览器，解绑事件，在不需要事件的时候，设定程序取消事件

##### 元素.detachEvent(事件名称,函数)：非标准浏览器，解绑事件，这个事件名称是需要加on

#####  var e = e || window.event：获取触发事件对象信息

### 鼠键相关对象

##### .type：事件类型

##### .pageX：点击位置到文档左边的水平方向坐标值

##### .pageY：点击位置到文档左边的垂直方向坐标值

##### .screenX：点击位置到屏幕左边的水平方向坐标值

##### .screenY：点击位置到屏幕左边的垂直方向坐标值

##### .clientX：点击位置到内视区域左边的水平方向坐标值

##### .clientY：点击位置到内视区域左边的垂直方向坐标值

##### target：标准浏览器、发生事件的目标元素

##### srcElemert：非标准浏览器、发生事件的目标元素

##### target.nodeName：发生事件的目标元素，返回的是大写的

### 取消冒泡，元素默认行为

##### 事件对象.stopPropagation()：标准浏览器，取消冒泡

##### 事件对象.cancelBubble(true)：非标准浏览器，取消冒泡

##### e.preventDefault()：标准浏览器，取消默认行为

#####  e.returnValue = false：非标准浏览器，取消默认行为

### 键盘事件种类

##### onkeydown：键盘按下事件，可以监听功能键

##### onkeyup：键盘松下事件，可以监听功能键

##### onkeypress：键盘按下事件，不可以监听功能键

##### key：获取键名，那个键发生事件获取对应的名称

##### keyCode：获取键值，那个键发生事件获取对应的ASCII对应的数字

### 拖拽事件

##### onmousedown：按下事件

##### onmousemove：移动事件

##### onmouseup：抬起事件

### 取消浏览器默认行为

##### return false：标准浏览器

##### if (box.seleaseCptur) {box.seleaseCptur()}：非标准浏览器undefinedswitch

