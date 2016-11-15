# jQuery

<ol>
	<li>jQuery基础
		<ul>
			<li>效果
				<ul>
					<li>隐藏/显示</li>
					<li>淡入淡出</li>
					<li>滑动</li>
					<li>动画</li>
					<li>stop()</li>
					<li>Callback</li>
					<li>Chaining</li>
				</ul>
			</li>
			<li>HTML
				<ul>
					<li>获取</li>
					<li>设置</li>
					<li>添加</li>
					<li>删除</li>
					<li>CSS 类</li>
					<li>css()</li>
					<li>尺寸</li>
				</ul>
			</li>
			<li>遍历
				<ul>
					<li>遍历</li>
					<li>祖先</li>
					<li>后代</li>
					<li>同胞</li>
					<li>过滤</li>
				</ul>
			</li>
			<li>AJAX
				<ul>
					<li>AJAX 简介</li>
					<li>加载</li>
					<li>Get/Post</li>
				</ul>
			</li>
			<li>杂项
				<ul>
					<li>jQuery 和其他 JavaScript 框架</li>
				</ul>
			</li>
		</ul>
	</li>
</ol>


参考手册
- http://www.w3school.com.cn/jquery/jquery_reference.asp
- jQuery 文档操作
 - http://www.w3school.com.cn/jquery/jquery_ref_manipulation.asp
- jQuery 属性操作
 - http://www.w3school.com.cn/jquery/jquery_ref_attributes.asp
- jQuery CSS 操作
 - http://www.w3school.com.cn/jquery/jquery_ref_css.asp

## jQuery基础
### 效果
隐藏、显示、切换，滑动，淡入淡出，以及动画
- slow，fast，normal或毫秒

#### 隐藏、显示、切换
- hide()
- show()
- toggle()
```
$("#hide").click(function(){
  $("p").hide(3000); //渐渐消失，slow，fast，normal或毫秒
});
```

#### 淡入淡出
- fadeIn()
- fadeOut()
- fadeToggle()
- fadeTo()  ， 渐变为给定的不透明度（值介于 0 与 1 之间）
```
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```
```
$("button").click(function(){
  $("#div1").fadeTo("slow",0.15);
  $("#div2").fadeTo("slow",0.4);
  $("#div3").fadeTo("slow",0.7);
});
```

#### 滑动
- slideDown()
- slideUp()
- slideToggle()
```
$("#flip").click(function(){
  $("#panel").slideDown();
});
```

#### 动画
**提示**：
- 默认地，所有 HTML 元素都有一个静态位置，且无法移动。
如需**对位置进行操作，要记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute！**
- 可以用 animate() 方法来操作所有 CSS 属性吗？
是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 **Camel 标记法**书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
```
$("button").click(function(){
  $("div").animate({
      left:'50px',
      height:'+=10px',
      width:'+=10px'
  });
});
```
使用队列功能
```
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```

#### 停止动画
- stop()
```
$("#stop").click(function(){
  $("#panel").stop();
});
```

#### Callback
- 防止动画之后的语句可能会产生错误或页面冲突
```
$("p").hide(1000,function(){
alert("The paragraph is now hidden");
});
```
错误示范：
```
$("p").hide(1000);
alert("The paragraph is now hidden");
```

#### Chaining

```
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```

----------

### HTML
#### 获取内容
- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值
- attr() - 设置/改变属性值
```
$("#btn1").click(function(){
  alert("Text: " + $("#test").text());
});
```

```
$("button").click(function(){
  $("#w3s").attr({
    "href" : "http://www.w3school.com.cn/jquery",
    "title" : "W3School jQuery Tutorial"
  });
});
```

#### 添加元素
- append() - 在被选元素的结尾插入内容
- prepend() - 在被选元素的开头插入内容
- after() - 在被选元素之后插入内容
- before() - 在被选元素之前插入内容
```
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
```

#### 删除元素
- remove() - 删除被选元素（及其子元素）
 - jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。
- empty() - 从被选元素中删除子元素
```
$("p").remove(".italic");
```

#### CSS类
- addClass() - 向被选元素添加一个或多个类
- removeClass() - 从被选元素删除一个或多个类
- toggleClass() - 对被选元素进行添加/删除类的切换操作
- css() - 设置或返回样式属性

```
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});

```

```
$("button").click(function(){
  $("#div1").addClass("important blue");
});
```

#### css()
设置或返回被选元素的一个或多个样式属性。
- 返回**首个**匹配元素的 background-color 值
```
$("p").css("background-color");
```

- 为所有匹配元素设置 background-color 值
```
$("p").css("background-color","yellow");
```
- 设置多个 CSS 属性
```
$("p").css({
"background-color":"yellow",
"font-size":"200%"
});
```

#### 尺寸
- width()
 - 设置或返回元素的宽度（不包括内边距、边框或外边距）
- height()
 - 设置或返回元素的高度（不包括内边距、边框或外边距）
- innerWidth()
 - 返回元素的宽度（包括内边距）
- innerHeight()
 - 返回元素的高度（包括内边距）
- outerWidth()
 - 返回元素的宽度（包括内边距和边框）
- outerHeight()
 - 返回元素的宽度（包括内边距和边框）

```
$("button").click(function(){
  var txt="";
  txt+="Width: " + $("#div1").width() + "</br>";
  txt+="Height: " + $("#div1").height();
  $("#div1").html(txt);
});
```

----------

### 遍历
#### 祖先
- parent()
- parents()
- parentsUntil()
```
$(document).ready(function(){
  $("span").parent();
});
```

#### 后代
- children()
- find()
 - 返回被选元素的后代元素，**一路向下直到最后一个后代**。

```
$(document).ready(function(){
  $("div")
.children("p.1")     // <p> class="1"
.css({"color":"red",
"border":"2px solid red"});
});
```

```
$(document).ready(function(){
  $("div").find("*");
});
```
#### 同胞
- siblings()
- next()
- nextAll()
- nextUntil()
- prev()
- prevAll()
- prevUntil()
```
$(document).ready(function(){
  $("h2").siblings();
});
```

#### 过滤
- first()
- last()
- eq()
 - 返回被选元素中带有指定索引号的元素。ps: 从0开始

```
$(document).ready(function(){
  $("div p").first();
});
```
- filter()
- not()
 - 返回不匹配标准的所有元素

```
$(document).ready(function(){
  $("p").filter(".intro");
});
```

----------

### AJAX
#### 加载
- load()

```
$(document).ready(function(){
  $("#btn1").click(function(){
    $('#test').load('/example/jquery/demo_test.txt');
  })
})
```
可以把 jQuery 选择器添加到 URL 参数
```
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("/example/jquery/demo_test.txt #p1");
  });
});
```
- 可选的 callback 参数规定当 load() 方法完成后所要允许的**回调函数**
 - responseTxt - 包含调用成功时的结果内容
 - statusTXT - 包含调用的状态
 - xhr - 包含 XMLHttpRequest 对象


```
$("button").click(function(){
  $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success")
      alert("外部内容加载成功！");
    if(statusTxt=="error")
      alert("Error: "+xhr.status+": "+xhr.statusText);
  });
});
```
#### Get/Post
- GET - 从指定的资源请求数据
 - GET 方法可能返回缓存数据
- POST - 向指定的资源提交要处理的数据
 -  POST 也可用于从服务器获取数据。不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据

- $.get()
- $.post()
```
$("button").click(function(){
  $.get("demo_test.asp",function(data,status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
```
```
<%
response.write("This is some text from an external ASP file.")
%>
```
使用 $.post() 连同请求一起发送数据
```
$("button").click(function(){
  $.post("demo_test_post.asp",
  {
    name:"Donald Duck",
    city:"Duckburg"
  },
  function(data,status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
```
这个 ASP 文件 ("demo_test_post.asp") 类似这样：
```
<%
dim fname,city
fname=Request.Form("name")
city=Request.Form("city")
Response.Write("Dear " & fname & ". ")
Response.Write("Hope you live well in " & city & ".")
%>
```

### 杂项
#### jQuery 和其他 JavaScript 框架
- noConflict()

通过全名替代简写的方式来使用 jQuery
```
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery 仍在运行！");
  });
});
```
noConflict() 可返回对 jQuery 的引用，您可以把它存入变量
```
var jq = $.noConflict();
jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("jQuery 仍在运行！");
  });
});
```
把 $ 符号作为变量传递给 ready 方法。这样就可以在函数内使用 $ 符号了 - 而在函数外，依旧不得不使用 "jQuery"
```
$.noConflict();
jQuery(document).ready(function($){
  $("button").click(function(){
    $("p").text("jQuery 仍在运行！");
  });
});
```
