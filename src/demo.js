/* Demonstration Guidance */
/* The commented commands in this file can help you go through all the functions provided by yueQuery. Each section demonstrates a unique function. Uncomment them, save this file and refresh the web browser to see the changes (Firebug might be needed for some cases). Recommend to execute one section at a time to have a clear observation on the DOM manipulation result. The last section is a combination of multiple commands for DOM manipulation. Of course, you are welcome to make your own combination to for DOM manipulation. */

(function(){
    window.onload = function (){
	/*  Create a node list from a text string. */
	// var nl = $.create('<div id="demoDiv" class="demo-class">demo div</div>');
	// console.log(nl);

	/* Select DOM elements based on tag name, class or id, or select a node list. */
	// console.log($('div')); console.log($('.class1')); console.log($('#div-2'));
	// var nl = $.create('<div>demo div</div>'); console.log($(nl));
	
	/* Remove DOM element. */
	// $('.class2').remove();

	/* Append a child or node a list to a DOM element. */
	// $('#div-1').append('<div class="class5">appended div<p>I am a p tag.</p></div>');
	
	/* Prepend a child or node a list to a DOM element. */
	// $('#div-1').prepend('<div class="class5">appended div<p>I am a p tag.</p></div>');
	/* Add new classes to the elements. */
	// $('li').addClass('class5 font-italic text-color-blue');
	
	/* Remove a class from the elements. */
	// $('body div').removeClass('class1');
	
	/* Toggle the class of the elements. */
	// $('#div-1 div').toggleClass('class3');
	
	/* Replace the an exsiting class with a new class to the elements. */
	// $('#div-2 h2').replaceClass('text-color-blue', 'text-color-red');

	/* Set the text color of the elements. */
	// console.log($('#div-2 h2').styleColor('#000000'));

	/* Get (when the argument is not provived) or set the html of the elements. */
	//  console.log($('div').html()); // Get innerHTML
	//  $('#div-1-1').html('<div>I am a div tag and ".html(str)" put me here to over write content</div><p>Me too but I am a p tag</p>'); // Set innerHTML

	/* The following is a simulated scenario to accomplish DOM manipulation with yueQuery. Let's say we want to create an element and a node list, then put some stylings on them and append them to the "demo" sheet. */
	// var el = $.create('<div class="class4">I am div No.1</div>');
	// var nl = $.create('<div class="class5">I am new div No.2<p>I am a p tag</p></div><div class="class6">I am new div No.3</div>');
	// $(el).addClass('font-bold').toggleClass('font-italic').append($(nl).styleColor('blue'));
	// $('#div-2').prepend(el);
    }
})();
