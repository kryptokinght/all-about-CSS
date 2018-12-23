# Things you forget about CSS
A curated list of **CSS** topics which you often forget about **CSS** if you are not a seasoned frontend web developer. Read this article at least once or twice every week for two to three months and your CSS will be suercharged. :smile: :relaxed:

## Know about the `<link>` tag

`<link rel="stylesheet" href="/main.css" type="text/css">`

* `rel="stylesheet"` means the relation of this file referenced by the link tag, what the file actually is.
* `href="/main.cs"` gives the location of the css file. Can be an http(s) link as well.
* `type="text/css"` gives the MIME type of the file.
  
## Selectors
![spcial selectors](/screenshots/Screenshot&#32;from&#32;2018-12-21&#32;05-19-45.png)

### Specificity of CSS selectors

[A nice article on CSS specificity.](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

[An even more awesome article on CSS specificity.](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html)

A stack Overflow answer on precedence of CSS selectors
![Screenshot of a stackoverflow answer](/screenshots/Screenshot&#32;from&#32;2018-12-21&#32;04-56-05.png)

## Vertical margin collapse
The verical margin between two elements one above the other is the maximum of the margin-bottom of the top element and margin-top of the bottom element.

## Box-width
The width set for an element is fixed. Any border, margin, or padding added to the element will add to the width.
    Eg : `width: 250px;`

## Display
The display property deals with how the elements are laid out on the page - are they on the same line in an horizontal fashion or one after the other. Here are some of the properties:
* `none` : Element is removed from the page, its space is also removed
* `inline` : the elements are displayed in an inline fashion(on the same line). It looses some of the box properties like `width`.
* `inline-block` : the elements are displayed on the same line but box properties like `width` are preserved.
* `block` : Elements are displayed in a vertical fashion.

## Visiblity
Specifies wether the boxes will be rendered or not, though it still affects the layout of the page even if the boxes are not rendered.
    Eg: `visiblity: hidden;`

## Fonts
The different categories of fonts are:
1. serif
2. sans-serif
3. monospaced
4. cursive
5. fantasy
   
The different font properties are:
* `font-style` 
    
    Eg: `fon-style: italic;`
* `font-family` 
    
    Eg : `fon-family: Helvetica;`
* `font-size` 
    
    Eg : `fon-family: 0.8em;`

### Text Properties
*   text-indent
*   letter-spacing
*   word-spacing
*   line-height
*   text-align
*   text-transform
*   vertical-align
*   text-decoration

