document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? Attributes property of  DOM element
   *  With the help of document API we can access the element attribute also and get or set our attributes properties
   *  Let explore and understand some attributes property with example:
   *
   */
  const btn = document.getElementById("btn");

  /**
   * ? element.attributes
   *  This property return a live `NamedNodeMap` (array-like collection) of all attribute nodes on the element.
   *
   */
  const allAttributes = btn.attributes;
  console.log(allAttributes);
  /**
   * Output:
   *  NamedNodeMap {
   *   0: id
   * 1: class
   * 2: data-item
   * 3: disabled
   * class: class
   * data-item: data-item
   * disabled: disabled
   * id: id
   * length: 4
   */
  // Let iterate this allAttributes variable
  for (let attribute of allAttributes) {
    console.log(attribute);
  } 
  /**
   * id=​"btn"  
   * class=​"btn primary"
   * data-item=​"1"
   * disabled=​""
   */

  /**
   * ? element.dataset property 
   *   It's Provides read/write access to all custom data-* attributes as a camelCase object. 
   *   
   * Let see practically how we write/read custom data-* attributes via .dataset 
    */
   console.log(btn.dataset.item);// Here we read the dataset property 

    //  setting the dataset new property  
    btn.dataset.status = 'pending'; 
    
    console.log(allAttributes); 

    /**
     * ? element.getAttribute(name) method 
     *  It returns the string value of a specific attribute or null if it's doesn't exist. 
     */

    console.log(btn.getAttribute('id')); 
    console.log(btn.getAttribute('data-status'));

    /**
     * ? element.setAttribute(name, value) method 
     *  It sets the value of an existing attribute or adds a new attribute to our element. 
     */

    btn.setAttribute('title', 'This is tooltip attribute');  
    btn.setAttribute('test', 'add new attribute with setAttribute method'); 

    console.log(allAttributes);

    /**
     * ? element.removeAttribute(name) method 
     *  This method completely deletes an attribute exist on the html element 
     */ 

    btn.removeAttribute('test'); // remove test attribute from html element

    console.log(btn.attributes); 

    /**
     * ? element.hasAttribute(name) and element.hasAttributes() 
     * 
     *  .hasAttribute(name): It returns `true` if the specified attributes exists on the html element, otherwise `false`.
     * 
     *  .hasAttributes(): Returns `true` if the element has any attributes at all. 
     */

    // .hasAttribute() property: 

    console.log(btn.hasAttribute('id')); // Output: true 
    console.log(btn.hasAttribute('title')); // Output: true 
    console.log(btn.hasAttribute('test')); // Output: false  

   // .hasAttributes() property: 
   console.log(btn.hasAttributes());  // Output: true

   /**
    * ? element.toggleAttributes(name);  
    *  Adds a boolean attribute if missing or remove it if present. 
    */

    btn.toggleAttribute('disabled'); 

    /**
     * ? element.getAttributeNames()
     *  Returns a array of all attribute names on the element as strings.
     */

    const attributeArr = btn.getAttributeNames(); 
    console.log(attributeArr); 
});
