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

- <meta charset="utf-8"> —这个元素指定了当前文档使用 UTF-8 字符编码 

- `<title></title>` — 页面的标题
- `<body></body>` — 包含期望让用户在访问页面时看到的内容

##### 图像

<img>元素通过包含图像文件路径的地址属性src嵌入图像。

文字属性alt，图像的描述内容。

##### 标记文本

- 标题（Heading）<h1>-<h6>

- 段落（Paragraph）<p>

- 列表（List）

  1. 无序列表（Unordered List） <ul>
  2. 有序列表（Ordered List）<ol>

  列表项目元素<li>包围列表。

##### 链接

- <a> — a 是 "anchor" （锚）的缩写
- 步骤:
  1. 选择文本
  2. 将文本包含在<a>元素内
  3. 为此<a>元素添加一个herf属性
  4. 把属性的值设置为所需网址

------

### CSS基础

[css基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)

##### CSS规则集详解

![](C:\Users\Administrator\Desktop\毕钰\private\private\前端\web-projects\test-site\images\css-declaration.png)

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

  声明变量使用let

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

  

 