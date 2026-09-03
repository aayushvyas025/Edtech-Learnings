//* Conditional Rendering in Javascript 
/** 
 *  -> Conditional rendering means showing or hiding UI based on some condition - like display the loading... when we are fetching data, error when any error occurs when data is not received or hiding button on the bases of user permission. 
 * -> 
 */




// Example of Conditional Rendering by DOM Manipulation 
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content loaded Successfully"); 
  function renderStatus(isLoading, hasError, data) {
    const renderBox = document.getElementById("renderBox"); 
    const button = document.getElementById("btn"); 

    button.addEventListener('click', function() {
        if(isLoading) {
            renderBox.textContent = "Loading data...."
        }else if(hasError) {
            renderBox.textContent = "Error, while fetching data"
        } else {
            renderBox.textContent = data; 
        }
    }); 
  }

  renderStatus(false, false, "Learning Conditional rendering with DOM manipulation")
});
