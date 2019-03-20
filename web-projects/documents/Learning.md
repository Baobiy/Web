网站基本结构

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

### 文字处理

#### 基础：标题和段落

每个段落是通过< p>元素标签进行定义的

这里有六个标题元素标签 —— `<h1>`、<h2>、`<h3>`、`<h4>`、`<h5>`、`<h6>`。每个元素代表文档中不同级别的内容; `<h1>` 表示主标题（the main heading），`<h2>` 表示二级子标题（subheadings），`<h3>` 表示三级子标题（sub-subheadings），等等。

##### 编辑结构层次

所涉及的元素具体代表什么，完全取决于作者编辑的内容，只要层次结构是合理的。在创建此类结构时，您只需要记住一些最佳实践：

- 优选地，您应该只对每个页面使用一次<h1> — 这是顶级标题，所有其他标题位于层次结构中的下方。
- 请确保在层次结构中以正确的顺序使用标题。不要使用<h3>来表示副标题，后面跟<h2>来表示副副标题 - 这是没有意义的，会导致奇怪的结果。
- 在可用的六个标题级别中，您应该旨在每页使用不超过三个，除非您认为有必要使用更多。具有许多级别的文档（即，较深的标题层次结构）变得难以操作并且难以导航。在这种情况下，如果可能，建议将内容分散在多个页面上。

#### 列表

##### 无序 Unordered

##### 有序 Ordered

##### 嵌套列表 Nesting lists

将一个列表嵌入到另一个列表是完全可以的。

#### 重点强调

在HTML中我们用< em>（emphasis）元素来标记这样的情况。这样做既可以让文档读起来更有趣，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为斜体，但你不应该纯粹使用这个标签来获得斜体风格，为了获得斜体风格，你应该使用< span>元素和一些CSS，或者是< i>元素（见下文）。

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

在HTML中我们用<strong> (strong importance) 元素来标记这样的请况。这样做既可以让文档更加地有用，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为粗体，但你不应该纯粹使用这个标签来获得粗体风格，为了获得粗体风格，你应该使用<span>元素和一些CSS，或者是 <b> 元素 (见下文)。

##### 斜体字、粗体字、下划线...

这里是最好的经验法则：使用<b>,<i>,<u> 来传达传统意义上的粗体，斜体或下划线是合适的，没有其他元素更适合这样用了。然而，总是保持它们拥有可访问性的心态是不对的。斜体的概念对人们使用屏幕阅读器是没有帮助的，对使用其他书写系统而不是拉丁文书写系统的人们也是没有帮助的。

- <i> 被用来传达传统上用斜体表达的意义：外国文字，分类名称，技术术语，一种思想……
- <b> 被用来传达传统上用粗体表达的意义：关键字，产品名称，引导句……
- <u> 被用来传达传统上用下划线表达的意义：专有名词，拼写错误……

### 超链接

通过将文本（或其他内容，见块级链接)转换为<a>元素内的链接来创建基本链接， 给它一个href属性（也称为目标），它将包含您希望链接指向的网址。

#### 使用title属性添加支持信息

您可能要添加到您的链接的另一个属性是标题；这旨在包含关于链接的补充有用信息，例如页面包含什么样的信息或需要注意的事情

（当链接悬停在其上时，标题将作为工具提示出现）

#### 块级元素

可以将一些内容转换为链接，甚至是 块级元素。如果你想要将一个图像转换为链接，你只需把图像放到<a></a>标签中间。

```html
<a href="https://www.mozilla.org/en-US/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
</a>
```

## 统一资源定位器(URL)与路径(path)快速入门

统一资源定位器（英文：**U**niform **R**esource **L**ocator，简写：URL）是一个定义了在网络上的位置的一个文本字符串。例如Mozilla的英文主页定位在`https://www.mozilla.org/en-US/`.

URL使用路径查找文件。路径指定文件系统中您感兴趣的文件所在的位置。

![1552531329150](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1552531329150.png)

此目录结构的根目录称为`creation-hyperlinks`。当在网站上工作时， 你会有一个包含整个网站的目录。在根目录，我们有一个`index.html`和一个`contacts.html`文件。在真实的网站上，`index.html` 将会成为我们的主页或登录页面。

我们的根目录还有两个目录—— `pdfs` 和`projects`，它们分别包含一个 PDF (`project-brief.pdf`) 文件和一个`index.html` 文件。请注意你可以有两个`index.html`文件，前提是他们在不同的目录下，许多网站就是如此。第二个`index.html`或许是项目相关信息的主登录界面。

- **指向相同目录：**如果index.html（顶层的index.html）想要包含一个超链接指向contacts.html，你只需要指定想要链接的文件名，因为它与当前文件是在同一个目录的。所以你应该使用的URL是contacts.html。

  ```html
  <p>Want to contact a specific staff member?
  Find details on our <a href="contacts.html">contacts page</a>.</p>
  ```

- **指向子目录：**如果你想要包含一个超链接到index.html（顶层index.html）指向project/index.html，你需要进入项目目录，然后指明要链接到的文件。通过指定目录的名称，然后是正斜杠，然后是文件的名称。因此你要使用的URL是project/index.html

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **指向上级目录：**如果你想在`projects/index.html`中包含一个指向`pdfs/project-brief.pdf`的超链接，你必须返回上级目录，然后再回到`pdf`目录。“返回上一个目录级”使用两个英文点号表示 — `..` — 所以你应该使用的URL是 `../pdfs/project-brief.pdf`：

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

  注意：如果需要的话，你可以将这些功能的多个例子和复杂的url结合起来。例如：`../../../complex/path/to/my/file.html`.

#### 文档片段

超链接可以链接到html文档的特定部分（被称为**文档片段**），而不仅仅是文件的顶部。要做到这一点你必须首先分配一个`id`属性的元素到链接。通常链接到一个特定的标题是有意义的，所以这看起来像下面的内容：

```html
<h2 id="Mailing_address">Mailing address</h2>	
```

然后链接到那个特定的`id`，您可以在URL的结尾包含它，前面是一个井号（#），例如：

```html
<p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>
```

你甚至可以用它自己的文档片段参考链接到同一份文件的另一部分：

```html
<p>The <a href="#Mailing_address">company mailing address</a> can be found at the bottom of this page.</p>	
```

#### 绝对链接和相对链接

绝对URL： 指向由其在Web上的绝对位置定义的位置，包括 [协议](https://developer.mozilla.org/zh-CN/docs/Glossary/%E5%8D%8F%E8%AE%AE) and [域名](https://developer.mozilla.org/zh-CN/docs/Glossary/%E5%9F%9F%E5%90%8D). 像下面的例子,如果`index.html` 页面上传到`projects`这一个目录 。`project`位于web服务站点的根目录, web站点的域名为`http://www.example.com`, 这个页面可以通过`http://www.example.com/projects/index.html`访问 ( 或者仅仅通过`http://www.example.com/projects/`来访问, 因为大多数web服务通过访问`index.html`这样的页面来加载，如果没有特定的URL的话)

**绝对URL总是指向相同的位置，不管它在哪里使用。**

相对URL： 指向与您链接的文件相关的位置，更像我们在前面一节中所看到的位置。例如，如果我们想从示例文件链接`http://www.example.com/projects/index.html`转到相同目录下的一个PDF文件, URL就是文件名URL — 例如 `project-brief.pdf` —没有其他的信息要求. 如果PDF文件能够在`projects`的子目录`pdfs`中访问到, 相对路径就是`pdfs/project-brief.pdf`(对应的绝对URL就是 `http://www.example.com/projects/pdfs/project-brief.pdf`.)

一个相对URL将指向不同的位置，这取决于它所在的文件所在的位置——例如，如果我们把`index.html` 文件 从 `projects` 目录移动出来并进入Web站点的根目录（最高级别，而不是任何目录中），  `pdfs/project-brief.pdf` 的相对URL将会指向`http://www.example.com/pdfs/project-brief.pdf`, 而不是`http://www.example.com/projects/pdfs/project-brief.pdf`.

### 链接最佳实践

#### 用清晰的链接措辞

把链接放在你的页面上很容易。这还不够。我们需要让所有的读者都可以使用链接，不管他们当前的环境和哪些工具。例如：

- 使用屏幕阅读器的用户喜欢从页面上的一个链接跳到另一个链接，并且脱离上下文来阅读链接。
- 搜索引擎使用链接文本为索引目标文件所以，在链接文本中包含关键词是一个很好的主意，以有效地描述与之相关的信息。
- 读者往往会浏览页面而不是阅读每一个字，他们的眼睛会被页面的特征所吸引，比如链接。他们会找到描述性的链接。

其他提示：

- 不要重复URL作为链接文本的一部分 — URL看起来很丑，当屏幕朗读器一个字母一个字母的读出来的时候听起来就更丑了。
- 不要在链接文本中说“link”或“links to”——它只是噪音。屏幕阅读器告诉人们有一个链接。可视化用户也会知道有一个链接，因为链接通常是用不同的颜色设计的，并且存在下划线（这个惯例一般不应该被打破，因为用户习惯了它。）
- 保持你的链接标签尽可能短-长链接尤其惹恼屏幕阅读器用户，他们必须听到整件事读出来。

#### 尽可能使用相对链接

- 首先，检查代码要容易得多——相对URL通常比绝对URL短得多，这使得阅读代码更容易。
- 其次，在可能的情况下使用相对URL更有效。当使用绝对URL时，浏览器首先通过[DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS)（见[万维网是如何工作的](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)）查找服务器的真实位置，然后再转到该服务器并查找所请求的文件。另一方面，相对URL，浏览器只在同一服务器上查找被请求的文件。因此，如果你使用相对URL做的绝对URL，你就不断地让你的浏览器做额外的工作，这意味着它的效率会降低。

#### 链接到非html资源 ——留下清晰的指示

当链接到一个需要下载的资源（如PDF或Word文档）或流媒体（如视频或音频）或有另一个潜在的意想不到的效果（打开一个弹出窗口，或加载Flash电影），你应该添加明确的措辞，以减少任何混乱。

#### 在下载链接时使用下载属性

当您链接到要下载的资源而不是在浏览器中打开时，您可以使用下载属性来提供一个默认的保存文件名。

#### HTML **<a>** type 属性

type 属性规定链接中指向的文档的 mime 类型：

```html
<a href="//www.runoob.com/" type="text/html">runoob.com</a>
```

type 属性规定目标文档的 MIME 类型。

只能在 href 属性存在时使用。

该属性是 HTML5 中 <a> 元素的新属性。

[MIME参考手册](http://www.w3school.com.cn/media/media_mimeref.asp)

### 电子邮件链接

当点击一个链接或按钮时，打开一个新的电子邮件发送信息而不是连接到一个资源或页面，这种情况是可能做到的。这样做是使用<a>元素和mailto：URL的方案。
其最基本和最常用的使用形式为一个mailto:link （链接），链接简单说明收件人的电子邮件地址。

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

实际上，邮件地址甚至是可选的。如果你忘记了（也就是说，你的`href`仅仅只是简单的"`mailto:`"），一个新的发送电子邮件的窗口也会被用户的邮件客户端打开，只是没有收件人的地址信息，这通常在“分享”链接是很有用的，用户可以发送给他们选择的地址邮件

```html
<a href="mailto:915@qq.com?cc=name2@rapidtables.com?bcc=name3@rapidtables.com&amp;subject=The%20subject%20of%20email &amp;body=The%20body%20of%20the%20email">
	Send mail with cc,bcc,subject and body
</a>
```

注：%20 是浏览器对于空格的编码

[mailto:HTML e-mail链接](https://blog.csdn.net/xuemingyuan88/article/details/51298957/)

这里有一些其他的示例`mailto`链接：

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

### 高阶文字排版

[高阶文字排版](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)

#### 描述列表

[描述列表](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#%E6%8F%8F%E8%BF%B0%E5%88%97%E8%A1%A8)

这种列表的目的是标记一组项目及其相关描述，例如术语和定义，或者是问题和答案等。

描述列表使用与其他列表类型不同的闭合标签— <dl>; 此外，每一项都用 <dt> (description term) 元素闭合。每个描述都用 <dd> (description description) 元素闭合。

浏览器的默认样式会在**描述列表的描述部分**（description description）和**描述术语**（description terms）之间产生缩进。MDN非常严密地遵循这一惯例，同时也鼓励关于术语的其他更多的定义（but also embolden the terms for extra definition）。

请注意：一个术语 `<dt>` 可以同时有多个描述 `<dd>`

#### 引用

##### 块引用

如果一个块级内容（一个段落、多个段落、一个列表等）从其他地方被引用，你应该把它用<blockquote>元素包裹起来表示，并且在cite属性里用URL来指向引用的资源。

##### 行内引用

行内元素用同样的方式工作，除了使用<q>元素

##### 引文

cite属性的内容听起来很有用，但不幸的是，浏览器、屏幕阅读器等等不会真的关心它，如果不使用JavaScript或CSS，浏览器不会显示cite的内容。如果你想要确保引用的来源在页面上是可用的，更好的方法是把<cite>元素放到引用元素旁边。这就意味着包含引用来源的名称——即引用的书的名字，或人的名字——但并不表示你不可以用同样的方式把要链接的文本放到<cite>元素中

#### 缩略语

另一个你在web上看到的相当常见的元素是<abbr>——它常被用来包裹一个缩略语或缩写，并且提供缩写的解释（包含在title属性中）。

#### 标记联系方式

HTML有个用于标记联系方式的元素——<address>。它仅仅包含你的联系方式，

但要记住的一点是，<address>元素是为了标记编写HTML文档的人的联系方式，而不是任何其他的内容。因此，如果这是Chris写的文档，上面的内容将会很好。

#### 上标和下标

当你使用日期、化学方程式、和数学方程式时会偶尔使用上标和下标。 <sup> 和<sub>元素可以解决这样的问题。

#### 显示计算机代码

有大量的HTML元素可以来标记计算机代码：

- <code>: 用于标记计算机通用代码
- < pre >:  对保留的空格（通常是代码块）——如果您在文本中使用缩进或多余的空白，浏览器将忽略它，您将不会在呈现的页面上看到它。但是，如果您将文本包含在< pre >< /pre >标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
- <var>: 用于标记具体变量名。
- <kbd>: 用于标记输入电脑的键盘（或其他类型）输入。
- <samp>: 用于标记计算机程序的输出。

#### 标记时间和日期

HTML 还支持将时间和日期标记为可供机器识别的格式的 <time> 元素。

常用表达：

> ```html
> <!-- 标准简单日期 -->
> <time datetime="2016-01-20">20 January 2016</time>
> <!-- 只包含年份和月份-->
> <time datetime="2016-01">January 2016</time>
> <!-- 只包含月份和日期 -->
> <time datetime="01-20">20 January</time>
> <!-- 只包含时间，小时和分钟数 -->
> <time datetime="19:30">19:30</time>
> <!-- 还可包含秒和毫秒 -->
> <time datetime="19:30:01.856">19:30:01.856</time>
> <!-- 日期和时间 -->
> <time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
> <!-- 含有市区偏移值的日期时间 -->
> <time datetime="2016-01-20T19:30+01:00">7.30pm, 20 January 2016 is 8.30pm in France</time>
> <!-- 调用特定的周 -->
> <time datetime="2016-W04">The fourth week of 2016</time>
> ```

