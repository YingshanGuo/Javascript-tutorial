# Javascript

<ol>
    <li>核心（ECMAScript）
        <ul>
            <li>预留关键字 Reserved keywords</li>
            <li>控制结构
                <ul>
                   <li>条件表达式的三元操作符</li>
                   <li>switch 语句</li>
               </ul>
           </li>
           <li>对象</li>
           <li>数组
            <ul>
                <li>length</li>
                <li>forEach</li>
                <li>push</li>
            </ul>
            </li>
            <li>函数</li>
            <li>自定义对象
                <ul>
                   <li>原型链</li>
               </ul>
           </li>
           <li>内部函数   （可以访问父函数作用域中的变量，减少全局变量）</li>
           <li>闭包   （返回外部函数）
              <ul>
                <li>内存泄漏（不要在匿名内部函数中使用变量、添加另外一个闭包）</li>      
              </ul>
           </li>
           <li>this</li>
        </ul>
    </li>
    <li>ES6
        <ul>
            <li>类
                <ul>
                   <li>使用 extends 创建子类</li>
                   <li>使用 super 引用父类</li>
               </ul>
           </li>
       </ul>
    </li>
    <li>文档对象模型（DOM）
        <ul>
            <li>aaa
                <ul>
                   <li>bbbb</li>
               </ul>
           </li>
       </ul>
   </li>
   <li> 浏览器对象模型（BOM）
    <ul>
        <li>aaa
            <ul>
               <li>bbbb</li>
           </ul>
       </li>
   </ul>
   <li><a href="">JavaScript写成类插件</a></li>
   <li><a href="#javascript-question">JavaScript常错</a>
      <ul>
        <li><a href="#javascript-question-1">getElementById获取变量</a></li>
      </ul>
   </li>
</li>
</ol>

浏览网站:
 - 核心（ECMAScript）
  - 重新介绍 JavaScript（JS 教程）https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript#数字

 - 文档对象模型（DOM）


## 核心（ECMAScript）

### Javascript
####预留关键字 Reserved keywords
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

----------

#### 控制结构
##### 条件表达式的三元操作符
```
var allowed = (age > 18) ? "yes" : "no";
```
##### switch 语句
- switch
- case
- break
- defult
```
switch(action) {
    case 'draw':
        drawIt();
        break;
    case 'eat':
        eatIt();
        break;
    default:
        doNothing();
}
```

----------

#### 对象
##### 创建一个空对象
```
var obj = new Object();
```
**对象字面量**（object literal）, JSON 格式的核心语法（**优先选择**）
```
var obj = {};
```
- 在对象实例中定义一个对象：
```
var obj = {
    name: "Carrot",
    "for": "Max",
    details: {
        color: "orange",
        size: 12
    }
}
```
对象的属性可以通过链式（chain）表示方法进行访问：
```
obj.details.color; // orange
obj["details"]["size"]; // 12
```

----------
#### 数组
特殊的属性——**length（长度）属性**
- 这个属性的值通常比数组最大索引大 1。
- **数组的长度是比数组最大索引值多一的数。**

相关用法：
- forEach();
- push();

创建数组的传统方法
```
var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
a.length; // 3
```
数组字面量（array literal）法（**优先选择**）
```
var a = ["dog", "cat", "hen"];
a.length; // 3
```
数组的长度是比数组最大索引值多一的数
```
var a = ["dog", "cat", "hen"];
a[100] = "fox";
a.length; // 101
```
**访问不存在的数组，返回undefined**
```
typeof(a[90]); // undefined
```
遍历数组  **forEach()：**
```
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});
```
如果想在数组后追加元素，只需要：
```
a.push(item);
```

----------

#### 函数
```
function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}

add(2, 3, 4, 5); // 14
```
  - 函数实际上是访问了函数体中一个名为 arguments 的内部对象，这个对象就如同一个类似于数组的对象一样，包括了所有被传入的参数。


 ----------

#### 自定义对象

```
function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }
    }
}
s = makePerson("Simon", "Willison");
s.fullName(); // Simon Willison
s.fullNameReversed(); // Willison, Simon
```
- **关键字 this**：当使用在函数中时，this 指代当前的对象，也就是调用了函数的对象。**如果在一个对象上使用点或者方括号来访问属性或方法，这个对象就成了 this。**如果并没有使用“点”运算符调用某个对象，那么 this 将指向**全局对象**（global object）。


```
s = makePerson("Simon", "Willison");
var fullName = s.fullName;
fullName(); // undefined undefined
```

##### 使用关键字 this 改进
```
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    }
}
var s = new Person("Simon", "Willison");
```
- 单独调用fullName() 时会产生相同的问题，this指向全局变量，undefined
- **new**，它和 this 密切相关。它的作用是创建一个崭新的空对象，然后使用指向那个对象的 this 调用特定的函数。注意，含有 this 的特定函数不会返回任何值，只会修改 this 对象本身。new 关键字将生成的 this 对象返回给调用方，而被 new 调用的函数成为构造函数。习惯的做法是将这些函数的**首字母大写**，这样用 new 调用他们的时候就容易识别了。

##### 再次改进
```
function personFullName() {
    return this.first + ' ' + this.last;
}
function personFullNameReversed() {
    return this.last + ', ' + this.first;
}
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}
```

##### （最佳的方案）原型链
```
function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
}
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
}
```
- 当你试图访问一个 Person 没有定义的属性时，解释器会首先检查这个 Person.prototype 来判断是否存在这样一个属性。所以，任何分配给 Person.prototype 的东西对通过 this 对象构造的实例都是可用的。

在程序中的任何时候修改原型（prototype）中的一些东西

```
s = new Person("Simon", "Willison");
s.firstNameCaps();  // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase()
}
s.firstNameCaps(); // SIMON
```

可以给 JavaScript 的内置函数原型（prototype）添加东西。让我们给 String 添加一个方法用来返回逆序的字符串：
- PS： **这个方法可以随时制作自定义的方法**

```
 var s = "Simon";
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
    var r = "";
    for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
}
s.reversed(); // nomiS
```

定义新方法也可以在字符串字面量上用（string literal）。
```
"This can now be reversed".reversed(); // desrever eb won nac sihT
```

----------

#### 内部函数（可以访问父函数作用域中的变量，一个减少使用全局变量的好方法）
嵌套函数：**可以访问父函数作用域中的变量**

```
function betterExampleNeeded() {
    var a = 1;
    function oneMoreThanA() {
        return a + 1;
    }
    return oneMoreThanA();
}
```
- 如果某个函数依赖于其他的一两个函数，而这一两个函数对你其余的代码没有用处，你可以**将它们嵌套在会被调用的那个函数内部**，这样做可以**减少全局作用域下的函数的数量**，这有利于编写易于维护的代码。

----------

#### 闭包（返回外部函数）
```
function makeAdder(a) {
    return function(b) {
        return a + b;
    }
}
var x = makeAdder(5);
var y = makeAdder(20);
x(6); // ?
y(7); // ?
```
- makeAdder创建了一个新的 adder 函数，这个函数自身带有一个参数，它被调用的时候这个参数会被加在外层函数传进来的参数上。
- 与内嵌函数不同的是，**外部函数被返回了**，那么常识告诉我们局部变量“应该”不再存在。但是它们却仍然存在——否则 adder 函数将不能工作。也就是说，这里存在 makeAdder 的局部变量的两个不同的“副本”——一个是 a 等于5，另一个是 a 等于20。

```
x(6); // 返回 11
y(7); // 返回 27
```

每当 JavaScript 执行一个函数时，都会创建一个作用域对象（scope object），用来保存在这个函数中创建的局部变量。它和被传入函数的变量一起被初始化。这与那些保存的所有全局变量和函数的全局对象（global object）类似，但仍有一些很重要的区别，第一，每次函数被执行的时候，就会创建一个新的，特定的作用域对象；第二，与**全局对象（在浏览器里面是当做 window 对象来访问的）**不同的是，你不能从 JavaScript 代码中直接访问作用域对象，也没有可以遍历当前的作用域对象里面属性的方法。

所以当调用 makeAdder 时，解释器创建了一个作用域对象，它带有一个属性：a，这个属性被当作参数传入 makeAdder 函数。然后 makeAdder 返回一个新创建的函数。**通常 JavaScript 的垃圾回收器会在这时回收 makeAdder 创建的作用域对象，但是返回的函数却保留一个指向那个作用域对象的引用**。结果是**这个作用域对象不会被垃圾回收器回收，直到指向 makeAdder 返回的那个函数对象的引用计数为零**。

----------

##### 内存泄漏（不要在匿名内部函数中使用变量、添加另外一个闭包）
解决因闭包而引入的循环引用：
1. 不要在匿名内部函数中使用变量
2. 添加另外一个闭包

```
function addHandler() {
    var el = document.getElementById('el');
    el.onclick = function() {
        el.style.backgroundColor = 'red';
    }
}
```

这段代码创建了一个元素，当它被点击的时候变红，但同时它也会发生内存泄露。为什么？因为对 el 的引用不小心被放在一个匿名内部函数中。这就在 JavaScript 对象（这个内部函数）和本地对象之间（el）创建了一个循环引用。

解决办法1：不要使用e1变量
```
function addHandler(){
    document.getElementById('el').onclick = function(){
        this.style.backgroundColor = 'red';
    };
}
```
解决办法2：添加另外一个闭包
```
function addHandler() {
    var clickHandler = function() {
        this.style.backgroundColor = 'red';
    };
    (function() {
        var el = document.getElementById('el');
        el.onclick = clickHandler;
    })();
}
```

### this
- Java属于编译期绑定，而JS属于 **运行期绑定**
- **this和它声明环境无关，而完全取决于他的执行环境**

```
//读以下代码之前，必须先阅读《哈利·波特》原著。（笑）

var name = '罗恩';
var aaa = {
    name: '哈利',
    say: function () {
        console.log(this.name);
    }
}

var bbb = {
    name: '赫敏',
    say: aaa.say
}

var ccc = aaa.say;

aaa.say();    //哈利
bbb.say();    //赫敏
ccc();        //罗恩
```
bbb把aaa对象的say方法引用过来,引用的是一个方法而非一个对象，而aaa.say存储的是一个匿名函数，所以这种写法和以下代码并没有什么区别。

```
var bbb = {
    name: '赫敏',
    say: function () {
        console.log(this.name);
    }
}
```

- 特殊情况：```setTimeout``` 和``` setInterval ```

```
var aaa = {
    name: '哈利',
    getName: function () {
        setTimeout(function(){
            console.log(this.name);
        },100)
    }
}
```
原来三行的输出会是什么？

答案：3个罗恩。
也就是说，三次this，指代的都是window对象。

稍微改写一下这个方法：
```
getName: function () {
        //在setTimeout外存储this指代的对象
        var that = this;
        setTimeout(function(){
            //this.name变成了that.name
            console.log(that.name);
        },100)
}
```
输出就又正常了。

----------

## ES6
### 类
#### 使用 extends 创建子类

构造器：
- 构造器方法是一个特殊的类方法，其用于创建和初始化对象（用该类生成的）。一个类只能拥有一个名为 constructor 的方法，否则会抛出 SyntaxError 异常。

extends 关键字可以用在类声明或者类表达式中来创建一个继承了某个类的子类。
```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
// 'Mitzie barks.'
d.speak();
    (function() {
        var el = document.getElementById('el');
        el.onclick = clickHandler;
    })();
}
```
同样也可以用于原有的原型继承的“类”：
```
function Animal (name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();
```

----------

#### 使用 super 引用父类
super 关键字可以用来调用其父类的构造器或者类方法
```
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}
```

----------

## 文档对象模型（DOM）
![enter image description here](http://www.w3school.com.cn/i/ct_js_domtree.gif)


----------

## 浏览器对象模型（BOM）


----------


## Javascript写成类插件

```
;
(function($) {
    var Drawingboard = function(settings) {
        var settings = settings || {}
        var defaultSettings = {
            lineWidth: 1
        }
        this.settings = $.extend(defaultSettings, settings);
        this.abc = "abc";
    }

    Drawingboard.prototype = {
        func1: function() {
            console.log("this.abc----", this.abc);
        },
        func2: function() {
            var test = this;
            console.log("this.abc", this.abc); //打印abc
            var test1 = $("h3").click(function() {
                console.log(test.abc);  //打印abc;没有赋值var test =this,打印undefined
                test.abc = "bbb";
                console.log(test.abc);  //打印bbb
                test.func1();  //打印bbb
            });
        }
    }
    window.Drawingboard = Drawingboard;
    var canvas = new Drawingboard();
    canvas.func2();
})(jQuery);
```

<a id="#javascript-question"></a>
### JavaScript常错
<a id="#javascript-question-1"></a>
#### getElementById 获取变量

但如果事先定义一个变量，例如

```
var itemId=label1;
var item=document.getElementById('itemId');//双引号一样
```

然后就会报错，说item为null。
如果去掉引号就好了。。
即：
```
var itemId=label1;
var item=document.getElementById(itemId);//没有引号就好了
```
不加引号，这个itemid就是变量，加上引号，这就是字符串常量。电脑就去找ID为ItemId的元素。自然是null
