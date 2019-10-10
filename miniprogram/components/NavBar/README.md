NavBar props
--------------------- 
| 参数| 	类型| 	描述	| 默认值| 
| --------   | :-----  | :---- |:----: |
|navShow|	boolean|	是否显示自定义导航栏|	true|
|hasSearch|	boolean|	是否显示搜索框|false|
|navBackShow|	boolean|	是否显示返回按钮|true|
|search|	object|	搜索框的部分样式自定义 width:宽度,height:高度,left:距离左侧宽度,placeholder:默认文本 |	search:{width:'444rpx',height:'64rpx',left: '10%',placeholder:'搜索'}|
|title|	string|	标题名字|	空|
|titleAlign|	string|	标题对齐方式'center','left'|'center'|
|bg|	object|	可以传图片url,大小size或者背景色color|	{url:'',size:'',color: '#fff'}|
|inputFlag|	boolean|	是否开启input监听|	true|
|blurFlag|	boolean|	是否开启input失焦监听|	true|
|bind:input|	event|	输入触发事件,返回文本值|	|
|bind:blur|	event|	失去焦点触发事件,返回文本值|	|
|bind:clear|	event|	点击清除按钮触发事件|	|

####说明补充
1.组件内部自动判断当前路由是否有路由栈,当路由栈数量大于2的时候自动显示返回按钮,你也可以强制设置navBackShow为false关掉这个判断

2.组件背景色color可以传rgb,rgba,16进制,不能传英文单词,例如red
导航栏会自动根据传入背景色的深浅自动切换黑色还是白色,不传默认是白色,也就是说标题和返回按钮都是黑色

