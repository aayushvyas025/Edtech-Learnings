document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? innerText and textContent property of DOM element
   * In Javascript, `innerText` returns only the visible, rendered text as it's appears on the screen. while `textContent` returns full raw text from the HTML markup, including hidden elements and original spacing.
   *
   *  ? Key Difference:
   *   Feature         | innerText                       | textContent
   * __________________|_________________________________|_______________________
   *   - CSS &         | Respects CSS; ignores           | Ignore CSS; return text even
   *    Visibility     | elements hidden with `display: |  from hidden elements
   *                   | none` or `visibility:hidden`   |
   * __________________|________________________________|__________________________________
   *  Whitespace &&    |Collapses extra spaces and line | Preserves exact source-code indentation,
   *  Formatting       | breaks into a single line (like| line breaks, and spacing.
   *                   | copy-pasting from a browser)   |
   * __________________|________________________________|_____________________________________
   * <script> and      | Excludes content inside        | Includes text inside <script> and
   *  <style> tags     | <script> and <style> tags.     | <style> tags.
   * __________________|________________________________|______________________________________
   * Performance       | Slower, as it triggers a layout| Faster, as it reads directly from the
   *                   | /reflow calculation to         |  DOM without checking CSS layout.
   *                   | determine what is visible      |
   *
   *
   **/

  /**
   * ? Example: innerText and textContent
   *
   */
  const divWrapper = document.getElementById("greeting");

  // Access divWrapper content with .innerText property
  console.log(divWrapper.innerText);
  /**
   * Output:
   *   Hello, World !
   * ! Here span tag content was not visible because of manipulate by css property
   */

  // Access divWrapper content with .textContent property
  console.log(divWrapper.textContent);
  /**
   * Output:
   * \n
   *  Hello,
   * \n
   * Secret
   * \n
   *  World !
   * ! Here with exact content with original formatting which hidden by css property also
   */
});

/**
 * ? When to use which:
 * - Use `textContent` by default. It is faster, avoids unnecessary browser reflow, and reliably grabs or updates text without CSS side effects.
 *
 * - Use `innerText when visibility matters. For example, when building a search filter or scraper that should only read text a human user can actually see on the page.
 */
