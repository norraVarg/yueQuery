#yueQuery
##Introduction
yueQuery is small framework for DOM manipulation using only native javascript.
##Install
1. Download the files in the "src"
2. Open demo.html file in a browser
3. Run command through firebug console or editing demo.js file and refresh the page.

##How to use
**$.create(string):** Create a DOM element or a node list from a text string. For example:<br/>
`$.create('<div class="someClass"></div>');`<br/>
`$.create('<div class="someClass"><div><h2>some text</h2></div></div>');`<br/>
**$(string):** Select DOM elements based on tag name, class or id. For example:<br/>
`$('div')` or `$('.someClass')` or `$('#id')`<br/>
**remove():** Remove DOM element. For example:<br/>
`$('div').remove()` or `$('.someClass').remove()` or `$('#id').remove()`<br/>
**append(string):** Append a child to a DOM element. For example:<br/>
**prepend(string):** Prepend a child to a DOM element. For example:<br/>
**addClass(string):** Add a class to the elements. For example:<br/>
**removeClass(string):** Remove a class from the elements. For example:<br/>
**toggleClass(string):** Toggle the class of the elements. For example:<br/>
**replaceClass(string, string)** Replace the an exsiting class with a new class to the elements. For example:<br/>
