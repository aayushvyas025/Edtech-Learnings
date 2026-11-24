//* fetch API Method

/**
 * ? fetchAPI Method
 *  The fetch API is a built-in, promises-based Javascript interface for making asynchronous HTTP requests in both web browsers and Node.js replacing the older XMLHttpRequest.
 */

/**
 * ? Basic GET Request (async/await)
 *  By default, fetch() makes a GET request. It takes a two-step process: first waiting for the server response headers, then parsing the body (e.g., via .json() or .text()).
 *
 *  Example of GET fetch API
 */

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchHeroes() {
  try {
    // const response = await fetch("../data.json");  relative data.json() fetching
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status:${response.status}`);
    }

    // const data = await response.text(); // This .text() will give data in text
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error, while fetching data: ${error.message}`);
    return null;
  }
}

fetchHeroes();

/**
 * ? Sending data (Post Request)
 *   To send data, pass an options object as the second argument with `method`, `headers`, and a stringified `body`.
 *
 */

async function createPost() {
  const newPost = {
    userId: 1,
    title: "Hello World",
    body: "Learning the fetch API",
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error(`HTTP Response! Status: ${response.status}`);
    }
  
    const result = await response.json(); 

    console.log("Result: ", result);

  } catch (error) {
    console.error(`Error, while posting new post: ${error.message}`);
  }
}

createPost(); 

/**
 * ? Key rules and Gotchas 
 *  - HTTP error do not reject the Promise. fetch() only rejects on network failures (like being offline). Always check `response.ok` to catch 404 or 500 errors. 
 *  - Response bodies are single-use streams: Calling response.json() consumes the stream. If you try to read it a second time without calling response.clone(), it will throw an error. 
 *  - Canceling requests. You can abort a slow or unneeded request by passing an AbortController signal into the options object (signal: controller.signal
 *  
 */