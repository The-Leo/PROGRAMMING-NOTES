# HTML NOTES

## Resources You may need**
[diffchecker.com](http://diffchecker.com/) - Checks the difference between codes
[picsum.photos](http://picsum.photos/) - Generates random pictures for your dummy projects
[Mozilla Developer Network](https://developer.mozilla.org/)

### VS Code extensions to preview
Live Preview
Prettier

# Hyper Text Markup Language (HTML)
HTML, which stands for Hypertext Markup Language, is the standard markup language used to create web pages and define their structure and content. HTML is an essential technology for web development. 

**Markup Language:** HTML is a markup language, not a programming language. It consists of a set of markup tags and attributes that you use to structure the content of a web page. These tags provide instructions to web browsers on how to display the content.

**Hierarchical Structure:** HTML documents have a hierarchical structure organized into elements. Elements are defined using opening and closing tags, such as <html>, <head>, and <body>. Elements can nest within each other to create a structured document.

**Text and Multimedia:** HTML allows you to include various types of content on a web page, including text, images, links, videos, audio, and more. You use different HTML elements and attributes to embed and format these types of content.

**Hyperlinks:** HTML includes elements like <a> (anchor) that create hyperlinks, enabling users to navigate between web pages and resources. Hyperlinks are fundamental for connecting web pages together.

**Semantic Markup:** HTML provides semantic elements (e.g., <header>, <nav>, <article>, <footer>) that describe the meaning and structure of content. Semantic HTML helps search engines and assistive technologies better understand web page content.

**Cross-Browser Compatibility:** HTML is designed to work consistently across different web browsers, ensuring that web pages look and function correctly for users regardless of their browser choice.

**Versioning:** HTML has gone through various versions, with HTML5 being the most recent major version as of my knowledge cutoff date in September 2021. HTML5 introduced new features and elements for modern web development, including multimedia support, form enhancements, and improved semantics.

**CSS and JavaScript Integration:** HTML is often used in conjunction with CSS (Cascading Style Sheets) for styling web pages and JavaScript for adding interactivity and functionality. These technologies work together to create rich, dynamic web applications.

**Server-Client Interaction:** HTML forms provide a way for users to submit data to web servers, enabling actions like user registration, login, and data retrieval. This interaction is fundamental for web applications.


## Tags
**Tag** is a fundamental element used to define and structure content on a web page. HTML tags are enclosed in angle brackets < > and come in pairs: an opening tag and a closing tag. They are used to describe the type and purpose of elements on a web page.

Tags - <h1> - opening tag
</h1> closing tag

## Elements
An HTML element typically consists of an opening tag, content, and a closing tag. Elements are fundamental building blocks used to create the structure and content of web pages. 


## THE DOCTYPE DECLARATION
All pages should begin with `<!DOCTYPE html>`. This special string is known as a *declaration* and ensures the browser tries to meet industry-wide specifications.

**<!DOCTYPE html>:** This declaration, often called a "doctype," specifies the type and version of the HTML being used. In this case, html indicates HTML5, the latest version of HTML.

Add this declaration as the first line of the code.

## THE HTML ELEMENT 
The `<html>` element is the root element of an HTML document. It encloses all the content that should be treated as HTML on a web page. Every HTML document must start with an opening `<html>` tag and end with a closing `</html>` tag. The entire structure of the HTML document is contained within these tags.

```
<html>

</html>
```

## THE HEAD ELEMENT
The `<head>` element is an essential part of an HTML document, and it is used to provide **metadata** and other non-visible information about the web page. It contains elements that provide instructions to browsers and search engines, as well as information that helps enhance the accessibility and presentation of the content.

```
<head>

</head>
```

**Title:** The `<title>` element is used to define the title of the web page. It appears in the browser's title bar or tab and is also used by search engines to display the title of the page in search results.

```
<title>title of page</title>

```

**Metadata:** The `<meta>` element is used to provide metadata about the HTML document. This includes character encoding, author information, description, and keywords. One commonly used attribute is `charset`, which defines the character encoding for the document.

```
<meta charset="UTF-8" />
```

**Viewport Configuration:** The `<meta>` element can also be used to configure the viewport settings, especially for responsive design and mobile devices. This is done using the `viewport` meta tag.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">

```

**External Resources:** The `<link>` element is used to link external resources such as stylesheets (CSS) and web fonts to the HTML document. It's typically placed within the `<head>` to ensure proper styling and font loading.

```
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
</head>

```

**Favicon:** The `<link>` element can also be used to define the favicon for the web page, which is the small icon displayed in the browser tab or bookmark bar.

```
<head>
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>

```

**Other Resources:** Additional elements like <base> and <script> may also be included in the <head> section to provide base URLs and include JavaScript files, respectively.\


## THE MAIN ELEMENT
The `<main>` element in HTML serves a specific semantic purpose: it is used to identify the main content of a web page. This element was introduced in HTML5 to improve the semantic structure of web documents, making them more accessible and understandable for both human readers and assistive technologies.

Here's the primary purpose and use of the `<main>` element:

1. **Semantic Structure:** `<main>` helps define the structure of a web page by explicitly marking the main content area. This makes it clear to both developers and automated tools where the primary content of the page resides.
2. **Accessibility:** Assistive technologies like screen readers can benefit from the `<main>` element because it helps them identify and navigate to the main content of a page more efficiently. This enhances the overall accessibility of your website.
3. **Search Engine Optimization (SEO):** Search engines may also use the `<main>` element as a signal to determine the main content of a page, which can affect search rankings.

Here's an example of how you might use the `<main>` element in an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Web Page</title>
</head>
<body>
    <header>
        <!-- Header content goes here -->
    </header>

    <nav>
        <!-- Navigation menu goes here -->
    </nav>

    <main>
        <!-- Main content of the page goes here -->
        <h1>Welcome to My Web Page</h1>
        <p>This is the main content area where you'll find the core information of the page.</p>
    </main>

    <aside>
        <!-- Sidebar content goes here -->
    </aside>

    <footer>
        <!-- Footer content goes here -->
    </footer>
</body>
</html>
```
In this example, the `<main>` element encapsulates the primary content of the web page, making it clear that this is where the core information resides. This improves the document's structure, accessibility, and search engine visibility.

## THE HEADER ELEMENT

```
<h1>Heading</h1>
```
This ranges from <h1> to <h6>

Do not go beyond h6.

Do not skip header elements , let's say, you jump from h1 to h3.

## THE SECTION ELEMENT
The `<section>` element in HTML serves a specific semantic purpose: it is used to define a thematic grouping of content within a web page. This element was introduced in HTML5 to enhance the structure and semantics of web documents. Here's the primary purpose and use of the `<section>` element:

1. **Semantic Structure:** `<section>` helps you create a clear and meaningful structure for your web page's content. It's used to identify and group related content together, typically organized around a common theme or topic.
2. **Accessibility:** By using the `<section>` element, you provide a way for assistive technologies like screen readers to understand the organization of your content. This improves the accessibility and usability of your website.
3. **Styling and Scripting:** You can use `<section>` elements to apply specific styles or scripts to groups of related content. It provides a convenient way to target and manipulate content sections via CSS or JavaScript.
4. **Search Engine Optimization (SEO):** Search engines may use the `<section>` element as a semantic clue to better understand the content and structure of your web page. Properly marked-up sections can potentially improve search rankings.

Here's an example of how you might use the `<section>` element in an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Article</title>
</head>
<body>
    <header>
        <h1>My Article Title</h1>
    </header>

    <nav>
        <!-- Navigation menu goes here -->
    </nav>

    <article>
        <section>
            <h2>Introduction</h2>
            <p>This section provides an introduction to the topic of the article.</p>
        </section>

        <section>
            <h2>Main Content</h2>
            <p>This section contains the primary content of the article.</p>
        </section>

        <section>
            <h2>Conclusion</h2>
            <p>This section summarizes the main points of the article and provides a conclusion.</p>
        </section>
    </article>

    <aside>
        <!-- Sidebar content goes here -->
    </aside>

    <footer>
        <!-- Footer content goes here -->
    </footer>
</body>
</html>

```
In this example, the `<section>` elements are used to group content sections within an `<article>` element. Each `<section>` represents a thematic grouping of content, enhancing the semantic structure of the page. This makes it clear to both human readers and machines that the content is organized into distinct sections related to the article's topic.

## THE PARAGRAPH ELEMENT

```
<p> This is a paragraph </p>
```

## VOID ELEMENTS

```
<hr /> - Horizontal rule element - Draws a line in between paragraph
```

```
<br /> - breaks to a new line
```

## ORDERED AND UNORDERED LISTS

```
<ul>
	<li>List1</li>
	<li>List 2</li>
</ul>

<ol>
    <li>list1</li>
    <li>list2</li>
</ol>

```

**The value Attribute:**

You can determine the value number of the list with the value attribute

```
<li value="2">Item</li>

```

This will ensure that the list is numbered at 2.

**NESTING AND INDENTATION**

```
    <h2>A Complex Nested List</h2>
    <ul>
        <li>A</li>
        <li>B
            <ol>
                <li>B1</li>
                <li>B2
                    <ul>
                        <li>B2a
                            <ul>
                                <li>B2aa</li>
                                <li>B2ab</li>
                            </ul>
                        </li>
                        <li>B2b</li>
                        <li>B2c</li>
                    </ul>
                </li>
                <li>B3
                    <ol>
                        <li>B31</li>
                        <li>B32</li>
                    </ol>
                </li>
            </ol>
        </li>
        <li>C</li>
    </ul>

```

Indentation aids you to see code clearly. It gives a good visual feel of your code. Else everything will seem jumbled up.

## ANCHOR ELEMENTS

```
<a>Text</a>

```

Anchor elements can take attributes

```
<a href = "Link">Text to link</a>

```

The attributes go in the opening tag. The value of the attribute should be in quotation marks. Just as shown above.

## TARGET ATTRIBUTE

This cause the link to open in a new tab

```
<a href="actual link" target="_blank">text for link<a/>

```

**THE MOZILLA DEVELOPER NETWORK GIVES A LIST OF MORE ATTRIBUTES.**

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol

## THE IMAGE ELEMENT

[picsum.photos](http://picsum.photos/) This site give random photos.

```
<img src="url" alt="description of image" />

```

src means source

the alt attribute is a good practice to aid screen readers.

## IMAGE AS A LINK**

```
<a href="link_image_will_lead_to"><img src="image_link" alt ="image_description" width=""/></a>

```

## FIGURE ELEMENT**

The `<figure>` element is an HTML5 semantic element used to encapsulate a piece of content, typically an image, illustration, diagram, video, audio, or similar media, along with its caption. It provides a way to associate a caption or description with the content it contains, making it particularly useful for enhancing accessibility and organizing visual content on a webpage.

The `<figure>` element is often used in combination with the `<figcaption>` element, which is placed inside the `<figure>` element and provides the caption or description for the associated content. Here's how the `<figure>` element is structured:

```
<figure>
  <img src="image.jpg" alt="Description of the image">
  <figcaption>This is the caption for the image.</figcaption>
</figure>
```

## FILE PATHS

**./ - Current directory**

**../Parent Directory**

**MULTI-PAGE WEBSITES**

You must know file paths to create multi-page websites

Usually this is the arrangement:

*Project directory* contains the main *index.html* file. This is usually the home page.

Within the project directory, you will also find the *assets* directory which contains an *image* directory. All images of the project goes here.

Within the project directory, you will find another directory usually called *public.* This directory contains other html pages of the project.


## HTML BOILER PLATE

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset = "UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>title</title>
</head>
<body>
<h1>Hello Leonard</h1>

</body>

</html>

```

## EMPHASIS AND STRONG ELEMENT

```
<em>Emphasis</em>
```

```
<strong>bold</strong>
```

## SECTION ELEMENT

Used to demarcate sections



# CREATING FORMS

## FORM ELEMENT

Used to demarcate a section for a form

```
<form>
</form>
```

## ACTION ATTRIBUTE

The `action` attribute is used in HTML `<form>` elements to specify the URL or endpoint to which the data from the form should be submitted when the user submits the form. This attribute defines the server-side script or program that will process the form data and generate a response based on the provided input.

```
<form action="hyperspace.com">
</form>
```

## INPUT ELEMENT

The `input` element allows you several ways to collect data from a web form. It is usually nested in the form element.

```
<form>
<input />
</form>
```

There are many kinds of inputs you can create using the `type` attribute. You can easily create a password field, reset button, or a control to let users select a file from their computer.

```
<form>
<input type="text" />
</form>
```

In order for a form's data to be accessed by the location specified in the `action` attribute, you must give the text field a `name` attribute and assign it a value to represent the data being submitted. For example, you could use the following syntax for an email address text field: `<input type="text" name="email">`.

**Placeholder text** is used to give people a hint about what kind of information to enter into an input.

```
<input type="text" name="email" placeholder="url"/>
```

**The Required Attribute**

To prevent a user from submitting your form when required information is missing, you need to add the `required` attribute to an `input` element. There's no need to set a value to the `required` attribute. Instead, just add the word `required` to the `input` element, making sure there is space between it and other attributes.

```html
<input type="text" name="email" placeholder="text goes here" required/>
```

**Button Element**

Use the `button` element to create a clickable button. For example, `<button>Click Here</button>` creates a button with the text `Click Here`.

The default behavior of clicking a form button without any attributes submits the form to the location specified in the form's `action` attribute.

Even though you added your button below the text input, they appear next to each other on the page. That's because both `input` and `button` elements are *inline elements*, which don't appear on new lines.

The button you added will submit the form by default. However, relying on default behavior may cause confusion. Add the `type` attribute with the value `submit` to the `button` to make it clear that it is a submit button.

```
<form action="hyperspace.com">
<input type="text" name="email" placeholder="text" required/>
<button type="submit">Submit</button>

</form>

```

**RADIO BUTTONS**

You can use radio buttons for questions where you want only one answer out of multiple options.

```
<input type="radio" /> Text
<input type="radio" /> Anothertext

```

**THE NAME ATTRIBUTE**

Notice that both radio buttons can be selected at the same time. To make it so selecting one radio button automatically deselects the other, both buttons must have a `name` attribute with the same value.

```
<input type="radio" name="samevalue" /> Text
<input type="radio" name="samevalue" /> Anothertext

```

Add the `name` attribute with the value ... to the checkbox `input` element.

While you won't notice this in the browser, doing this makes it easier for a server to process your web form, especially when there are multiple checkboxes.

**THE VALUE ATTRIBUTE**

If you select the `Indoor` radio button and submit the form, the form data for the button is based on its `name` and `value` attributes. Since your radio buttons do not have a `value` attribute, the form data will include `samevalue=on`, which is not useful when you have multiple buttons.

Add a `value` attribute to both radio buttons. For convenience, set the button's `value` attribute to the same value as its `id` attribute.

```
<input id="indoor" type="radio" name="samevalue" value="indoor"/> Indoor
<input id="outdoor" type="radio" name="samevalue" value="outdoor"/> Anothertext

```

**LABEL ELEMENTS**

`label` elements are used to help associate the text for an `input` element with the `input` element itself (especially for assistive technologies like screen readers). For example, `<label><input type="radio"> cat</label>` makes it so clicking the word `cat` also selects the corresponding radio button.

```
<label><input type="radio"/>Text </label>

```

**THE ID ATTRIBUTE**

The `id` attribute is used to identify specific HTML elements. Each `id` attribute's value must be unique from all other `id` values for the entire page.

```
<label><input type="radio" id="indoor" /></label>

```

**FIELDSET ELEMENT**

The `fieldset` element is used to group related inputs and labels together in a web form. `fieldset` elements are *block-level elements*, meaning that they appear on a new line.

```
<fieldset>
    <input type="radio" name="samevalue" value="indoor"/> Indoor
    <input type="radio" name="samevalue" value="outdoor"/> Anothertext
</fieldset>

```

**THE LEGEND ELEMENT**

The `legend` element acts as a caption for the content in the `fieldset` element. It gives users context about what they should enter into that part of the form.

```
<fieldset>
    <legend>content</legend>
    <input type="radio" name="samevalue" value="indoor"/> Indoor
    <input type="radio" name="samevalue" value="outdoor"/> Anothertext
</fieldset>

```

**CHECKBOXES**

Forms commonly use checkboxes for questions that may have more than one answer. For example, here's a checkbox with the option of `tacos`: `<input type="checkbox"> tacos`.

**THE FOR ATTRIBUTE**

There's another way to associate an input element's text with the element itself. You can nest the text within a label element and add a for attribute with the same value as the input element's id attribute.

```
<input type="checkbox" id="loving" /> <label for="loving">Loving </label>

```

**THE CHECKED ATTRIBUTE**

In order to make a checkbox checked or radio button selected by default, you need to add the `checked` attribute to it. There's no need to set a value to the `checked` attribute. Instead, just add the word `checked` to the `input` element, making sure there is space between it and other attributes.

```
<input id="id_value" type="radio" value="id_value" name="name_value" checked /><label for="id_value">Text</label>

```

**THE FOOTER ELEMENT**

```
<footer>
<p>text <a href="link">TEXT WHICH IS A LINK</a></p>
</footer>

```

To be continued. 