#yueQuery
##Introduction
yueQuery is an experimental framework for DOM manipulation using only native JavaScript.
##Featuers
No dependencies<br/>
Chainable<br/>
Easy to use (similar to jQuery)<br/>
##Install
1. Download the yueQuery.js file in the "src" repository.
2. Import the file in your .html file.

##Demostration
1. Please download all the files in the "src" repository.
2. Open demo.html file in your web browser.
3. Read and follow through the demonstration guidance in the demo.js file (recommended), or write your own commands there using the following API.
4. Save the file and refresh the browser to see the changes.


##How to use
**$.create(string):** Create a node list from a text string. For example:<br/>
`$.create('<div class="someClass"><div><h2>some text</h2></div></div>');`<br/><br/>
**$(string/nodes):** Select DOM elements based on tag name, class or id, or select a node list. For example:<br/>
`$('div');` or `$('.someClass');` or `$('#id');` The type of the argument is string.<br/>
`$($.create('<div class="someClass"></div><div class="otherClass"></div>'));` The type of the argument is node list.<br/><br/>
**remove():** Remove DOM element. For example:<br/>
`$('div').remove();` or `$('.someClass').remove();` or `$('#id').remove();`<br/><br/>
**append(string/nodes):** Append a child or node a list to a DOM element. For example:<br/>
`$('div').append('<p>I am a p tag.</p><div><h3>I am a h3 tag.</h3>some text</div>');` The type of the argument is string.<br/>
`$('div').append($.create('<div><h2>some text</h2></div><span>some text</span>'));`' The type of the argument is node list.<br/><br/>
**prepend(string/nodes):** Prepend a child or node a list to a DOM element. For example:<br/>
`$('div').prepend('<ul><li>List 1</li><li>List 2</li></ul>');` The type of the argument is string.<br/>
`$('div').prepend($.create('<p>some text</p><div></div>'));` The type of the argument is node list.<br/><br/>
**addClass(string):** Add new classes to the elements. For example:<br/>
`$('div').addClass('newClass1 newClass2 newClass3');`<br/><br/>
**removeClass(string):** Remove a class from the elements. For example:<br/>
`$('div').removeClass('someClass');`<br/><br/>
**toggleClass(string):** Toggle the class of the elements. For example:<br/>
`$('div').toggleClass('someClass');`<br/><br/>
**replaceClass(string, string):** Replace the an exsiting class with a new class to the elements. For example:<br/>
`$('div').replaceClass('oldClass', 'newClass');`<br/><br/>
**styleColor(string):** Set the text color of the elements. For example:<br/>
`$('div').styleColor('#aabbcc');`<br/><br/>
**html([string]):** Get (when the argument is not provived) or set the html of the elements. For example:<br/>
`$('div').html()` or `$('div.someClass').html('<div>some text<div><h2>some other text</h2></div></diV>')`<br/><br/>
