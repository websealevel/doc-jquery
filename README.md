# doc-jquery

Why use Jquery ?

- convenience
- compatibility across browsers

## Jquery object

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


### Useful methods of the Jquery Object

- `get(index)` : retourne le DOM élément lui meme à l'index index de l'objet Jquery, au lieu de renvoyer l'objet Jquery
   ~~~js
   const firstHeadingElem = $( "h1" ).get( 0 )
   ~~~

## Ressources

- [using jquery core](https://learn.jquery.com/using-jquery-core/)
- [the jquery object](https://learn.jquery.com/using-jquery-core/jquery-object/)