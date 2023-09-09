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

![The Box Model](./images/boxmodel.gif)
- 


## CSS CASCADE - SPECIFICITY AND INHERITANCE
**Specificity:**

Specificity is a measure of how specific a CSS rule is in targeting a particular HTML element. It determines which rule takes precedence when there are conflicting rules that apply to the same element.

Specificity is calculated based on the combination of selectors used in a rule. Here's a general hierarchy of specificity, from lowest to highest:

- Type Selector (e.g., p, div, a): These selectors are the least specific and have the lowest specificity.
- Class Selector (e.g., .my-class): Selectors based on class have a higher specificity than type selectors.
- ID Selector (e.g., #my-id): Selectors based on IDs have an even higher specificity than class selectors.
- Inline Styles (e.g., style="..."): Inline styles have the highest specificity and will override any other style applied to the element.
- !important

```css
p{
	color: blue !important
	}
p{
	color:red;
	}

```

## COMBINING CSS SELECTORS

In CSS, you can combine CSS selectors to create more specific and targeted styles for HTML elements. Combining selectors allows you to apply styles to elements that meet multiple criteria simultaneously.

**Direct Descendant Selector**

```css
parent > direct-child{
	color:blue;
	}
```

**Sibling Selectors**

```css
h1 + p {
  margin-top: 20px;
}
```

This rule selects `<p>` elements that immediately follow `<h1>` elements.

```css
h2 ~ p {
  color: blue;
}
```

This rule selects all <p> elements that are siblings (i.e., on the same level) of <h2> elements.

**Descendant Selector**

It does not matter the level of the descendant. it will be selected. There is no space between the selectors.

```
div li{
	color:blueviolet;
	}

```

In this case, all li elements which are descendants of div will be changed to a blue color.

**Multiple Selectors**

```
h1, h2{
	color:firebrick;
	}

```

**Chaining Selectors**

<h1 class="box" class="inbox" id="1">Heading</h1>

```
h1.box.inbox#1{
	color:seagreen;
	}

```

## CSS POSITIONING

CSS positioning is a crucial aspect of web design and layout. It allows you to control the placement and positioning of HTML elements within a web page. CSS provides several properties and values for positioning elements precisely.

**Static**

- Elements are positioned according to the normal document flow.
- The top, right, bottom, and left properties have no effect on statically positioned elements.

```css
.static-element {
  position: static;
}

```

**Relative**

- Elements are positioned relative to their normal position in the document flow.
- You can use the top, right, bottom, and left properties to offset the element from its original position.

```css
.relative-position{
	position:relative;
	top:10px;
	left:20px;
	}

```

**Absolute**

- Elements are removed from the normal document flow and positioned relative to their nearest positioned ancestor (an ancestor with a position other than static) or the initial containing block.
- You can use the top, right, bottom, and left properties to position the element precisely.

```css
.absolute-position{
	position:absolute;
	top:10px;
	}
```

**z-index**

- The z-index property controls the stacking order of positioned elements.
- Elements with a higher z-index value appear in front of elements with a lower value.

```css
.element1 {
  position: absolute;
  z-index: 1;
}

.element2 {
  position: absolute;
  z-index: 2;
}
```

**Fixed**

- Elements are removed from the normal document flow and positioned relative to the viewport (the browser window).
- Fixed elements remain in the same position even when the page is scrolled.

```css
.fixed-element {
  position: fixed;
  top: 20px;
  right: 20px;
}
```

**Sticky Positioning**

- Elements are initially in the normal document flow, but they become fixed once they reach a specified scroll position.
- This is often used for creating "sticky" headers or sidebars.

```css
.sticky-element {
  position: sticky;
  top: 0;
}
```

## CSS DISPLAY

CSS `display` is a property that determines how an HTML element should be rendered in terms of its box type and layout behavior.

**block:**

- Elements with **display: block** create a rectangular "block-level" box that spans the full width of their parent container.
- These elements typically start on a new line and stack vertically.
- Examples include <div>, <p>, <h1>, and <ul>.

**inline:**

- Elements with display: inline generate "inline" boxes that flow within the text content.
- They do not start on a new line and only take up as much width as necessary.
- Examples include <span>, <a>, <strong>, and <em>.

**inline-block:**

- Elements with display: inline-block combine properties of both block and inline elements.
- They flow inline but can have their width and height properties set, allowing for block-level styling.
- This is often used for creating elements like buttons or navigation menus.

**none:**

- Elements with display: none are completely removed from the document flow and are not rendered on the page.
- They are effectively hidden.
- This property is often used with JavaScript to hide and show elements dynamically.

**flex:**

- Elements with display: flex become "flex containers," and their children become "flex items."
- Flex containers allow you to create flexible layouts by distributing space among their children.
- This is particularly useful for creating responsive designs and complex alignments.

**grid:**

- Elements with display: grid become "grid containers," and their children become "grid items."
- Grid containers enable you to create grid-based layouts with precise control over rows and columns.
- Grid layouts are powerful for creating complex and responsive designs.


## CSS FLOAT

The CSS `float` property is used to control the horizontal alignment and positioning of block-level elements within their containing element. It's primarily used for creating layouts where elements can be floated to the left or right, allowing text and other content to wrap around them.

```css
.float-left {
  float: left;
}

.float-right {
  float: right;
}
```

**Clearing Floats:**

- When elements are floated, they can affect the layout of their container and other elements. To prevent this, you often need to clear floats.
- The clear property is used to control how elements interact with floated elements. It can take values like left, right, both, or none.

```
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

```

**Issues with Floats:**

- While float can be useful for creating certain layouts, it has some drawbacks. Elements that are floated are taken out of the normal document flow, which can lead to issues with layout and positioning.
- To address these issues, other layout techniques like Flexbox and CSS Grid are often preferred for modern web design, as they offer more control and flexibility.

**Clearing Floats for Parent Elements:**

- When you float child elements within a parent element, the parent may not expand to contain its floated children. To ensure that the parent element wraps around its children, you can use the overflow property set to auto or hidden, or a clearfix as mentioned earlier.

```css
.parent {
  overflow: hidden; /* or overflow: auto; */
}
```
