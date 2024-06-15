const previousSlide = document.getElementById("previous-slide")
const nextSlide = document.getElementById("next-slide")
const elements = document.getElementsByClassName("slide")
const slideSelect = document.getElementById("slide-select")

const numberOfSlides = elements.length
let currentSlide = 0
const slideButtons = []
elements[0].style = "opacity:1;"

let interval

createSlideButtons()
startSlideShow()

previousSlide.addEventListener("click", () => {
  handleChangeSlide(currentSlide - 1)
})
nextSlide.addEventListener("click", () => handleChangeSlide(currentSlide + 1))

function createSlideButtons() {
  for (let index = 0; index < numberOfSlides; index++) {
    const button = document.createElement("button")
    button.className = `slide-button ${index === 0 ? "active" : ""}`
    button.id = `slide-button-${index}`
    button["aria-label"] = `slide ${index + 1}`

    button.addEventListener("click", () => handleChangeSlide(index))
    slideButtons.push(button)
    slideSelect.appendChild(button)
  }
}

function startSlideShow() {
  interval = setInterval(() => {
    currentSlide = currentSlide + 1
    for (let index = 0; index < numberOfSlides; index++) {
      if (index === currentSlide % numberOfSlides) {
        elements[index].style = "opacity:1;"
        slideButtons[index].classList.add("active")
      } else {
        elements[index].style = "opacity:0;"
        slideButtons[index].classList.remove("active")
      }
    }
  }, 4000)
}

function restartSlideShow(slide = 0) {
  if (interval) {
    clearInterval(interval)
  }
  currentSlide = slide

  startSlideShow()
}

function handleChangeSlide(slide = 0) {
  console.log(slide)
  if (slide < 0) {
    slide = numberOfSlides + (slide % numberOfSlides)
  }
  for (let index = 0; index < numberOfSlides; index++) {
    if (index === slide % numberOfSlides) {
      elements[index].style = "opacity:1;"
      slideButtons[index].classList.add("active")
    } else {
      elements[index].style = "opacity:0;"
      slideButtons[index].classList.remove("active")
    }
  }

  restartSlideShow(slide)
}
