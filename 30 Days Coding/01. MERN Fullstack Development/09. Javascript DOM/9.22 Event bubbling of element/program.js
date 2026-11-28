document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const box = document.querySelector(".box");
    const span = document.querySelector("span");
    const btn = document.querySelector("button");

    /**
     * ? Event.bubbling and Capturing
     *  In Javascript, event bubbling and capturing describe two directions an event travels through the Document Object Model (DOM) when an interactions occurs.
     *
     * When you click an element nested inside the others elements, the browser runs through three phases of event propagation.
     *
     *  1. Capturing phase (Top-Down):  The event starts at the `window` and travels down through ancestors (`document`, `<html>`, `<body>`, etc.) until the clicked element.
     *
     *  2. Target Phase: The event arrives at the exact element that triggered it (event.target).
     *
     *  3. Bubbling Phase (Bottom-Up): The event travels back up from the target element through it's ancestor to the `window`.
     *
     */

    /**
     * ? Event Bubbling (default):
     *   By default, all event listener in Javascript execute during the `bubbling phase`. The innermost element handles the event first, followed by it's parent, grand-parent and so on.
     */

    // body.addEventListener('click', () => {

    //     console.log("Great Grand Parent");
    // });

    // box.addEventListener('click', () => {
    //     console.log("Grand Parent");
    // });

    // span.addEventListener('click', () => {
    //     console.log("Parent");
    // });

    // btn.addEventListener('click', (e) => {
    //     e.stopPropagation();
    // ! We can prevent event bubbling with the help of event object stopPropagation on which element we are targeting.
    //     console.log("Children")
    // })

    /**
     * ? Console Output:  Event travels from target element to ancestor
     *  Children
     *  Parent
     *  Grand Parent
     *  Great Grand Parent
     *
     * ! Note: Some event like `focus`, `blur`, and `mouseenter` don't bubble
     */

    /**
     * ? Event Capturing (Trickling):
     * Event capturing intercepts the event on its way down to the target. To enable it, pass {capture:true} or (simple:true)  as the third argument to addEventListener(event-name, listener, true/{capture:true})
     *
     */

    body.addEventListener(
        "click",
        () => {
            console.log("Clicking Great Grand Parent");
        },
        { capture: true },
    );

    box.addEventListener(
        "click",
        () => {
            console.log("Clicking Grand Parent");
        },
        { capture: true },
    );

    span.addEventListener(
        "click",
        () => {
            console.log("Clicking Parent");
        },
        { capture: true },
    );

    btn.addEventListener(
        "click",
        () => {
            console.log("Clicking Children");
        },
        { capture: true },
    );

    /**
     * ? Output: 
     *  Here event starts from window ---> to target element 
     *  Clicking Great Grand Parent 
     * Clicking Grand Parent
     * Clicking Parent
     * Clicking Children
     */
});
