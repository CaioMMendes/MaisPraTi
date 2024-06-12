const form = document.getElementById("contact-form")
const toast = document.getElementById("toast-container")
const toastMessage = document.getElementById("toast-message")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  let name = document.getElementById("name").value.trim().split(" ")[0]
  name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
  if (name === "") {
    toast.classList.add("error")
  }

  toast.classList.add("active")
  toastMessage.innerHTML = `Agredecemos pelo contato, ${name}`

  setTimeout(() => {
    toast.classList.remove("active")
    toast.classList.remove("error")
  }, 5000)

  name.value = ""
  document.getElementById("email").value = ""
  document.getElementById("message").value = ""
}
