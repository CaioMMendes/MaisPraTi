const form = document.getElementById("contact-form")
const toast = document.getElementById("toast-container")
const toastMessage = document.getElementById("toast-message")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  let name = document.getElementById("name")
  let formatedName = name.value.trim().split(" ")[0]
  formatedName =
    formatedName.slice(0, 1).toUpperCase() + formatedName.slice(1).toLowerCase()
  if (formatedName === "") {
    toast.classList.add("error")
    name.value = ""
  } else {
    name.value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
  }

  toast.classList.add("active")
  toastMessage.innerHTML = `Agredecemos pelo contato, ${formatedName}`

  setTimeout(() => {
    toast.classList.remove("active")
    toast.classList.remove("error")
  }, 5000)
}
