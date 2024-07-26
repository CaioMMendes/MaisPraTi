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
let oldScript
const searchParams = new URLSearchParams(window.location.search)
let pathname = window.location.pathname.split("/")
const htmlRegex = /(?<=\/)([^\/]+)(?=\.html)/
const pages = ["about", "home", "menu", "cart", "contact"]

if (pathname.length > 0) {
  pathname.pop()
  pathname = pathname.join("/")
}
const isLocal = pathname.length > 4

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

function initializePage(page = "home") {
  if (page === "index") page = "home"
  if (isLocal) page = searchParams.get("page") ?? "home"
  if (isLocal) {
    window.history.pushState(
      { path: `${pathname}/index.html?page=${page}` },
      "",
      `${pathname}/index.html?page=${page}`
    )
  } else {
    window.history.pushState(
      { path: `${pathname}/${page}.html` },
      "",
      `${pathname}/${page}.html`
    )
  }
  request(`../pages/${page}.html`)
  loadPageScript(`${page}`)
}

function loadPageScript(page) {
  // Remove o script antigo, se houver
  oldScript = document.getElementById("page-script")
  if (oldScript) {
    document.head.removeChild(oldScript)
    oldScript.remove()
  }
  const oldCss = document.getElementById("page-css")
  if (oldCss) oldCss.remove()

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
    document.head.appendChild(script)
  }
}

function handlePushState(destiny) {
  isLocal
    ? window.history.pushState(
        { path: `${pathname}/index.html?page=${destiny}` },
        "",
        `${pathname}/index.html?page=${destiny}`
      )
    : window.history.pushState(
        { path: `${pathname}/${destiny}.html` },
        "",
        `${pathname}/${destiny}.html`
      )
}

function handleAddFunctionToNavButtons() {
  for (let button of navigateAboutButtons) {
    button.addEventListener("click", () => {
      handlePushState("about")
    })
  }
  for (let button of navigateHomeButtons) {
    button.addEventListener("click", () => {
      handlePushState("home")
    })
  }
  for (let button of navigateCartButtons) {
    button.addEventListener("click", () => {
      handlePushState("cart")
    })
  }
  for (let button of navigateContactButtons) {
    button.addEventListener("click", () => {
      handlePushState("contact")
    })
  }
  for (let button of navigateMenuButtons) {
    button.addEventListener("click", () => {
      handlePushState("menu")
    })
  }
}

initializePage(
  window.location.href.match(htmlRegex)
    ? window.location.href.match(htmlRegex)[0]
    : "home"
)

handleAddFunctionToNavButtons()

window.navigation.addEventListener("navigate", (event) => {
  const currentUrl = event.currentTarget.currentEntry.url
  let page = event.destination.url.split("/")
  console.log(page)
  const pageLength = page.length

  if (isLocal) {
    page = page[pageLength - 1].split("=")
    console.log(page)
    page = page[1].split("#")[0]
  } else {
    if (pageLength > 4) {
      page = page[pageLength - 1].split(".")[0]
    } else {
      page = page[3].split(".")[0]
    }
  }
  console.log("navigate", page)
  console.log(page)
  console.log(currentUrl)
  if (page === "index") page = "home"
  if (!currentUrl.includes(page)) {
    request(`../pages/${page}.html`)
    if (pages.some((name) => name === page)) loadPageScript(page)
  }
})
