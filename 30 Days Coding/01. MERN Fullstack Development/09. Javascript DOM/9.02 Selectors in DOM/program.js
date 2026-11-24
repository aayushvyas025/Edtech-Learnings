document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? Selectors in DOM
   *   - Selectors in DOM mainly use for target html elements through DOM API and change it's content or add any functionality to them.
   * - We have different type of selectors to target HTML DOM elements and manipulate them according to need.
   */

  /**
   * ? document.getElementByTagName()
   *  .getElementByTagName() method will target dom elements by tag-name
   */

  const listOfLi = document.getElementsByTagName("li");

  console.log(listOfLi);
  /**
   *  Output: It returns HTMLCollection of li tags
   *  HTMLCollection(5) [li.dc, li.dc, li, li, li]
   * 0: li.dc
   * 1: li.dc
   * 2: li
   * 3: li
   * 4: li
   * length:5
   */

  /**
   * ? document.getElementByClassName()
   *   .getElementByClass() method will target dom elements by class attribute
   */

  const dcHeroes = document.getElementsByClassName("dc");
  console.log(dcHeroes);
  /**
   * Output: It returns HTML Collection of group of class name tags
   * HTMLCollection(2) [li.dc, li.dc]
   * 0: li.dc
   * 1: li.dc
   * length: 2
   */

  /**
   * ? document.getElementById()
   *  .getElementById() method will target dom element by id attribute.
   */

  const tagById = document.getElementById("spiderman");
  console.log(tagById);
  /**
   * Output: <li id="spiderman">Peter Parker</li>
   */

  /**
   * ? document.querySelector()
   *  - .querySelector() methods helps to target all type elements like  with tag, class and id attributes
   *  - id and class attribute target like css style for id `#` hash and classes by `.`
   */

  // target id attribute element
  const queryElementOne = document.querySelector("#spiderman");
  console.log(queryElementOne);
  // target class attribute element
  const queryElementTwo = document.querySelector(".dc"); // This return first class elements from group of class
  console.log(queryElementTwo);
  // target tag name element
 const queryElementThree = document.querySelector('div'); // It return first li element of the page 
 console.log(queryElementThree);  

 /**
  * ? document.querySelectorAll() 
  *  .querySelectorAll() selects the group of same tag and same classes elements and return node-list 
  */

  const liNodeList = document.querySelectorAll('li');
  console.log(liNodeList);
  /**
   * Output:
   * NodeList(5) [li.dc, li.dc, li, li#spiderman, li]
   * 0: li.dc
   * 1: li.dc
   * 2: li
   * 3: li#spiderman
   * 4: li
   * length: 5
   */

  const dcSuperheroesList = document.querySelectorAll('.dc'); 
  console.log(dcSuperheroesList); 
  /**
   * Output: 
   *  NodeList(2) [li.dc, li.dc] 
   * 0: li.dc
   * 1: li.dc
   * length: 2
   */
});

