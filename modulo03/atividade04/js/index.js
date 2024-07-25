const ajaxContentHtml = document.getElementById("ajax-content")
const navigateHomeButtons = document.querySelectorAll(
  'button[name="navigate-home"]'
)
const navigateAboutButtons = document.querySelectorAll(
  'button[name="navigate-about"]'
)
const navigateCartButtons = document.querySelectorAll(
  'button[name="navigate-cart"]'
)
const navigateContactButtons = document.querySelectorAll(
  'button[name="navigate-contact"]'
)
const navigateMenuButtons = document.querySelectorAll(
  'button[name="navigate-menu"]'
)

async function delay(func, time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = func()

      resolve(response)
    }, time)
  })
}

let oldScript

function request(url) {
  const ajax = new XMLHttpRequest()
  try {
    ajax.open("GET", url)
    ajax.onreadystatechange = () => {
      if (ajax.readyState == 4 && ajax.status == 200) {
        ajaxContentHtml.style = "visibility: hidden;"
        ajaxContentHtml.innerHTML = ajax.responseText

        setTimeout(() => {
          ajaxContentHtml.style = "visibility: visible;"
        }, 200)
      } else if (ajax.readyState == 4 && ajax.status == 404) {
        ajaxContentHtml.innerHTML =
          "Requisição finalizada, porém o recurso não foi encontrado. Erro 404."
      } else {
        ajaxContentHtml.innerHTML = "Ocorreu um erro."
      }
    }
  } catch (error) {
    console.log(error)
    ajaxContentHtml.innerHTML =
      "Requisição finalizada, porém o recurso não foi encontrado. Erro 404."
  }
  ajax.send()
}
const searchParams = new URLSearchParams(window.location.search)
let pathname = window.location.pathname.split("/")
if (pathname.length > 0) {
  pathname.pop()
  pathname = pathname.join("/")
}

function initializePage(page) {
  window.history.pushState(
    { path: `${pathname}/${page}.html` },
    "",
    `${pathname}/${page}.html`
  )
  loadPageScript(`${page}`)
  request(`../pages/${page}.html`)
}

initializePage(searchParams.get("page"))

handleAddFunctionToNavButtons()

function loadPageScript(page) {
  // Remove o script antigo, se houver
  oldScript = document.getElementById("page-script")
  if (oldScript) {
    console.log("removendo")
    document.head.removeChild(oldScript)
    oldScript.remove()
  }
  const oldCss = document.getElementById("page-css")
  if (oldCss) oldCss.remove()

  // ;<link rel="stylesheet" href="../css/index.css" id="page-css" />
  const css = document.createElement("link")
  css.rel = "stylesheet"
  css.href = `../css/${page}.css`
  css.id = "page-css"
  css.dataset.page = page // Adiciona um atributo para controle
  document.head.appendChild(css)

  // Cria um novo elemento script
  if (page !== "about") {
    const script = document.createElement("script")
    // script.src = `../js/${page}.js`
    script.src = `../js/${page}.js?${Date.now()}`
    script.type = "module"
    script.id = "page-script"
    script.dataset.page = page // Adiciona um atributo para controle
    script.onload = () => {
      console.log(`${page} script loaded`)
    }
    script.onerror = () => {
      console.error(`Failed to load ${page} script`)
    }
    document.head.appendChild(script)
  }
}

// window.addEventListener("popstate", function (event) {
//   console.log("A URL foi alterada para:", window.location.href)
//   // Aqui você pode adicionar a lógica para lidar com a nova URL
// })
const pages = ["about", "home", "menu", "cart", "contact"]

window.navigation.addEventListener("navigate", (event) => {
  console.log(event.currentTarget.currentEntry.url)
  const currentUrl = event.currentTarget.currentEntry.url
  let page = event.destination.url.split("/")
  const pageLength = page.length
  if (pageLength > 4) {
    page = page[pageLength - 1].split(".")[0]
  } else {
    page = page[3].split(".")[0]
  }
  console.log(page)
  if (!currentUrl.includes(page)) {
    request(`../pages/${page}.html`)
    if (pages.some((name) => name === page)) loadPageScript(page)
  }
})

function handleAddFunctionToNavButtons() {
  for (let button of navigateAboutButtons) {
    button.addEventListener("click", () => {
      console.log(pathname)
      window.history.pushState(
        // "about",
        // "Zé Café - Sobre",
        // `${pathname}/about.html`
        { path: `${pathname}/about.html` },
        "",
        `${pathname}/about.html`
      )
    })
  }
  for (let button of navigateHomeButtons) {
    button.addEventListener("click", () => {
      window.history.pushState("home", "Zé Café", `${pathname}/home.html`)
    })
  }
  for (let button of navigateCartButtons) {
    button.addEventListener("click", () => {
      window.history.pushState(
        // "cart",
        // "Zé Café - Carrinho",
        // `${pathname}/cart.html`
        { path: `${pathname}/cart.html` },
        "",
        `${pathname}/cart.html`
      )
    })
  }
  for (let button of navigateContactButtons) {
    button.addEventListener("click", () => {
      window.history.pushState(
        // "contact",
        // "Zé Café - Contato",
        // `${pathname}/contact.html`
        { path: `${pathname}/contact.html` },
        "",
        `${pathname}/contact.html`
      )
    })
  }
  for (let button of navigateMenuButtons) {
    button.addEventListener("click", () => {
      window.history.pushState(
        // "menu",
        // "Zé Café - Cardápio",
        // `${pathname}/menu.html`
        { path: `${pathname}/menu.html` },
        "",
        `${pathname}/menu.html`
      )
    })
  }
}

//todo testar
// function loadPage(url) {
//   fetch(url)
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("content").innerHTML = data
//       history.pushState({ path: url }, "", url)
//     })
//     .catch((error) => console.error("Error loading page:", error))
// }
// document.addEventListener("DOMContentLoaded", function () {
//   var initialUrl = location.pathname
//   loadPage(initialUrl)
// })
