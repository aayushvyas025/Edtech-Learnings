document.addEventListener('DOMContentLoaded', () => {
    /**
     * ? insertAdjacentElement Method
     * The insertAdjacentElement() method in Javascript inserts a given DOM element node at a specified position relative to a target element. 
     * 
     * ? Syntax 
     *  targetElement.insertAdjacentElement(position, element) 
     * 
     *  - position: A case-sensitive string specifying where to place the element relative to targetElement: 
     *    'beforebegin': Before the `targetElement` itself (as a previous sibling).
     *    'afterbegin': Just inside the `targetElement`, before its first child. 
     *    'beforeend': Just inside the `targetElement`, after its last child. 
     *     'afterend': After the `targetElement` itself (as a next sibling). 
     * 
     *  - element: The existing or newly created DOM node you want to insert. 
     *  - return value: Returns the inserted element, or null if the insertion.
     *  
     *  ? Visualizing the four position relative to below div element.   
     * ! <!-- 'beforebegin' --> 
     *   <div id="target"> 
     * ! <!-- 'afterbegin' --> 
     * <p>Existing content</p> 
     * ! <!-- 'beforeend' --> 
     * </div> 
     * ! <!-- 'afterend' -->

     */ 

    /**
     * ? Example: 
     *   Unlike `insertAdjacentElement(pos, ele) (which parses an HTML string), this method requires an actual DOM element node - such as created with `document.createElement()`  or moved from elsewhere in the DOM. 
     */
    const targetBox = document.getElementById('box'); 

    /**
     * creating a new element to insert 
     */
    const heading = document.createElement('h3'); 
    heading.textContent = 'Inserted Heading'; 

    const footerNode = document.createElement('span'); 
    footerNode.textContent = 'Inserted after the Box'; 

    /**
     * Insert this element at specific position
     */

    targetBox.insertAdjacentElement('beforebegin', heading);
    targetBox.insertAdjacentElement('afterend', footerNode);
})