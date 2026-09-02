//* Error Handling in JavaScript

//? What is Error Handling in Javascript ?
/**
 * Error handling is Anticipating the things can go wrong and dealing with them gracefully - instead of letting whole application crash when something unexpected happens (a failed api call, invalid user input, a bug in your logic).
 */

//* Example of try-catch block
// Mainly we used try-catch block for error handling

const uploadMedia = function (file) {
  if (!file) return;
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof file === "string" || !file.trim()) {
        resolve({ success: true, message: "file uploaded successfully" });
      } else {
        reject({ success: false, message: "Error, uploading file" });
      }
    }, 1000);
  });
};
