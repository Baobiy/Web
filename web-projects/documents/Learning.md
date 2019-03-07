## 网站基本结构

1.index.html （即主页）首次进入网页所看到的文本和图像。

2.images 网页所使用的图像

3.styles 内容添加样式的样式表（如设置的文本颜色和背景颜色）

4.scripts 为网页添加交互功能的JavaScripts代码（如点击时读取数据的按钮）



基本目录结构如图：

![1551854056051](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1551854056051.png)



------

### HTML基础

##### HTML元素

[html元素详解](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics#HTML_%E5%85%83%E7%B4%A0%E8%AF%A6%E8%A7%A3)

- 嵌套元素 

  ```html
  <p>My cat is very <strong>cute</strong></p>
  ```

- 空元素

  不包含任何内容的元素称为空元素。

  ```html
  <img src="images/cat.jpg" alt="My test image">
  ```

##### HTML文档详解

[html文档](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics#HTML_%E6%96%87%E6%A1%A3%E8%AF%A6%E8%A7%A3)

- `<!DOCTYPE html>` — 文档类型。

- `<html></html>` — 包含了整个页面的内容

- `<head></head>` — 包含例如面向搜索引擎的搜索关键字（[keywords](https://developer.mozilla.org/en-US/docs/Glossary/keyword)）、页面描述、CSS 样式表和字符编码声明等。

- < meta charset="utf-8" > —这个元素指定了当前文档使用 UTF-8 字符编码 

- `<title></title>` — 页面的标题
- `<body></body>` — 包含期望让用户在访问页面时看到的内容

##### 图像

<img>元素通过包含图像文件路径的地址属性src嵌入图像。

文字属性alt，图像的描述内容。

##### 标记文本

- 标题（Heading）< h1>-< h6>

- 段落（Paragraph）< p>

- 列表（List）

  1. 无序列表（Unordered List） < ul>
  2. 有序列表（Ordered List）< ol>

  列表项目元素< li>包围列表。

##### 链接

- < a> — a 是 "anchor" （锚）的缩写
- 步骤:
  1. 选择文本
  2. 将文本包含在< a>元素内
  3. 为此< a>元素添加一个herf属性
  4. 把属性的值设置为所需网址

------

### CSS基础

[css基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)

##### CSS规则集详解

![](C:\Users\Administrator\Desktop\毕钰\private\private\前端\web-projects\test-site\images\css.jpg)

##### 多元素选择

也可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。

##### 不同类型的选择器

[不同类型的选择器](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics#%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%80%89%E6%8B%A9%E5%99%A8)

- 元素选择器（也称作标签或类型选择器）
- ID选择器
- 类选择器
- 属性选择器
- 伪（Pseudo）类选择器

##### 字体和文本

[字体和文本](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics#%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%80%89%E6%8B%A9%E5%99%A8)

##### 一切皆盒子

[一切皆盒子](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics#%E4%B8%80%E5%88%87%E7%9A%86%E7%9B%92%E5%AD%90)

CSS 布局主要就是基于盒模型的。每个占据页面空间的块都有这样的属性：

- padding ：即内边距，围绕着内容（比如段落）的空间
- border ：即边框，紧接着内边距的线
- margin：即外边距，围绕元素外部的空间

还是用：

- width：元素的宽度
- background-color：元素内容和内边距底下的颜色
- color：元素内容（通常是文本）的颜色
- text-shadow：为元素内的文本设置阴影
- display：设置元素的显示模式

[文档体格式设置](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics#%E6%96%87%E6%A1%A3%E4%BD%93%E6%A0%BC%E5%BC%8F%E8%AE%BE%E7%BD%AE)

[定位页面主标题并添加样式](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics#%E5%AE%9A%E4%BD%8D%E9%A1%B5%E9%9D%A2%E4%B8%BB%E6%A0%87%E9%A2%98%E5%B9%B6%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F)

[图像居中](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics#%E5%9B%BE%E5%83%8F%E5%B1%85%E4%B8%AD)

[^css color-picker-tool]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool

------

### JavaScript基础

[JavaScript-Basic](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

##### JavaScript快速入门

[JavaScript_快速入门](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics#JavaScript_%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8)

- 变量（Variable）

  ### 声明变量使用let

- 注释

  多行使用/*......  */ ,单行可使用 //

  添加注释快捷键：Ctrl+/

- 运算符

- 条件语句

- 函数（Function）

  `document.querySelector` 和 `alert` 是浏览器内置的函数，随时可用。

  `alert()` 函数在浏览器窗口内弹出一个警告框，还应为其提供一个字符串参数，以告诉它警告框里要显示的内容。

  自定义函数：使用function myFunction{}

- 事件

    [完善示例网页](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics#%E5%AE%8C%E5%96%84%E7%A4%BA%E4%BE%8B%E7%BD%91%E9%A1%B5)

[Publish your website](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/Publishing_your_website)

 [How the Web works](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

## HTML-构建Web

[HTML](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML)

### 元素

#### 主要部分解析：

1. 开始标签（Opening tag）（< p>）
2. 结束标签（Closing tag）（< /p>）
3. 内容（Content）
4. 元素（Element）（开始+结束+内容）

#### 嵌套元素

需要完整嵌套

#### 块级元素和内联元素

- 块级元素 通常用来展示页面上结构化的内容；

  ​		一个以block形式展现的块级元素不会被嵌套进内联元素中，但可以嵌套在其他块级元素中。

- 内联元素 通常出现在一堆文字之间，出现在块级元素中并包裹文档内容的一小部分。

  ​		如超链接元素< a >或者强调元素< em >和< strong >

#### 空元素

### 属性

一个属性必须包含如下内容：

1. 在元素和属性之间有个空格space（如果有一个或多个已存在的属性，就与前一个属性之间有一个空格）
2. 属性后面紧跟着一个“=”符号
3. 有一个属性值，由一对引号“”引起来

#### 关于元素a的示例

元素<a>是锚，它使被标签包裹的内容称为一个超链接。此元素也可以添加大量的属性，其中几个如下：

- href：这个属性声明超链接的web地址，当这个链接被点击浏览器会跳转至href声明的web地址。

  例如：`href="https://www.mozilla.org/"`

- title：标题title属性为超链接声明额外的信息，比如你将链接至那个页面。

  例如：title = “The Mozilla homepage”

- target：目标target属性指定将用于显示链接的浏览上下文

  例如：target="_blank"将在新标签页中显示链接。如果你希望在目前标签页显示链接，只需忽略这个属性。

#### 布尔属性

没有值的属性，是合法的，称为布尔属性。

他们只能有跟它的属性名一样的属性值。

#### 省略包围属性值的引号

建议始终添加引号——这样可以避免很多问题，并且使代码更易读。

### 实体引用： 在HTML中包含特殊字符

[实体引用](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started#%E5%AE%9E%E4%BD%93%E5%BC%95%E7%94%A8%EF%BC%9A_%E5%9C%A8HTML%E4%B8%AD%E5%8C%85%E5%90%AB%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6)

在HTML中，字符 `<`, `>`,`"`,`'` 和 `&` 是特殊字符. 它们是HTML语法自身的一部分, 那么你如何将这些字符包含进你的文本中呢, 比如说如果你真的想要在文本中使用符号&或者小于号, 而不想让它们被浏览器视为代码并被解释?

我们必须使用字符引用 —— 表示字符的特殊编码, 它们可以在那些情况下使用. 每个字符引用以符号&开始, 以分号(;)结束.

| 原义字符 | 等价字符引用 |
| -------- | ------------ |
| <        | &lt；        |
| >        | &gt；        |
| “        | &quot；      |
| ‘        | &apos；      |
| &        | &amp；       |

### HTML注释

[html注释](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started#HTML%E6%B3%A8%E9%87%8A)

为了将一段HTML中的内容置为注释，你需要将其用特殊的记号< !--和-- >包括起来

（快捷键方式：全选要注释的语句，ctrl+/）

### 元数据：< meta>元素

[元数据](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%E5%85%83%E6%95%B0%E6%8D%AE%EF%BC%9A%3Cmeta%3E%E5%85%83%E7%B4%A0)

元数据就是描述数据的数据

#### 指定你的文档中字符的编码

```html
<meta charset="utf-8">
```

这个元素简单的指定了文档的字符编码

`utf-8` 是一个通用的字符集，它包含了任何人类语言中的大部分的字符。

#### 添加作者和描述

许多`<meta>` 元素包含了`name` 和 `content` 特性：

- name 指定了meta元素的类型（author、description）
- content 指定了实际的元数据内容

description也被使用在搜索引擎显示的结果页中

![1551948246715](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1551948246715.png)

![1551948321268](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1551948321268.png)

#### 其他类型的meta data 

[other meta data](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%E5%85%B6%E4%BB%96%E7%B1%BB%E5%9E%8B%E7%9A%84_metadata)

当你在网站上查看源码时，你也会发现其他类型的元数据。你在网站上看到的许多功能都是专有创作，旨在向某些网站(如社交网站)提供可使用的特定信息。

例如，Facebook 编写的元数据协议 [Open Graph Data](http://ogp.me/) 为网站提供了更丰富的元数据。在 MDN 源代码中，你会发现：

```html
<meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png">
<meta property="og:description" content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both Web sites
and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
<meta property="og:title" content="Mozilla Developer Network">
```

上面代码展现的一个效果就是，当你在 Facebook 上链接到 MDN 时，该链接将显示一个图像和描述：这为用户提供更丰富的体验。

Twitter 还拥有自己的类型的专有元数据协议，当网站的 URL 显示在 twitter.com 上时，它具有相似的效果。例如下面：

```html
<meta name="twitter:title" content="Mozilla Developer Network">
```

### 在站点增加自定义图标

[link](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%E5%9C%A8%E4%BD%A0%E7%9A%84%E7%AB%99%E7%82%B9%E5%A2%9E%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87)

这个不起眼的图标已经存在很多很多年了，**16 x 16 像素**是这种图标的第一种类型。你可以看见这些图标出现在浏览器每一个打开的页面中的标签页中中以及在书签面板中的书签页面中。

页面添加图标的方式有：

1. 将其保存在与网站的所有页面相同的目录中，以ico格式保存（大多浏览器将支持更通用的格式，如gif和png，但使用ico格式将确保它能在如Internet Explorer 6 一样久远的浏览器显示）

2. 将以下行添加到HTML< head>中以引用它：

   ```html
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
   ```

### 在HTML中应用CSS和JavaScript

- < link> 元素经常位于文档的头部。这个link元素有2个属性，rel="stylesheet"表明这是文档的样式表，而 href包含了样式表文件的路径：

  ```html
  <link rel="stylesheet" href="my-css-file.css">
  ```

- < script> 部分没必要非要放在文档头部；实际上，把它放在文档的尾部（在 `</body>标签之前`）是一个更好的选择，这样可以确保在加载脚本之前浏览器已经解析了HTML内容（如果脚本加载某个不存在的元素，浏览器会报错）。

  ```html
  <script src="my-js-file.js"></script>
  ```

**注意：** `<script>`元素看起来像一个空元素，但它并不是，因此需要一个结束标记。您还可以选择将脚本放入`<script>`元素中，而不是指向外部脚本文件。

### 为文档设定主语言

[link](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#%E4%B8%BA%E6%96%87%E6%A1%A3%E8%AE%BE%E5%AE%9A%E4%B8%BB%E8%AF%AD%E8%A8%80)

最后，值得一提的是你可以（而且确实应该）为你的站点设定语言， 这个可以通过添加lang属性到HTML开始标签中来实现 (参考 [meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html))，如下所示：

```html
<html lang="en-US">
```

这在很多方面都很有用。如果你的HTML文档的语言设置好了，那么你的HTML文档就会被搜索引擎更有效地索引 (例如，允许它在特定于语言的结果中正确显示)，对于那些使用屏幕阅读器的视障人士也很有用(比如， 法语和英语中都有“six”这个单词，但是发音却完全不同)。

你还可以将文档的分段设置为不同的语言。例如，我们可以把日语部分设置为日语，如下所示：

```html
<p>Japanese example: <span lang="jp">ご飯が熱い。</span>.</p>
```

