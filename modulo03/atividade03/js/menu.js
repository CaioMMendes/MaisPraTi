import { products } from "../db/products.js"
import { currencyFormatter } from "./helpers/currency-formatter.js"

const htmlHotBeverages = document.getElementById("hot-beverages-products")
const htmlColdBeverages = document.getElementById("cold-beverages-products")
const htmlDesserts = document.getElementById("desserts-products")
const htmlSavorySnacks = document.getElementById("savory-snacks-products")

const hotBeverages = products.filter(
  (product) => product.category === "hot-beverages"
)
const coldBeverages = products.filter(
  (product) => product.category === "cold-beverages"
)
const desserts = products.filter((product) => product.category === "desserts")
const savorySnacks = products.filter(
  (product) => product.category === "savory-snacks"
)

function showProductSection(products, htmlElement) {
  let html = ``

  for (let product of products) {
    html += `<div class="product-item">
    <img src='../assets/img/${product.category}/${product.image}' alt='${
      product.name
    }'/>
    <p>${product.name}</p>
    <p>${currencyFormatter(product.price)}</p>
    </div>`
  }

  htmlElement.innerHTML = html
}

showProductSection(hotBeverages, htmlHotBeverages)
showProductSection(coldBeverages, htmlColdBeverages)
showProductSection(desserts, htmlDesserts)
showProductSection(savorySnacks, htmlSavorySnacks)
