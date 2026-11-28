document.addEventListener("DOMContentLoaded", () => {
  const alertMessage = document.getElementById("popups");
  /**
   * ? Built-in Dialogs Methods in Javascript
   *  - Javascript provides built-in dialog functionality in two ways:
   *      -- classic browser `window` pop-ups methods: window.alert(message), window.confirm(message), and window.prompt(message, default).
   *     -- Modern `HTMLDialog Element` methods used with the HTML <dialog> tag
   */

  /**
   * ? 1st. Classic `window` Dialog Methods:
   *
   *   These methods trigger browser-styled pop-up boxes. They are synchronous and blocking, meaning script execution pauses and the user can't interact with the rest of the page until they dismiss the dialog.
   *
   * Let understand practically all three built-in dialog methods of window
   */

  /**
   * ? window.alert(message)
   *  purpose: Displays a simple notification or warning.
   *  buttons: OK
   *  Return Value: undefined
   */
//  alert("You want to saves the changes");

  /**
   * ? window.confirm(message)
   *  purpose: Ask the users to verify or accept an action
   *  buttons: OK, Cancel
   *  Return Value: true(OK) or false(Cancel)
   */
//   const isConfirmed = confirm("Are you sure to delete this ?");

//   if (isConfirmed) {
//     alertMessage.textContent = "Deleted successfully";
//   }

  /**
   * ? window.prompt(message, default) 
   *  purpose: Collects text input from the user 
   *  buttons: OK, Cancel 
   *  Return value: Entered `string` (OK) or `null` (Cancel)
   */
//    const username = prompt('Enter your name'); 

//    if(username) {
//     alertMessage.textContent = `Welcome, ${username} to our website`; 
//    }

   /**
    * ? Modern <dialog> Element Methods (HTMLDialogElement) 
    * For custom-styled, accessible, and non-blocking dialogs modern web development uses the native HTML <dialog> element controlled by three built-in Javascript  methods:  
    *  
    * - dialog.show(): Opens the dialog as a non-model box. Users can still interact with the rest of the page behind it. 
    * 
    * - dialog.showModal(): Opens the dialog as a model. It blocks interaction with the background page, traps focus inside the dialog, adds a customizable ::backdrop  pseudo-element, and allows closing via th `ESC Key`  
    * 
    * - dialog.close([returnValue]): Closes the dialog and optionally passes a string to the dialog.returnValue property.
    * 
    * Let understand practically:  
    */
   const customDialog = document.getElementById('myDialog'); 
   const openModal = document.getElementById('openBtn'); 
   const closeModal = document.getElementById('closeBtn');
   
   // open modal 
   openModal.addEventListener('click', () => {
    customDialog.showModal()
   })

   // close modal
   closeModal.addEventListener('click', () => {
    customDialog.close("confirmed")
   })

});
