import { currencyFormatter } from "./helpers/currency-formatter.js"
import { toastSuccess, toastError } from "./helpers/toast.js"

function runCartScript() {
  const cartItemsHtml = document.getElementById("cart-items")
  const totalPriceHtml = document.getElementById("total-price")
  const cart = getStorageCart()
  let cartValues = Object.values(cart)
  const totalPrice = calcTotalPrice(cartValues)

  const hotBeverages = cartValues.filter(
    (item) => item.category === "hot-beverages"
  )
  const coldBeverages = cartValues.filter(
    (item) => item.category === "cold-beverages"
  )
  const desserts = cartValues.filter((item) => item.category === "desserts")
  const savorySnacks = cartValues.filter(
    (item) => item.category === "savory-snacks"
  )

  function getStorageCart() {
    try {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : {}

      return cart
    } catch (error) {
      console.log(error)
      localStorage.removeItem("cart")
      return {}
    }
  }

  function createProductItem(product) {
    const productItem = document.createElement("div")
    productItem.className = "product-item d-flex gap-4"
    productItem.id = `${product.name}-item`

    const imageContainer = document.createElement("div")
    imageContainer.className = "d-flex align-items-center"
    const img = document.createElement("img")
    img.src = `../assets/img/${product.category}/${product.image}`
    img.alt = product.name
    imageContainer.appendChild(img)

    const productInfoContainer = document.createElement("div")
    productInfoContainer.id = "product-info-container"
    productInfoContainer.className =
      "d-flex flex-column flex-md-row justify-content-between flex-grow-1 gap-md-1 align-items-center gap-md-4 gap-1"

    const productName = document.createElement("p")
    productName.className = "product-item-name"
    productName.textContent = product.name

    const quantityContainer = document.createElement("div")
    quantityContainer.className =
      "quantity-container d-flex justify-content-end  align-items-center gap-md-4 gap-1 flex-grow-1"

    const priceText = document.createElement("p")
    priceText.className = "price-text"
    priceText.textContent = currencyFormatter(product.price)

    const quantityText = document.createElement("p")
    quantityText.className = "quantity-text d-none d-md-flex"
    quantityText.textContent = "Quantidade:"

    const changeQuantityContainer = document.createElement("div")
    changeQuantityContainer.className =
      "quantity-container d-flex justify-content-center align-items-center "

    const decreaseQuantityButton = document.createElement("button")
    decreaseQuantityButton.textContent = "<"
    decreaseQuantityButton.className = ""
    decreaseQuantityButton.onclick = () => handleDecreaseQuantity(product)

    const quantityValue = document.createElement("p")
    quantityValue.id = `${product.name}-quantity`
    quantityValue.textContent = product.quantity
    quantityValue.className = "quantity-value"

    const increaseQuantityButton = document.createElement("button")
    increaseQuantityButton.textContent = ">"
    increaseQuantityButton.className = ""
    increaseQuantityButton.onclick = () => handleIncreaseQuantity(product)

    const priceAndButtonContainer = document.createElement("div")
    priceAndButtonContainer.className =
      "d-flex flex-column flex-md-row align-items-center gap-md-3 gap-1"

    const productPrice = document.createElement("p")
    productPrice.id = `${product.name}-price`
    productPrice.className = "product-price"
    productPrice.textContent = currencyFormatter(
      product.quantity * product.price
    )

    const buttonImage = document.createElement("img")
    buttonImage.src = "../assets/icons/trash.png"

    const removeButton = document.createElement("button")
    removeButton.className = "remove-item-button button px-md-4 py-md-2 w-100"
    removeButton.title = "Remover do carrinho"
    removeButton.appendChild(buttonImage)
    removeButton.onclick = () => handleRemoveItem(product)

    priceAndButtonContainer.appendChild(productPrice)
    priceAndButtonContainer.appendChild(removeButton)

    quantityContainer.appendChild(priceText)
    quantityContainer.appendChild(quantityText)
    quantityContainer.appendChild(changeQuantityContainer)

    changeQuantityContainer.appendChild(decreaseQuantityButton)
    changeQuantityContainer.appendChild(quantityValue)
    changeQuantityContainer.appendChild(increaseQuantityButton)

    productInfoContainer.appendChild(productName)
    productInfoContainer.appendChild(quantityContainer)
    productInfoContainer.appendChild(priceAndButtonContainer)

    productItem.appendChild(imageContainer)
    productItem.appendChild(productInfoContainer)

    return productItem
  }

  function showProductSection(htmlElement) {
    htmlElement.innerHTML = ""
    for (let product of hotBeverages) {
      const productItem = createProductItem(product)
      htmlElement.appendChild(productItem)
    }
    for (let product of coldBeverages) {
      const productItem = createProductItem(product)
      htmlElement.appendChild(productItem)
    }
    for (let product of desserts) {
      const productItem = createProductItem(product)
      htmlElement.appendChild(productItem)
    }
    for (let product of savorySnacks) {
      const productItem = createProductItem(product)
      htmlElement.appendChild(productItem)
    }
  }

  function calcTotalPrice(products) {
    const totalPrice = products.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity
    }, 0)
    return currencyFormatter(totalPrice)
  }

  function showTotalPrice(price) {
    totalPriceHtml.innerHTML = ""
    const total = document.createElement("h2")
    total.className = "total-price"
    total.innerHTML = `Total: ${price}`
    totalPriceHtml.appendChild(total)
  }

  function handleDecreaseQuantity({ name, price }) {
    try {
      let updatedQuantity

      const cartValuesLength = cartValues.length
      const newCartValues = {}
      const tempCart = [...cartValues]

      for (let i = 0; i < cartValuesLength; i++) {
        const element = tempCart[i]
        if (element.name !== name) {
          newCartValues[element.name] = element
        } else {
          element.quantity--
          updatedQuantity = element.quantity
          if (updatedQuantity > 0) {
            newCartValues[element.name] = {
              ...element,
              quantity: updatedQuantity,
            }
          } else {
            handleRemoveItem(element)
          }
        }
      }

      cartValues = newCartValues

      localStorage.setItem("cart", JSON.stringify(cartValues))
      cartValues = Object.values(cartValues)
      if (updatedQuantity > 0) {
        const quantityHtmlElement = document.getElementById(`${name}-quantity`)
        quantityHtmlElement.innerHTML = updatedQuantity

        const parcialPriceHtml = document.getElementById(`${name}-price`)
        parcialPriceHtml.innerHTML = currencyFormatter(updatedQuantity * price)

        const totalPrice = calcTotalPrice([...cartValues])

        showTotalPrice(totalPrice)
      }
    } catch (error) {
      console.log(error)
      toastError("Ocorreu um erro.")
    }
  }

  function handleIncreaseQuantity({ name, price }) {
    try {
      let updatedQuantity

      const cartValuesLength = cartValues.length
      const newCartValues = {}
      const tempCart = [...cartValues]

      for (let i = 0; i < cartValuesLength; i++) {
        const element = tempCart[i]
        if (element.name !== name) {
          newCartValues[element.name] = element
        } else {
          if (element.quantity >= 20) {
            updatedQuantity = element.quantity
            newCartValues[element.name] = element
          } else {
            updatedQuantity = element.quantity + 1
            newCartValues[element.name] = {
              ...element,
              quantity: updatedQuantity,
            }
          }
        }
      }

      cartValues = newCartValues

      if (updatedQuantity >= 20) {
        toastError("Você atingiu o limite de 20 unidades.")
      }

      localStorage.setItem("cart", JSON.stringify(cartValues))
      cartValues = Object.values(cartValues)

      const quantityHtmlElement = document.getElementById(`${name}-quantity`)
      quantityHtmlElement.innerHTML = updatedQuantity

      const parcialPriceHtml = document.getElementById(`${name}-price`)
      parcialPriceHtml.innerHTML = currencyFormatter(updatedQuantity * price)

      const totalPrice = calcTotalPrice(cartValues)

      showTotalPrice(totalPrice)
    } catch (error) {
      console.log(error)
      toastError("Ocorreu um erro.")
    }
  }

  function handleRemoveItem({ name }) {
    try {
      const productItemHtml = document.getElementById(`${name}-item`)
      productItemHtml.remove()

      cartValues = cartValues.filter((product) => product.name !== name)
      const cartValuesLength = cartValues.length
      const storageCart = {}

      for (let i = 0; i < cartValuesLength; i++) {
        const element = cartValues[i]
        storageCart[element.name] = element
      }

      localStorage.setItem("cart", JSON.stringify(storageCart))
      if (cartValues.length === 0) {
        showEmptyCart()
      }

      const totalPrice = calcTotalPrice(cartValues)

      showTotalPrice(totalPrice)
      toastSuccess(`${name} foi removido!`)
    } catch (error) {
      console.log(error)
      toastError("Ocorreu um erro ao tentar remover o produto.")
    }
  }

  function showEmptyCart() {
    const emptyCart = document.createElement("p")
    emptyCart.textContent = "O carrinho está vazio, adicione algo."
    emptyCart.className = "empty-cart"
    cartItemsHtml.appendChild(emptyCart)
  }

  function renderContent() {
    showProductSection(cartItemsHtml)
    showTotalPrice(totalPrice)
    if (cartValues.length === 0) {
      showEmptyCart()
    }
  }

  renderContent()
}

setTimeout(() => {
  runCartScript()
}, 200)
