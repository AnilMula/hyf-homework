//console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
//console.log(productsUl);

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

renderProducts(products);

//define a function to filter products

//add "..input-event.." to the the input field
const inputSearch = document.querySelector("section.table-view-control input");

inputSearch.addEventListener("input", () => {
  const sortedProducts = products.filter((product) =>
    product.name.includes(inputSearch.value)
  );
  const productsUl = document.querySelector("section.products ul");
  console.log((productsUl.innerHTML = " "));
  renderProducts(sortedProducts);
});
