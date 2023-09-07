# CSS
**CSS (Cascading Style Sheets)** is a language used to style and format the visual presentation of HTML content.
It allows you to control the colors, fonts, spacing, layout, and other visual aspects of your web page.


## HOW TO ADD CSS
There are three ways to add CSS
1. Inline
2. Internal 
3. External

### Inline
Inline styles are added directly within HTML elements using the style attribute. This method is suitable for applying unique styles to specific elements. However, it's not recommended for extensive styling as it can clutter your HTML code and make it harder to maintain.
```html
<p style="color: blue;">This is blue text.</p>
```

### Internal CSS
Internal CSS is placed within a <style> tag in the <head> section of the HTML document. This method is useful when you want to apply styles to a specific page and keep the styles separate from other pages. It's a step towards better organization compared to inline styles. 
```html
<head>
    <style>
        p{color:red;}
    </style>
</head>
```

### External CSS:
External CSS involves creating a separate CSS file and linking it to your HTML document using the <link> tag. This method is highly recommended for larger projects and when you want to maintain a consistent style across multiple pages. It promotes separation of concerns and allows for better reusability.
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
## CSS SELECTORS
Selectors in CSS are used to target specific HTML elements that you want to style. Selectors allow you to apply styles to individual elements, groups of elements, or even all elements of a certain type. CSS selectors play a crucial role in determining which elements will be affected by the styles you define.

### Element Selectors:
Element selectors target specific HTML elements by their tag name. They apply styles to all instances of that element in the document.
```css
p {
  color: blue;
}
```

### Class Selectors:
Class selectors target elements with a specific class attribute. They allow you to apply the same style to multiple elements without affecting other elements with the same tag name.
```css
.highlight {
  background-color: yellow;
}
```

### ID Selectors:
ID selectors target a specific element with a unique id attribute. Unlike classes, id should be unique within the document.
```
#header {
  font-size: 24px;
}
```

### Attribute Selectors:
```
<h2 draggable="true">heading</h2>

p[draggable]{
	color:red;
	{
```

### Universal Selector
```
*{
    color:red;
}
```
## FORMATTING FONTS
### PIXELS AND POINTS
We could either use pixels or points. 

20px - pixels
20pt - points

### EM AND REM
em and rem are units of measurement in CSS that are used for specifying sizes. They are particularly useful for defining font sizes and other dimensions in a way that makes your design more flexible and responsive.
Here's what each unit means:

### em (Relative to Parent Element):
	- em is a relative unit of measurement that's relative to the font size of its parent element.
	- If you set an element's font size to 1em, it will inherit the font size of its parent element. If the parent element has a font size of 16px, the child element will also be 16px.
	- If you set an element's font size to 2em, it will be twice the size of its parent's font size. If the parent has a font size of 16px, the child will be 32px.
```
body {
  font-size: 16px;
}

p {
  font-size: 1.5em; /* 1.5 times the font size of the parent (24px) */
}
```

### rem (Relative to Root Element):
- rem is also a relative unit of measurement, but it's relative to the font size of the root element (usually the <html> element).
- This makes rem more predictable and easier to manage because it doesn't cascade like em. Changes to the font size of a parent element won't affect rem values.
```
html {
  font-size: 16px; /* 1rem is equal to 16px */
}

p {
  font-size: 1.5rem; /* 1.5 times the root font size (24px) */
}
```


## FONT WEIGHT
font-weight: 900;

## FONT FAMILY
fonts.google.com
You must always give a backup font. 

You can transform the text to be uppercase, lowecase, etc, with 
```
text-transform:uppercase;
text-transform:lowercase;
text-transform:none;
text-transform:capitalize;
text-transform:full-width;
text-transform:full-size-kana
```

## THE BOX MODEL
The CSS Box Model is a fundamental concept in web design and layout. It defines how HTML elements are rendered as boxes on a web page and how their content, padding, border, and margin interact to determine their size and spacing.

### Content:
- The innermost part of the box represents the actual content of the HTML element. This is where text, images, or other content is displayed.

### Padding:
- Padding is the space between the content and the element's border. It provides internal spacing within the box.
- You can set padding using properties like padding-top, padding-right, padding-bottom, and padding-left, or shorthand like padding.

### Border:
- The border is the next layer outside the padding. It acts as a boundary around the content and padding.
- You can set the border using properties like border-width, border-style, and border-color, or shorthand like border.

### Margin:
- Margin is the space between the border of an element and neighboring elements. It provides external spacing around the box.
- YOU can set margin using properties like margin-top, margin-right, margin-bottom, and margin-left, or shorthand like margin.

- 
