document.addEventListener("DOMContentLoaded", () => {
  /**
   * ? location Object of Browser API
   *  The window.location object in javascript represents the current URL of the browser window and let's you inspects its parts or navigate to new pages. Because `window` is the global object, you can access it directly as location.
   *
   * ? Common Properties
   *  Suppose the current URL is: https://example.com
   *
   * ? Property     |  Description                      | Example Output
   * _______________|___________________________________|__________________________
   *  href          | Returns or sets the entire url    | "https:example.com"
   * _______________|__________________________________|_____________________________
   * protocol       | Returns the web protocol         |  "https:"
   *                | (including)                      |
   * _______________|__________________________________|______________________________
   *  host          | Returns the hostname and port    | "example.com:8000"
   * _______________|__________________________________|______________________________
   * hostname       | Returns only the domain name     | "example.com"
   * _______________|__________________________________|______________________________
   *  port          | Returns the port number (empty if|  "8080"
   *                | using default 80/443 )           |
   * _______________|__________________________________|______________________________
   *
   * there are more properties related to location
   *
   * ? Common Methods:
   *   - location.assign(url) loads a new document and adds it to the browser's session history (so the user can click the Back button).
   *  - location.replace(url) replaces the current document without saving the previous page in session history (disabling the back button for that page).
   *  - location.reload() Reloads the current page, acting like the browser's refresh button.
   */

  /**
   * ? Practical Examples:
   *  1. Reading URL Parts and Query Parameters
   */

  console.log(window.location); // Output: location object
  console.log(window.location.href); // Output: http://127.0.0.1:5500/01.%20MERN%20Fullstack%20Development/09.%20Javascript%20DOM/index.html
  console.log(window.location.pathname); // Output: /01.%20MERN%20Fullstack%20Development/09.%20Javascript%20DOM/index.html

  const box = document.getElementById("box");
  // box.innerHTML = window.location.pathname  this pathname of location property give pathname
  box.textContent = window.location.hostname;

 
  /**
   *  2. Redirecting and Reloading 
   */
//   window.location.href = "https:www.youtube.com";  it will reload to the youtube home page 

 // const button = document.getElementById('reload');
  // button.addEventListener('click', () => {
  //     window.location.reload() this reload our current webpage
  // })


});
