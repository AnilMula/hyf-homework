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
  productsUl.innerHTML = " ";
  renderProducts(sortedProducts);
});

/* 
task2 : to sort the products based on prices like
expensive first or cheap first */

//add "..change-event.."  to the select field
const priceSearch = document.getElementById("sort-price-wise");

priceSearch.addEventListener("change", function () {
  if (priceSearch.value === "cheap") {
    // logic to sort the object based on price...cheap first
    const sortedProducts = products.sort((a, b) =>
      a.price > b.price ? 1 : b.price > a.price ? -1 : 0
    );

    //format output on the Document
    const productsUl = document.querySelector("section.products ul");
    productsUl.innerHTML = " ";
    renderProducts(sortedProducts);
  } else if (priceSearch.value === "expensive") {
    // logic to sort the object based on price...expensive first
    const sortedProducts = products.sort((a, b) =>
      a.price < b.price ? 0 : b.price < a.price ? -1 : 1
    );

    //format output on the Document
    const productsUl = document.querySelector("section.products ul");
    productsUl.innerHTML = " ";
    renderProducts(sortedProducts);
  } else if (priceSearch.value === "name") {
    // logic to sort the object based on name
    const sortedProducts = products.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );

    //format output on the Document
    const productsUl = document.querySelector("section.products ul");
    productsUl.innerHTML = " ";
    renderProducts(sortedProducts);
  }
});
