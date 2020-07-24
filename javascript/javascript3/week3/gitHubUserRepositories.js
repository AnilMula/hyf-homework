const users = [
  "AnilMula",
  "Michaelbaldeh",
  "1620prabn",
  "claudion3",
  "merihnguse",
  "	Elia-Git",
  "Deepti-Dk",
  "Pallabi-ghosh",
];
function resolve(userPromise) {
  const body = document.querySelector("body");
  userPromise
    .then((data) => data.json())
    .then((data) => {
      const h3 = document.createElement("h3");
      body.appendChild(h3);
      h3.innerHTML = `Total Number Of Repositories${data.items.length}`;

      const ol = document.createElement("ol");
      h3.appendChild(ol);
      data.items.forEach((element) => {
        const ul = document.createElement("ul");
        ul.innerText = `Repository Name : ${element.name}`;
        ul.setAttribute("style", "color:green");
        ol.appendChild(ul);

        const li2 = document.createElement("li");
        li2.innerHTML = `Repository URL : ${element.clone_url}`;
        li2.setAttribute("style", "color:black");
        ul.appendChild(li2);

        const li3 = document.createElement("li");
        li3.innerHTML = `Repository Owner : ${element.owner.login}`;
        li3.setAttribute("style", "color:black");
        ul.appendChild(li3);
      });
    });
}

const user1Promise = fetch(
  `https://api.github.com/search/repositories?q=user:Michaelbaldeh`
);
const user2Promise = fetch(
  `https://api.github.com/search/repositories?q=user:1620prabn`
);
const user3Promise = fetch(
  `https://api.github.com/search/repositories?q=user:claudion3`
);
Promise.all([
  resolve(user1Promise),
  resolve(user2Promise),
  resolve(user3Promise),
]);
