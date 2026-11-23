document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? More Siblings property of DOM API
   * In previous DOM API property we walkthrough previousElementSibling and nextPreviousSibling properties let's explore two more
   *
   * ? element.previousSibling
   *  - with the help of element.previousSibling property we will access previous immediate node and it will be text, comment or element
   *
   * ? element.nextSibling
   *  - with the help of element.nextSibling property we will access next immediate node and it will be text, comment or element
   */

  const liOne = document.getElementById("li-one");
  const liFour = document.getElementById("li-four");

  const prevSibling = liOne.previousSibling; 
  console.log(prevSibling); 

  const nextSibling = liFour.nextSibling; 
  console.log(nextSibling); 
});
