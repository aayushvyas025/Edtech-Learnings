document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? Introduction to DOM Traversal - Parents and Child Node
   *   - Let's select the parent element of target element
   *
   * .parentElement
   *
   */
  const span = document.getElementById("span-ele");
 /**
  * ? element.parentElement property: 
  * 
  * The read-only element.parentElement property in Javascript returns the immediate parent `element` of a specified DOM node, or `null` if the node has no parent is not an HTML/XML element. 
  * 
  */

  // let access the .parentElement property
  console.log(span.parentElement);
  /**
   * Output:
   *   <div class="wrapper"> We are targeting this <span id="span-ele">span element</span> of the html element.</div>
   */
 
   /**
    * ? element.children property:   
    *   - The `element.children` property in Javascript returns a live `HTML-Collection` containing all direct child elements of a given DOM element. It ignores non-element nodes such as plain text, whitespace and HTML comments. 
    */
    const parentDiv = document.getElementById('parent'); 
    console.log('parentDiv', parentDiv); 
    // Let's access the children live HTMLCollection  
    console.log(parentDiv.children); 
    /**
     * Output: 
     *   HTMLCollection(6) [p, p, p, p, p, p]
     * 0: p
     * 1: p
     * 2: p
     * 3: p
     * 4: p
     * 5: p
     * length: 6
     */

    /**
     * ? Element.childNodes 
     *   element.childNodes property in the Javascript DOM returns a live NodeList of all direct child nodes of a specified element - including element nodes, text nodes (such as spaces and line breaks), and comment nodes. 
     *  
     */ 

    // console.log(parentDiv.childNodes); 
    // access text node from childNodes 
    const childNodesCollection = parentDiv.childNodes; 
    console.log(childNodesCollection); 
    // first element node data 
    console.log(childNodesCollection[0]?.data);
    console.log(childNodesCollection[1]?.data); 
    console.log(childNodesCollection[3]?.innerText); 
});
