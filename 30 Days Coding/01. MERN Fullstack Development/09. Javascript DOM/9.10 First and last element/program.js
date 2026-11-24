document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? First and Last Element of DOM element
   *  In Javascript, use `firstElementChild` and `lastElementChild` to select the first and last HTML elements inside a parent, or `firstChild` and `lastChild` if you also want to include text and whitespace nodes.
   *  Let understand all four properties with example:
   */

  const ulEle = document.querySelector("ul");
  console.log(ulEle)

  // Access the first child property
  console.log("Ul first-child", ulEle.firstChild);
  // Access the last child property
  console.log("Ul last-child", ulEle.lastChild);
  // Access the firstElementChild
  console.log("Ul first Child Element", ulEle.firstElementChild);
  // Access the lastElementChild
  console.log("Ul Last Child Element", ulEle.lastElementChild);
});
