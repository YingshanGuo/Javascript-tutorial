# CSS

#### 目录
<ol>
    <li><a href="#question">CSS常见问题（含LESS语法）</a>
    <ul>
        <li><a href="#question-1.1">span 标签插入图片</a>
        <ul>
	        <li>display: inline-block;</li>
        </ul>
        </li>
        <li><a href="#question-1.2">分栏布局</a>
            <ul>
                <li>box-sizing: border-box;</li>
            </ul>
        </li>
        <li><a href="#question-1.3">2个 img中间 出现空格</a>
            <ul>
                <li>font-size: 0px;</li>
            </ul>
        </li>
        <li><a href="#question-1.4">遮罩(透明度)</a>
            <ul>
                <li>opacity: 0.9;</li>
            </ul>
        </li>
        <li><a href="#question-1.5">要获取div的display值</a>
            <ul>
                <li>在div里添加style="display: none;</li>
            </ul>
        </li>
        <li><a href="#question-1.6">background</a>
            <ul>
                <li>image 居中</li>
                <li>image 全屏</li>
                <li>image 拉伸</li>
            </ul>
        </li>
        <li><a href="#question-1.7">image 底下有白边</a>
          <ul><li>display: block;</li></ul>
        </li>
        <li><a href="#question-1.8">input 点击有蓝边</a>
          <ul><li>outline: none;</li></ul>
        </li>
    </ul>
    </li>
    <li><a href="#css-tricks">CSS Tricks</a>
             <ul>
                <li><a href="#css-tricks-1">居中</a>
                  <ul>
                    <li><a href="#css-tricks-1.1">水平居中</a></li>
                    <li><a href="#css-tricks-1.2">垂直居中</a></li>
                    <li><a href="#css-tricks-1.3">绝对居中</a></li>
                  </ul>
                </li>
                <li><a href="#css-tricks-2">动画&特效</a>
                  <ul>
                    <li><a href="#css-tricks-2.1">旋转</a></li>
                    <li><a href="#css-tricks-2.2">三角形</a></li>
                  </ul>
                </li>
                <li><a href="#css-tricks-3">鼠标、光标</a>
                  <ul>
                    <li><a href="#css-tricks-3.1">手指</a></li>
                  </ul>
                </li>
                <li><a href="#css-tricks-4">文本</a>
                  <ul>
                    <li><a href="#css-tricks-4.1">可编辑</a></li>
                    <li><a href="#css-tricks-4.2">文字过长省略</a></li>
                  </ul>
                </li>
            </ul>
    </li>
    <li>选择器 Selectors
             <ul>
                <li>class</li>
                 <li>id</li>
            </ul>
    </li>
    </ol>
<a id="question-1"></a>
## CSS 常见问题（以下内容包含LESS语法）
<a id="question-1.1"></a>
### span 标签插入图片  
 background需要加入```display: inline-block; ```
   - 否则图片无法显示出来
   - PS: less语法

```
homework-height:42px;
homework-width:58px;
homework-position-horizontal: -58px;
homework-position-vertical: -42px;
homework-icon: url(../images/student/icons.png);
.homework-chinese{
	display: inline-block;     //important
	height: @homework-height;
    width: @homework-width;
    background: @homework-icon no-repeat @homework-position-horizontal*0 @homework-position-vertical*0;
}
```
<a id="question-1.2"></a>
### 分栏布局    
  需要加入  ```box-sizing: border-box;```
  - 否则导致div被挤到下一行

```
.content-col-6 {
    width: 50%;
    padding: @content-col-padding;
    position: relative;
    float: left;
    box-sizing: border-box;
}
```
<a id="question-1.3"></a>
### 2个 img中间 出现空格   
需要添加```font-size: 0px;```
  - 否则中间的空隙无法去除

```
<div  style=" display:inline; font-size: 0px;">
     <img  src="../static/images/student/logo_1.png">
     <img  style="vertical-align: top;" src="../static/images/student/logo_2.png">
</div>
```
<a id="question-1.4"></a>
### 遮罩    
需要添加   透明度``` opacity: 0.9;    ```

```
 #mask {
        bottom: 0;
        left: 0;
        opacity: 0.9;    /* important*/
        position: fixed;
        right: 0;
        top: 0;
        background: grey;
        filter:alpha(opacity=50);    /*IE6*/
        -moz-opacity:0.5;          /*Mozilla old version*/
        -khtml-opacity: 0.5;     /*Safari old version*/
    }
```
<a id="question-1.5"></a>
### 要获取div的display值
需要在div里添加```style="display: none;"```
   - 不能在css里写，js无法读取

```
    <div class="mask" style="display: none;" onclick="showMask(3);">
    </div>
    function showMask(n) {
        var mask = document.getElementsByClassName("mask");
        if(mask[n].style.display =='none'){
            mask[n].style.display = 'block';
        }else{
            mask[n].style.display = 'none';
        }
    }
```
<a id="question-1.6"></a>
### background
#### image 居中

```
background:url(logo.png) center center no-repeat;
```

#### image 全屏

```
background-size:100% 100%;
```

#### image 拉伸
- 顺序不能翻转  

```
background:url('../../static/images/login/bg0.png') no-repeat  0 0 / 100% 100% rgba(0, 0, 0, 0);
  background-size:100% 100%;

```

<a id="question-1.7"></a>
#### image底下有白边
首先 img 元素默认对齐方式为 vertical-align: baseline;，这就导致了，baseline 以下的部分被空了出来，显示了背景的白色。

问题找到了，对症下药可得出下面的解决方案：

- 根本上消除 img 的对齐方式 —— 块状化：

```
img {
display: block;
}
```

- 更改 img 对齐方式，以下三种均可

```
img {
vertical-align: top;
vertical-align: middle;
vertical-align: bottom;
}
```

- 更改行高，行高是两条 baseline 之间的距离，因此可以暴力的让行高消失

```
{
line-height: 0;
/* font-size: 0; 当 line-height 使用数值、百分比或者 rem 定义时也可用这种方式，因为 line-height 参照的是 font-size 的值*/
}
```

<a id="question-1.8"></a>
#### input 点击有蓝边

```
input,textarea{
  outline:none;
}
```

----------

<a id="css-tricks"></a>
## CSS Tricks
<a id="css-tricks-1"></a>
### 居中    
<a id="css-tricks-1.1"></a>
#### 水平居中

```
display: flex;
justify-content: center;    /* 水平居中 */
```
<a id="css-tricks-1.2"></a>
#### 垂直居中

```
display: flex;
align-items: center;       
```
<a id="css-tricks-1.3"></a>
#### 绝对居中

```
div {
    width: 300px;
    height: 300px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-color: pink; /* 方便看效果 */
}
```
- 利用 flex 布局
  - 实际使用时应考虑兼容性

```
.container {
    display: flex;
    align-items: center;        /* 垂直居中 */
    justify-content: center;    /* 水平居中 */

}
.container div {
    width: 100px;
    height: 100px;
    background-color: pink;     /* 方便看效果 */
}  
```
- 未知容器的宽高，利用 `transform` 属性  

```
div {
    width:500px;
    height:300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;     /* 相对定位或绝对定位均可 */
    background-color: pink;     /* 方便看效果 */

}
```
<a id="css-tricks-2"></a>
### 动画&特效
<a id="css-tricks-2.1"></a>
#### 旋转

```
.profile-circle-img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    left: 65px;
    top: 35px;
    transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
}

.profile-circle-img:hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
}
```
<a id="css-tricks-2.2"></a>
#### 三角形
- 推荐用第一个方法

```
.arrow-up {
  width: 0;
  height: 0;
  border-left:20px solid transparent;
  border-right:20px solid transparent;
  border-bottom:20px solid black;
}
```
```
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```
<a id="css-tricks-3"></a>
### 鼠标、光标
<a id="css-tricks-3.1"></a>
#### 手指

```
cursor:pointer;
```
<a id="css-tricks-4"></a>
### 文本
<a id="css-tricks-4.1"></a>
#### 可编辑文本
```
<p contenteditable="true">这是一段可编辑的段落。请试着编辑该文本。</p>
```
<a id="css-tricks-4.2"></a>
#### 文字超长省略
```
{
 max-width:150px;
 white-space:nowrap;  /*强制文本在一行内显示*/
 text-overflow:ellipsis;   /*文字超出省略*/
 overflow:hidden;
 }
 ```


----------

### 选择器 Selectors
```
<p class="key" id="principal">
```
#### class
```
.key {
  color: green;
}
```
#### id
```
#principal {
  font-weight: bolder;
}
```

#### 伪类选择器（Pseudo-classes selectors）
伪类列表
- https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_Started/Selectors

```
body { background-color: #ffffc9 }
a:link { color: blue } /* 未访问链接 */
a:visited { color: purple } /* 已访问链接 */
a:hover { font-weight: bold } /* 用户鼠标悬停 */
a:active { color: lime } /* 激活链接 */
```
