import { products } from "../db/products.js"
import { currencyFormatter } from "./helpers/currency-formatter.js"
import { toastSuccess, toastError } from "./helpers/toast.js"

function runMenuScript() {
  const htmlHotBeverages = document.getElementById("hot-beverages-products")
  const htmlColdBeverages = document.getElementById("cold-beverages-products")
  const htmlDesserts = document.getElementById("desserts-products")
  const htmlSavorySnacks = document.getElementById("savory-snacks-products")
  const hash = window.location.hash

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

  function handleAddProductToCart(product) {
    try {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : {}

      let updatedCart
      if (cart[product.name]) {
        updatedCart = {
          ...cart,
          [product.name]: {
            ...cart[product.name],
            quantity: cart[product.name].quantity + 1,
          },
        }
      } else {
        updatedCart = {
          ...cart,
          [product.name]: {
            ...product,
            quantity: 1,
          },
        }
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      toastSuccess(`${product.name} adicionado com sucesso!`)
    } catch (error) {
      console.log(error)
      localStorage.removeItem("cart")
      toastError(`Ocorreu um erro ao tentar adicionar o item.`)
    }
  }

  function createProductItem(product) {
    const productItem = document.createElement("div")
    productItem.className = "product-item"

    const imageContainer = document.createElement("div")
    imageContainer.className = "d-flex align-items-center"
    const img = document.createElement("img")
    img.src = `../assets/img/${product.category}/${product.image}`
    img.alt = product.name
    imageContainer.appendChild(img)

    const productInfoContainer = document.createElement("div")
    productInfoContainer.className =
      "d-flex flex-column flex-md-row justify-content-between flex-grow-1 gap-3 gap-md-1 align-items-center"

    const productName = document.createElement("p")
    productName.textContent = product.name

    const priceAndButtonContainer = document.createElement("div")
    priceAndButtonContainer.className =
      "d-flex flex-column flex-md-row align-items-center gap-3"

    const productPrice = document.createElement("p")
    productPrice.textContent = currencyFormatter(product.price)

    const addButton = document.createElement("button")
    addButton.className = "button px-md-4 py-md-2 w-100"
    addButton.title = "Adicionar ao carrinho"
    addButton.textContent = "+"
    addButton.onclick = () => handleAddProductToCart(product)

    priceAndButtonContainer.appendChild(productPrice)
    priceAndButtonContainer.appendChild(addButton)

    productInfoContainer.appendChild(productName)
    productInfoContainer.appendChild(priceAndButtonContainer)

    productItem.appendChild(imageContainer)
    productItem.appendChild(productInfoContainer)

    return productItem
  }

  function showProductSection(products, htmlElement) {
    htmlElement.innerHTML = ""
    for (let product of products) {
      const productItem = createProductItem(product)
      htmlElement.appendChild(productItem)
    }
  }

  function goToElement(element) {
    element.scrollIntoView()
  }

  function showProducts() {
    showProductSection(hotBeverages, htmlHotBeverages)
    showProductSection(coldBeverages, htmlColdBeverages)
    showProductSection(desserts, htmlDesserts)
    showProductSection(savorySnacks, htmlSavorySnacks)
  }

  showProducts()

  window.addEventListener("load", () => {
    console.log("load")
    showProducts()
  })

  if (hash !== "") {
    console.log(hash)
    const element = document.querySelector(hash)
    goToElement(element)
  }
}

setTimeout(() => {
  runMenuScript()
}, 200)
