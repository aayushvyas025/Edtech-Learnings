document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? Inner and Outer HTML  property
   *   In Javascript, innerHTML gets or sets only HTML content inside an element, whereas `outerHTML` gets or sets the entire elements itself, including its opening and closing tags.
   *
   * ? Key Difference:
   *  Feature       |      innerHTML                  | outerHTML
   * _______________|_________________________________|_______________________________________________________
   * - Reading      | Returns only the nested HTML    | Returns the element's own tag, attributes, and all nested HTML.
   *  (Getting)     | inside the element.             |
   * _______________|_________________________________|__________________________________________________________
   * - Writing      | Replaces the inside content     | Completely replaces the wrapper tag and everything inside it in
   *  (Setting)     | while keeping the wrapper tag   |  the DOM
   *                | intact                          |
   * _______________|_________________________________|______________________________________________________________
   * Best Use (for) | Updating, adding, or clearing   | Swapping out an entire HTML element for a different tag or structure
   *                | content inside a container.     |
   * _______________|_________________________________|__________________________________________________________________
   *
   */

  /**
   * ? Example: Reading Values (Get)
   * innerHTML and outerHTML
   *
   */

  const wrapperDiv = document.getElementById("greeting");
  /**
   * ? element.innerHTML property
   * Access the elements or content inside the wrapperDiv with help of .innerHTML property
   */
  console.log(wrapperDiv.innerHTML);
  /**
   * Output:
   *     <h3>Hello World!!!!</h3>
   * <p>How's going your day</p>
   */

  /**
   * ? element.outerHTML property
   * Access whole wrapper with nested html or content with the help of .outerHTML property.
   *
   */
  console.log(wrapperDiv.outerHTML);

  /**
   * Output:
   * <div id="greeting">
   * <h3>Hello World!!!!</h3>
   * <p>How's going your day</p>
   * </div>
   */

  /**
   * ? Example: Modifying Values (Set)
   *  innerHTML and outerHTML
   */
  wrapperDiv.innerHTML = `
   <span>Welcome Back to Welcome Page</span> 
    <p>How's the day going</p>
  `;
  console.log(wrapperDiv.innerHTML);

  wrapperDiv.outerHTML = `
  <section id="new-greeting">  
   <h1> 
   Goodbye! 
    </h1>
  </section>`;

  console.log(wrapperDiv.outerHTML); //! our .outerHTML points towards the old point detached html element. 
  /**
   * Output: 
   * <div id="greeting"> 
   * <span>Welcome Back to Welcome Page</span>  
   * <p>How's the day going</p>
   *  </div>
   */ 

  const newDivWrapper = document.getElementById('new-greeting'); 
  console.log(newDivWrapper.outerHTML); 
  /**
   * Output: 
   *  <section id="new-greeting">  
   *  <h1>  Goodbye!</h1>
   *  </section>
   */
});
