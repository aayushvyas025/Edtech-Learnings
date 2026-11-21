document.addEventListener('DOMContentLoaded', () => {
    /**
     * ? What is DOM `Document Object Module` 
     *  -  When a web-page loads, the browser creates a tree-like structure representation of the HTML Document. 
     *  - The HTML DOM (HTML Document Object Model) is an Object Model for HTML Documents. 
     *  
     *  Each part of the document is a node in the tree: 
     *      
     *                              Document  `	Owner of all nodes in the document and we access the dom node with this` 
     *                                 | 
     *                              <HTML>   `Element node` 
     *                           {root element}
     *                                | 
     *                   _____________|____________________
     *                  |                                 |
     * `Element node` HEAD                               BODY `Element node` 
     *                 |                                  |
     *         _______|________                           |
     *        |               |                           |
     *    meta-tag * 2  title `Element node`              h1 `Element node`             
     *   `Element node`       |                           |----------------------------- My heading `text node` 
     *       |              My title `Text node`          p `Element node` 
     *   ___|___________                                  | ----------------------------- My paragraph `text node` 
     *  |              | 
     * char-utf       viewport `attribute node`    
     * `attribute
     *  node`      
     *  
     * 
     *   We can manipulate our DOM tree and element node with the help of DOM API which provides by browser Runtime environment 
     */ 


})