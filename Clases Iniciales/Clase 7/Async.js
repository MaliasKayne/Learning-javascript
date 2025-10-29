// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 500);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let operationSuccessful = true;
//         if (operationSuccessful) {
//             resolve("La operación fue exitosa!");
//         } else {
//             reject("Falló la operación");
//         }
//     }, 2000);
// });

// promise
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage);
//     });

// function fetchData() {
//     fetch("https://rickandmortyapi.com/api/character")
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
// }

// fetchData();

// async function fetchData() {
//     try {
//         let response = await fetch("https://rickandmortyapi.com/api/character");
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }

// fetchData();

// const urls = [
//   "https://rickandmortyapi.com/api/character",
//   "https://rickandmortyapi.com/api/location",
//   "https://rickandmortyapi.com/api/episode",
// ];

// async function fetchNewData() {
//     try {
//         for await (const url of urls) {
//             let response = await fetch(url);
//             let data = await response.json();
//             console.log(data);
//         }
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }

// fetchNewData();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// function sendHTTPRequest(method, url, data) {
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }).then((response) => {
//         return response.json();
//     });
// }

// async function fetchPosts() {
//     const responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts");
//     console.log(responseData);
// }

// fetchPosts();

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData;

  for (const post of listOfPosts) {
    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const idTitle = document.createElement("h4");
    idTitle.textContent = `Post ID: ${post.id}`;
    postContainer.append(idTitle);

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    listElement.append(postContainer);
  }
}

fetchButton.addEventListener("click", fecthPosts);

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId,
    };

    sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = event.currentTarget.querySelector("#title").value;
    const content = event.currentTarget.querySelector("#content").value;
    createPost(title, content);
});

postList.addEventListener("click", (event) => {
    console.log(event);
});

postList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const postId = event.target.closest("article").id;
        sendHTTPRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
    event.target.closest("article").remove();
});
