window.$ = (function (){
    function _$ (arg){
	return new _$.prototype.init(arg);
    }

    _$.prototype.init = function(arg){
	var elements;
	if (typeof arg ==='string'){
	    elements = document.querySelectorAll(arg);
	} else {
	    elements = arg;
	}
	for (var i = 0; i < elements.length; i++){
	    this[i] = elements[i];
	}
	this.length = elements.length;
    }

    _$.create = function (str){
	var wrap = document.createElement('div');
	wrap.innerHTML = str;
	return wrap.childNodes;
    };

    /* DOM Manipulation Methods*/
    _$.prototype.remove = function (){
	for (var i = 0; i < this.length; i++){
	    this[i].parentElement.removeChild(this[i]);
	}
    };
    
    _$.prototype.addClass = function (className){
	var newClasses = className.split(' ');
	for (var i = 0; i < this.length; i++){
	    // ignore text node, only apply on element node.
	    if (this[i].nodeType !== 1){ continue; }
	    var classes = [];
	    if (this[i].className !== ''){
		classes = this[i].className.split(' ');
	    }
	    this[i].className = classes.concat(newClasses).join(' ');
  	}
	return this;
    };

    _$.prototype.removeClass = function (className){
    	for (var i = 0; i < this.length; i++){
	    // ignore text node, only apply on element node.
	    if (this[i].nodeType !== 1){ continue; }
    	    var classes = this[i].className.split(' ');
	    var newClasses = classes.filter(function(item){
		return item !== className;
	    });
	    this[i].className = newClasses.join(' ');
    	}
    	return this;
    };

    _$.prototype.toggleClass = function (className){
    	for (var i = 0; i < this.length; i++){
	    // ignore text node, only apply on element node.
	    if (this[i].nodeType !== 1){ continue; }
    	    var classes = [];
	    if (this[i].className !== ''){
		classes = this[i].className.split(' ');
	    }
	    var newClasses = classes.filter(function(item){
		return item !== className;
	    });
	    if (classes.length === newClasses.length){
		classes.push(className);
		this[i].className = classes.join(' ');
	    } else {
		this[i].className = newClasses.join(' ');
	    }
	}
    	return this;
    };

    _$.prototype.replaceClass = function (oldClass, newClass){
	for (var i = 0; i < this.length; i++){
	    // ignore text node, only apply on element node.
	    if (this[i].nodeType !== 1){ continue; }
	     // if element has no class, add new class anyway
	    if (this[i].className === ''){
		this[i].className = newClass;
	    } else {
		var classes = this[i].className.split(' ');
		var newClasses = classes.filter(function(item){
		    return (item !== oldClass);
		});
		// add new class when it is really "new"
		if (newClasses.indexOf(newClass) === -1){
		    newClasses.push(newClass);
		}
		this[i].className = newClasses.join(' ');
	    }
	}
	return this;
    }

    _$.prototype.append = function (arg){
	var nodes;
	if (typeof arg === 'string'){ // append string type elements
	    var wrap = document.createElement('div');
	    wrap.innerHTML = arg;
	    nodes = wrap.childNodes;
	} else { // append nodeList
	    nodes = arg;
	}
	for (var j = 0; j < nodes.length; j++){
	    for (var i = 0; i < this.length; i++){
		this[i].appendChild(nodes[j].cloneNode(true));
	    }
	}
	return this;
    };

    _$.prototype.prepend = function (arg){
	var nodes;
	if (typeof arg === 'string'){ //prepend string type elements
	    var wrap = document.createElement('div');
	    wrap.innerHTML = arg;
	    nodes = wrap.childNodes;
	} else { // prepend nodeList
	    nodes = arg;
	}
	for (var j = 0; j < nodes.length; j++){
	    for (var i = 0; i < this.length; i++){
		this[i].insertBefore(nodes[j].cloneNode(true), this[i].firstChild);
	    }
	}
	return this;
    };

    _$.prototype.html = function (text){
	if (arguments.length){ // set html
	    for (var i = 0; i < this.length; i++){
		this[i].innerHTML = text;
	    }
	    return this;
	} else { // get html
	    var texts = [];
	    for (var i = 0; i < this.length; i++){
		texts[i] = this[i].innerHTML;
	    }
	    return texts;
	}
    };
    
    _$.prototype.styleColor = function (color){
	if (arguments.length){ // set color
	    for (var i = 0; i < this.length; i++){
		this[i].style.color = color;
	    }
	    return this;
	} else { // get color
	    var colors = [];
	    for (var i = 0; i < this.length; i++){
		colors[i] = this[i].style.color;
	    }
	    return colors;
	}
    };
        
    _$.prototype.init.prototype = _$.prototype;
    return _$;
}());
