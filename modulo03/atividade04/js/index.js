// const previousSlide = document.getElementById("previous-slide")
// const nextSlide = document.getElementById("next-slide")
// const elements = document.getElementsByClassName("slide")
// const slideSelect = document.getElementById("slide-select")

// const numberOfSlides = elements.length
// let currentSlide = 0
// const slideButtons = []
// elements[0].style = "opacity:1;"

// let interval

// createSlideButtons()
// startSlideShow()

// previousSlide.addEventListener("click", () => {
//   handleChangeSlide(currentSlide - 1)
// })
// nextSlide.addEventListener("click", () => handleChangeSlide(currentSlide + 1))

// function createSlideButtons() {
//   for (let index = 0; index < numberOfSlides; index++) {
//     const button = document.createElement("button")
//     button.className = `slide-button ${index === 0 ? "active" : ""}`
//     button.id = `slide-button-${index}`
//     button["aria-label"] = `slide ${index + 1}`

//     button.addEventListener("click", () => handleChangeSlide(index))
//     slideButtons.push(button)
//     slideSelect.appendChild(button)
//   }
// }

// function startSlideShow() {
//   interval = setInterval(() => {
//     currentSlide = currentSlide + 1
//     for (let index = 0; index < numberOfSlides; index++) {
//       if (index === currentSlide % numberOfSlides) {
//         elements[index].style = "opacity:1;"
//         slideButtons[index].classList.add("active")
//       } else {
//         elements[index].style = "opacity:0;"
//         slideButtons[index].classList.remove("active")
//       }
//     }
//   }, 4000)
// }

// function restartSlideShow(slide = 0) {
//   if (interval) {
//     clearInterval(interval)
//   }
//   currentSlide = slide

//   startSlideShow()
// }

// function handleChangeSlide(slide = 0) {
//   console.log(slide)
//   if (slide < 0) {
//     slide = numberOfSlides + (slide % numberOfSlides)
//   }
//   for (let index = 0; index < numberOfSlides; index++) {
//     if (index === slide % numberOfSlides) {
//       elements[index].style = "opacity:1;"
//       slideButtons[index].classList.add("active")
//     } else {
//       elements[index].style = "opacity:0;"
//       slideButtons[index].classList.remove("active")
//     }
//   }

//   restartSlideShow(slide)
// }

const slides = document.querySelectorAll(".slide-div")
const numberOfSlides = 3

let widthValue = Math.min(window.innerWidth, screen.width)
let heightValue = window.innerHeight
// let widthValue = screen.width
// let heightValue = screen.height
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
showSlides(true)
window.addEventListener("resize", updateWidth)
