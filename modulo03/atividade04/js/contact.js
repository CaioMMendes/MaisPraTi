import { toastSuccess, toastError } from "./helpers/toast.js"

const form = document.getElementById("contact-form")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  let name = document.getElementById("name")
  let formatedName = name.value.trim().split(" ")[0]
  formatedName =
    formatedName.slice(0, 1).toUpperCase() + formatedName.slice(1).toLowerCase()
  const message = document.getElementById("message")
  const formatedMessage = message.value.trim()
  if (formatedName === "") {
    name.value = ""
    toastError("Digite um nome.")
  } else if (formatedMessage === "") {
    message.value = ""
    toastError("Digite uma mensagem")
  } else {
    name.value = ""
    document.getElementById("email").value = ""
    message.value = ""
    toastSuccess(`Agredecemos pelo contato, ${formatedName}`)
  }
}
