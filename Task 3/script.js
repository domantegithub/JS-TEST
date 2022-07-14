/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const showUsersButton = document.getElementById("btn");

const renderUsers = (user) => {
  const { login, avatar_url } = user;

  const userEl = document.createElement("div");
  const userLogin = document.createElement("h4");
  const avatarUrl = document.createElement("p");
  const deleteBut = document.createElement("button");

  userEl.className = "card";

  userLogin.textContent = login;
  avatarUrl.textContent = avatar_url;

  userEl.append(userLogin, avatarUrl);

  document.querySelector("#output").prepend(userEl);

  const paraEl = document.getElementById("message");
  paraEl.textContent = "";
};

const ENDPOINT = "https://api.github.com/users";

showUsersButton.addEventListener("click", () =>{
  fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    const users = response;
    users.forEach((user) => renderUsers(user));
  })
  .catch((error) => console.log(error));
});
