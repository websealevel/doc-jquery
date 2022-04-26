# doc-jquery

Un peu de doc sur Jquery qui me semble essentielle pour comprendre la bibliothèque. Tout ce qui est écrit ici provient principalement directement de [la doc officielle](https://learn.jquery.com/using-jquery-core/).

Why use Jquery ?

- convenience
- compatibility across browsers

## Jquery object


### Overview

The Jquery object is an abstraction layer over any DOM element.

When creating new elements (or selecting existing ones), jQuery returns the elements in a Jquery Object which is a **collection** of items, with a **.length** property.

When the jQuery function is invoked with a CSS selector, it will return a jQuery object wrapping any element(s) that match this selector. For instance, writing:

~~~javascript
// Selecting all <h1> tags.
var headings = $( "h1" );
//headings est un Jquery Object
~~~

Many developers prefix a $ to the name of variables that contain jQuery objects in order to help differentiate. There is nothing magic about this practice – it just helps some people keep track of what different variables contain. The previous example could be re-written to follow this convention:

~~~javascript
// Comparing DOM elements (with more readable variable names).
 
var $logo1 = $( "#logo" );
var logo1 = $logo1.get( 0 );
 
var $logo2 = $( "#logo" );
var logo2 = $logo2.get( 0 );
 
alert( logo1 === logo2 ); // alerts "true"
~~~

Important : **jQuery Objects Are Not "Live" !**  The set of elements contained within a jQuery object will not change unless explicitly modified. This means that the collection is not "live" – it does not automatically update as the document changes.

### $ vs $()

Until now, we've been dealing entirely with methods that are called on a jQuery object. For example:

~~~js
$( "h1" ).remove();
~~~

Most jQuery methods are called on jQuery objects as shown above; these methods are said to be part of the $.fn namespace, or the "jQuery prototype," and are best thought of as jQuery object methods.

However, there are several methods that do not act on a selection; these methods are said to be part of the jQuery namespace, and are best thought of as core jQuery methods.

This distinction can be incredibly confusing to new jQuery users. Here's what you need to remember:

- Methods called on jQuery selections are in the $.fn namespace, and automatically receive and return the selection as `this`.
- Methods in the $ namespace are generally utility-type methods, and do not work with selections; they are not automatically passed any arguments, and their return value will vary.


### Useful methods of the Jquery Object

- `get(index)` : retourne le DOM élément lui meme à l'index index de l'objet Jquery, au lieu de renvoyer l'objet Jquery
   ~~~js
   const firstHeadingElem = $( "h1" ).get( 0 )
   ~~~

## Ressources

- [using jquery core](https://learn.jquery.com/using-jquery-core/)
- [the jquery object](https://learn.jquery.com/using-jquery-core/jquery-object/)
- [animation](https://learn.jquery.com/effects/custom-effects/)