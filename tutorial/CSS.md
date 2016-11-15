# CSS


<ol>
    <li>CSS常见问题（含LESS语法）
    <ul>
        <li><a href="#1">span 标签插入图片</a>
        <ul>
	        <li>display: inline-block;</li>
        </ul>
        </li>
        <li>分栏布局
            <ul>
                <li>box-sizing: border-box;</li>
            </ul>
        </li>
        <li>2个 img中间 出现空格
            <ul>
                <li>font-size: 0px;</li>
            </ul>
        </li>
        <li>遮罩(透明度)
            <ul>
                <li>opacity: 0.9;</li>
            </ul>
        </li>
        <li>要获取div的display值
            <ul>
                <li>在div里添加style="display: none;</li>
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

## CSS 常见问题（以下内容包含LESS语法）
<a id="1"></a>
- span 标签插入图片   background需要加入```display: inline-block; ```
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

-  分栏布局      需要加入  ```box-sizing: border-box;```
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

-  2个 img中间 出现空格   需要添加```font-size: 0px;```
  - 否则中间的空隙无法去除

```
<div  style=" display:inline; font-size: 0px;">
     <img  src="../static/images/student/logo_1.png">
     <img  style="vertical-align: top;" src="../static/images/student/logo_2.png">
</div>
```

-  遮罩    需要添加   透明度``` opacity: 0.9;    ```

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

-  要获取div的display值，需要在div里添加```style="display: none;"```
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