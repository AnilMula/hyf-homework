//https://reqres.in/api/users

const body = document.querySelector("body");

fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 3; i++) {
      const h1 = document.createElement("h1");
      h1.innerHTML = data.data[i].email;
      body.appendChild(h1);
      console.log(data.data[i].email);
    }
  });
