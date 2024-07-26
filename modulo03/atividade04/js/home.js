const numberOfSlides = 3

let widthValue = Math.min(window.innerWidth, screen.width)
let heightValue = window.innerHeight
let pathname = window.location.pathname.split("/")
window.addEventListener("resize", updateWidth)
const mobileWidth = 600

const imagesAlt = {
  1: "É hora do café, peça já",
  2: "Promoção compre 1 café e 1 doce e leve dois",
  3: "Oferta mês dos namorados",
}

function updateWidth() {
  widthValue = Math.min(window.innerWidth, screen.width)
  showSlides()
}

function showSlides(initial = false) {
  const slides = document.querySelectorAll(".slide-div")
  for (let index = 1; index <= numberOfSlides; index++) {
    const img = initial
      ? document.createElement("img")
      : slides[index - 1].getElementsByTagName("img")[0]
    if (widthValue < mobileWidth) {
      img.src = `../assets/img/banners/${index}-mobile.png`
      img.alt = imagesAlt[index]
    } else {
      img.src = `../assets/img/banners/${index}.png`
      img.alt = imagesAlt[index]
    }
    initial && slides[index - 1].appendChild(img)
  }
}

if (pathname.length > 0) {
  pathname.pop()
  pathname = pathname.join("/")
}

function handleAddFunctionToNavButtons() {
  const dessertsHtml = document.getElementById("navigate-menu-desserts")
  const hotBeveragesHtml = document.getElementById("navigate-hot-beverages")
  const menuHtml = document.getElementById("navigate-menu")

  addEvent(dessertsHtml, "desserts-section")
  addEvent(hotBeveragesHtml, "hot-beverages-section")
  addEvent(menuHtml, "")

  function addEvent(element, path) {
    element.addEventListener("click", () => {
      window.history.replaceState("about", "", `${pathname}/menu.html#${path}`)
    })
  }
}

setTimeout(() => {
  showSlides(true)
  handleAddFunctionToNavButtons()
}, 400)
