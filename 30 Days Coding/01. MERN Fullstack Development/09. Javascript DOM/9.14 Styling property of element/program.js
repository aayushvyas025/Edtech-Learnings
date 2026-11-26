document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? Styling object property in Javascript
   *   In Javascript, you modify the HTML element's inline CSS using `element.style` property, which return CSSStyleProperties or CSSDeclarationProperties object.
   *
   * ? Core Syntax and Rules:
   *  - camelCase Naming: Hyphenated CSS properties wil converted into camelCase in Javascript (e.g background-color becomes backgroundColor and font-size becomes fontSize).
   *
   *  - String values with Units: Always assign values as strings, including css units like `px`, `%`, or `rem`.
   *
   *  - Inline Priority: Styles set via `.style` are applied directly to the element's HTML `style` attribute, overriding external stylesheet etc.
   *
   * - Resetting Styles: Assign an empty string ("") or null to a property to remove that specific inline style.
   *
   * ? Code Example
   * Let practically understand how style property help to manipulate inline css
   */

  const body = document.querySelector("body");

  // Let's console body.style property
  console.log(body.style);
  /**
   * Output: It will give output of CSSDeclarationProperties
   *
   * Let's change the backgroundColor & color property
   */

  body.style.backgroundColor = "#fff";
  body.style.color = "#111";
  //    body.style = null;

  const box = document.getElementById("box");
  box.style.backgroundColor = "royalblue";
  box.style.width = "400px";
  box.style.boxSizing = "border-box";
  box.style.margin = "1rem";
  box.style.padding = "2rem";
  box.style.color = "#fff";
  box.style.fontSize = "1.2rem";
});
