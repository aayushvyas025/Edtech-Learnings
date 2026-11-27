/**
 * ? Event listeners in Javascript: 
 *   The addEventListener() method attaches function to a DOM element (or window/document) that runs whenever the specific event occurs. Unlike inline HTML attributes (onclick="..."), it lets to attach multiple independent handlers to the same element without existing ones. 
 * 
 * ? Syntax: 
 *    target.addEventListener(type, listener, options) 
 * 
 *   - target: The element or object you want to listen (e.g. a button, document, or window) 
 *   - Type: A case-sensitive string for the event name without the "on" prefix (e.g. click, keyboard, submit) 
 *   - listener: A call-back function that runs when the event fires. It automatically receives a Event object as its first argument. 
 *   - options (optional): Either a boolean (useCapture) or an object configuring behavior like {once:true} or {passive:true} 
 * 
 *  We have different event-listener according to events occur let's understand simple click event with example: 
 */ 


const box = document.getElementById('box'); 
const button = document.getElementById("btn");

/**
 * Let's add click event-listener
 */

button.addEventListener('click', (event) => { 
    console.log(event.target); // This event.target give the element on which this event happen by user 
    box.style.backgroundColor = "teal";
})