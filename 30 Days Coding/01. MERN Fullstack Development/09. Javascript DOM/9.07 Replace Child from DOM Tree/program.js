document.addEventListener('DOMContentLoaded', () => {
    /**
     * ? Replace Child 
     *  The `Node.replaceChild()` method replace an existing child node with a new node inside the specific parent existing element. 
     *  
     * ? Syntax 
     *   parentNode.replaceChild(newChildNode, oldChildNode); 
     * 
     *  newChildNode: The new node you want to insert. (Note: if this node already exists elsewhere in the DOM, it will be moved from its old position automatically.) 
     * oldChildNode: The existing child node that you want to remove or replace. 
     *  Return value: It returns `oldChild` node object (the one that was removed.)  
     */

    // First target ul element 
     const veggieList = document.querySelector('ul'); 
     console.log(veggieList); 
    
     // create new list-item 
     const newListItem = document.createElement('li'); 
     newListItem.textContent = 'Pumpkin'; 

    // Replacing list item
    const itemReplacing = document.getElementById('spinach'); 
    console.log(itemReplacing)  


     // .replaceChild(newChildNode, oldChildNode) method 
     veggieList.replaceChild(newListItem, itemReplacing); 

})