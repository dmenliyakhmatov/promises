// const getData = () => ({
//   id: 1,
//   name: "Dmitry",
// });
// const promise = new Promise(function (resolve, reject) {
//   const data = getData();

//   if (Math.random() > 0.5) resolve(data);
//   else reject(new Error("ошибка"));
// });

// promise
//   .then((data) => {
//     return data.id;
//   })
//   .then((id) => console.log(id))
//   .catch(console.log);

// const errorPromise = new Promise(function (resolve, reject) {
//   reject("ошибка");
// });

// errorPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("Promise finished");
//   });

import { createCardList } from "./createCard.js";

const renderList = (data) => {
  const characterList = createCardList(data);

  document.body.append(...characterList);
};

// const getCharacters = () => {
//   fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => renderList(data.results))
//     .catch((error) => console.error(error));
// };

const root = document.querySelector(".root");
const loader = document.createElement("h3");
loader.innerText = "Loading....";

const asyncGetCharacters = async () => {
  try {
    root.append(loader);
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    root.removeChild(loader);
    renderList(data.results);
  } catch (error) {
    console.log(error);
  }
};

document.querySelector(".button").addEventListener("click", asyncGetCharacters);

const newPost = {
  title: "foo",
  body: "bar",
  userId: 1,
};

const postData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

document.querySelector(".submit").addEventListener("click", postData);
