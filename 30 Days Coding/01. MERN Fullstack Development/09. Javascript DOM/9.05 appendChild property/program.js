document.addEventListener('DOMContentLoaded', () => {
   /**
    * ? Element.appendChild method 
    *  The .appendChild() methods adds a node as the last child of a specified parent node in the DOM 
    *  
    *  First appending  child node to any parent node in DOM, first we have to create it with the help of document.createElement() method. 
    * 
    *  ? document.createElement() method 
    *  document.createElement() method in Javascript creates a HTML element node in memory. Because the element starts detached from the page, you must add it to the Document Object Model (DOM) before it becomes visible on the screen.
    */
  
   const cricketersList = document.getElementById('cricketers');  // target ul 
   const li = document.createElement('li'); 
    
   li.innerText = 'Aiden Markram';;
    
   // attaching the li to cricketersList 
   cricketersList.appendChild(li); 
   

    
})