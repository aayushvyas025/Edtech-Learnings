//* Learning debouncing

//? What is debouncing ?
// Debouncing is mechanism which waits until the user stops doing something or performing actions, then runs the function - instead of running function on every single event of user.

/**
 * Think of a search bar. without debouncing, every key stroke-fires API Call:
 *  User type: 'r' -> API Call
 *  User type:  're' -> API call
 *  User type: 'rea' -> API call
 *  User type: 'reac' -> API call
 *  User type: 'react' -> API call
 *
 * -> That's 5 API calls for 5 words is waste and create load on server also by calling APIs for words.
 * -> It can cause race conditions (an older, slower request might resolves after a newer one, showing stale results )
 *
 * With debouncing, you wait for a pause (500ms) before firing:
 *  User type: 'r'  debouncing timer starts
 *  User type: 're' debouncing timer-re-set again
 *  User type: 'rea' debouncing timer-re-set again
 *  User type: 'reac' debouncing timer-re-set again
 *  User type: 'react' debouncing timer-reset
 *  ... User stops typing...
 *  500ms later -> API call hit on the word react
 */

//* Example of Debouncing 

// debouncing function 
function debounce(serviceFunc, delay) {
  let timeoutId;

  return function (...words) {
    clearTimeout(timeoutId); // First we clear the previous delay timer to reset the timer
    timeoutId = setTimeout(() => serviceFunc(...words), delay);
  };
} 

// dummy api service func 
function searchApi(query) {
    if(query === 'react') {
        console.log("Searching for :",query); 
        console.log("API Call now fires"); 
    }else {
        console.log("Not found", query)
    }
}  

const debounceSearch = debounce(searchApi, 500); 
debounceSearch("r");
debounceSearch("re"); 
debounceSearch("rea"); 
debounceSearch("reac"); 
debounceSearch("react"); 


