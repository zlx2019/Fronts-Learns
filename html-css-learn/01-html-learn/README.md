# HTML
> HTML(Hyper Text Markup Language)超文本标记语言是Web最基本的构建块。它定义了 Web 内容的含义和结构。

一个标准的网页结构
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
```
- `<!DOCTYPE html>`
    - 指定当前网页(文档)的版本类型,表示当前页面时遵循HTML5规范的
- `<html></html>`
    - 从html头标签至根标签之内,表示网页结构区域,当前页面的结构描述全部定义在这里.
    - html又分为两大部分:
        - head
        - body
### 元素(标签)之间的关系
大致分为以下几种:
- **父元素**

  当前元素的上级元素。
- **子元素**

  当前元素下的下层元素。
- **祖先元素**

  将当前元素包含在内的**所有**(包含嵌套)上级元素都称为组选元素。
- **后代元素**

  当前元素所包含的**所有**(包含嵌套)下层元素都是后代元素。
- **兄弟元素**

  当前元素的所有同级元素,拥有同一个父元素的元素被称之为兄弟元素。
<hr>

### 块元素与行内元素
在html中,元素可以被分为块元素和行内元素:
- **块元素**(block)
    - 块元素会独占页面的一行,自上向下垂直排列。
    - 块元素通常用来对网页进行垂直布局,将页面分成一块一块。
- **行内元素**
    - 行内元素只会占据自身的大小,自左向右水平排列。
    - 