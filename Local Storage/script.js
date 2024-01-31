

// // inspect - option application - loacl storage

const button = document.getElementById("clicked");
const username = document.getElementById("username2");

const user = document.getElementById("username");

button.addEventListener("click", () => {
    const value = username.value;
    console.log(value);
    localStorage.setItem("name", value);
    location.reload();
    });


  window.addEventListener('load', ()=>{
    const value = localStorage.getItem('name');
    user.innerText = value;
  });





//   `localStorage` in JavaScript is a simple key-value store that allows you to store data persistently in a web browser. The data stored in `localStorage` remains available even 
//   after the user closes the browser or navigates away from the page. It's a convenient way to store small amounts of data locally on the client side. Here are some common use 
//   cases for `localStorage`:

//   1. **Storing User Preferences:**
//      ```javascript
//      // Store user's preferred theme
//      localStorage.setItem("theme", "dark");
  
//      // Retrieve the theme
//      const theme = localStorage.getItem("theme");
//      ```
  
//   2. **User Authentication:**
//      ```javascript
//      // Store user authentication token
//      localStorage.setItem("authToken", "xyz123");
  
//      // Retrieve the authentication token
//      const authToken = localStorage.getItem("authToken");
//      ```
  
//   3. **Remembering User Input:**
//      ```javascript
//      // Store user's last entered username
//      localStorage.setItem("lastUsername", "john_doe");
  
//      // Retrieve the last entered username
//      const lastUsername = localStorage.getItem("lastUsername");
//      ```
  
//   4. **Tracking User Activity:**
//      ```javascript
//      // Store the timestamp of the last visit
//      localStorage.setItem("lastVisit", new Date().toISOString());
  
//      // Retrieve the timestamp
//      const lastVisit = localStorage.getItem("lastVisit");
//      ```
  
//   5. **Persisting Form Data:**
//      ```javascript
//      // Store form data for later retrieval
//      localStorage.setItem("formData", JSON.stringify({ name: "John", age: 25 }));
  
//      // Retrieve and parse the form data
//      const formData = JSON.parse(localStorage.getItem("formData"));
//      ```
  
//   6. **Caching API Responses:**
//      ```javascript
//      // Store API response for caching
//      const apiResponse = /* fetch API response */; 
//      localStorage.setItem("cachedData", JSON.stringify(apiResponse));
  
//      // Retrieve and parse cached data
//      const cachedData = JSON.parse(localStorage.getItem("cachedData"));
//      ```
  
//   Remember that `localStorage` has limitations, such as a storage size limit (usually around 5 MB) and being synchronous,
//    which means that if you need to store large amounts of data or perform asynchronous operations, you might want to consider 
//    other storage options, such as `sessionStorage` or client-server communication. Additionally, always be mindful of storing 
//    sensitive information, as data stored in `localStorage` is accessible to JavaScript on the same domain.






