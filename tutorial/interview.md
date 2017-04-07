
#### http 中 get 和 post的区别?  

```
GET - 从指定的资源请求数据。
POST - 向指定的资源提交要被处理的数据。
GET 能被缓存，发送数据时，添加数据长度有限制，只允许ASCII字符，数据对所有人可见。
```

#### css 有几种定位 他们的区别

- 绝对居中  

```
top:50%;
left:50%;
position:relative;
transform:translate(-50%,-50%);

```
- 垂直居中

```
display:flex;
align-items:center;

```

- 水平居中

```
display:flex;
justify-content:center;
```

#### js的作用域，作用域链
响应式开发时的媒体查询

```
<script type="text/javascript">
  var a=1;
  function print(){
      var a = 100 ;
      console.log(a);
  }
  print();   //100
  console.log(a);   //1
</script>
```

#### css 标准盒模型 ie自己的盒型，他俩的区别

- 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
- 区  别： IE的content部分把 border 和 padding计算了进去;

#### css3动画怎么写

```

```

#### 使用jquery实现一个最简单的ajax例子

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

#### JSON的数据结构是什么

```
var person={
  name:"小明",
  age:18,
  language:['Chinese','Japanese','English']
};
```

#### 然后解析JSON数据
如何字符化JSON数据

```
JSON.stringify(person,null,'');
```

#### 标准的事件模型是什么（捕获 冒泡）IE的事件模型有何不同  

 标准的事件模型是先事件捕获再冒泡
 IE是只有事件捕获

#### 事件取消

```
e.preventDefault(); //W3C
 e.returnValue = false; //IE
```

#### 如何阻止事件冒泡

```
e.stopPropagation();
e.cancelBubble = true; //IE
```
```
$("#test").onclick = function(){  
　　return false;  //jQuery 则既阻止默认行为又防止对象冒泡
```

#### jquery中，事件绑定的几种方式
这些方式中，最推荐哪种
事件委托的优点是什么
什么时候必须用事件委托

#### px em rem 的区别  
- px 在缩放页面时无法调整那些使用它作为单位的字体、按钮等的大小；
- em 的值并不是固定的，会继承父级元素的字体大小，代表倍数；
- rem 的值并不是固定的，始终是基于根元素 <html> 的，也代表倍数。

参考网址：https://segmentfault.com/a/1190000005936910
#### 如何实现左侧宽度固定，右侧宽度自适应

#### 如何实现水平垂直居中
上面已实现
