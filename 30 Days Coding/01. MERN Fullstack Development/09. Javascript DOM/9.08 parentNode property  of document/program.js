document.addEventListener('DOMContentLoaded', () => {
    /**
     * ? parentNode element property 
     *  The `parentNode` property is a read-only DOM property in Javascript that returns the immediate parent node of a specified node in the DOM tree. 
     * 
     * ? Key Details and Return Values 
     *  - Return value: Returns a Node object (which can be `element`, `document`, or `document fragment`) or null. 
     *  - When it return `null`: It evaluates to `null` if the node is a `document` or `DocumentFragment` (since neither can have a parent), if the node was newly created in memory and hasn't been attached to DOM tree yet.  
     */

    const divOne = document.getElementById('div-1'); 
     
    // Let's access parentNode property of divOne 
    console.log(divOne.parentNode);  // body it's parent element  

    /**
     * What's difference b//w parentElement and parentNode 
     * 
     * Property   | Return Type         |  Element.documentElement (<html>) Parent  |
     * ___________|_____________________|___________________________________________| 
     *            | Any Node (Element,  |  Returns the `Document` node              |
     *  parentNode| Document, Document  |                                           |
     *            | Fragment)           |                                           |
     * ___________|_____________________|___________________________________________| 
     * parent-    | Strictly Element    | Returns null `Because Document is not an  |
     * Element    | node                | Element)                                  |
     * ___________|_____________________|___________________________________________| 
     * 
     * ? What happens when parentNode or Element is not present if we are accessing let understand with example 
     *  Let explore with parentNode and parentElement property practically 
     */

    const divTwo = document.getElementById('div-2'); 
    console.log('Using parentElement Property')
    console.log(divTwo.parentElement.parentElement.parentElement) // Output: null 
    console.log('Using parentNode Property'); 
    console.log(divOne.parentNode.parentNode.parentNode); // Output: Document object 

})