#yueQuery
##Introduction
yueQuery is small framework for DOM manipulation using only native javascript.
##Featuers
It's small, fast and **chainable** just like jQuery!
##Install
1. Download the files in the "src"
2. Open demo.html file in a browser
3. Run command through firebug console or editing demo.js file and refresh the page.

##How to use
**$.create(string):** Create a DOM element or a node list from a text string. For example:<br/>
`$.create('<div class="someClass"></div>');`<br/>
`$.create('<div class="someClass"><div><h2>some text</h2></div></div>');`<br/>
**$(string/nodes):** Select DOM elements based on tag name, class or id, or select a node list. For example:<br/>
`$('div');` or `$('.someClass');` or `$('#id');` The type of the argument is string.<br/>
`$($.create('<div class="someClass"></div><div class="otherClass"></div>'));` The type of the argument is node list.<br/>
**remove():** Remove DOM element. For example:<br/>
`$('div').remove();` or `$('.someClass').remove();` or `$('#id').remove();`<br/>
**append(string/nodes):** Append a child or node list to a DOM element. For example:<br/>
`$('div').append('<p>I am a p tag.</p><div><h3>I am a h3 tag.</h3>some text</div>');` The type of the argument is string.<br/>
`$('div').append($.create('<div><h2>some text</h2></div><span>some text</span>'))`' The type of the argument is node list.<br/>
**prepend(string/nodes):** Prepend a child or node list to a DOM element. For example:<br/>
`$('div').prepend('<ul><li>List 1</li><li>List 2</li></ul>');` The type of the argument is string.<br/>
`$('div').prepend($.create('<p>some text</p><div></div>'))`' The type of the argument is node list.<br/>
**addClass(string):** Add new classes to the elements. For example:<br/>
`$('#ul').addClass('newClass1 newClass2 newClass3');`<br/>
**removeClass(string):** Remove a class from the elements. For example:<br/>
`$('#p').removeClass('someClass');`<br/>
**toggleClass(string):** Toggle the class of the elements. For example:<br/>
`$('#span').toggleClass('someClass');`<br/>
**replaceClass(string, string):** Replace the an exsiting class with a new class to the elements. For example:<br/>
`$('#h1').replaceClass('oldClass', 'newClass');`<br/>
**html([string]):** Get (when the argument is not provived) or set the html of the elements. For example:<br/>
`$('div#id').html()` or `$('div.someClass').html('<div>some text<div><h2>some other text</h2></div></diV>')`<br/>
**styleColor([string]):** Get (when the argument is not provived) or set the text color of the elements. For example:<br/>
`$('p').styleColor('#aabbcc');`<br/>
##More examples
