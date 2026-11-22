document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? Siblings in DOM
   *  Let target element direct sibling with the siblings related property:
   *
   * ?  .previousElementSibling property
   *     - The `read-only` previousElementSibling property return immediately preceding sibling element within the same element within the same parent in the DOM, or null if one exist.
   *
   *    Key Details:
   *      - Syntax: element.previousElementSibling.
   *
   *      - Element only: Unlike `previousSibling`, it skip text nodes (including whitespace/newlines) and comment nodes.
   *
   *      - Read-only: You can't assign a new element to this property to move or replace nodes in the DOM.
   *
   */

  const headingLevelOne = document.getElementById("topic-title");
  const divOne = document.getElementById("div-one");
  const divTwo = document.getElementById("div-two");
  const divThree = document.getElementById("div-three");

  console.log(divOne.previousElementSibling);
  console.log(divTwo.previousElementSibling);
  console.log(divThree.previousElementSibling);

  // If the previous immediate siblings is not there for that what you do ???
  if (headingLevelOne.previousElementSibling === null) { 
    console.log("No previous immediately preceding sibling");
  }

  /**
   * ? element.nextSibling property 
   *  - In Javascript, the read-only `previousSibling` property returns the node immediately preceding a specified node within the same parents `childNodes` list or `null` if it is the first node.  
   */

  console.log(divOne.previousSibling); 

  /**
   * ? nextElementSibling property 
   *  - The `read-only` DOM property that returns the element immediately following the specified one within the same parent, or null or null if the last element. 
   */
  console.log(divOne.nextElementSibling); 
  console.log(divTwo.nextElementSibling); 
  console.log(divThree.nextElementSibling); 
});
