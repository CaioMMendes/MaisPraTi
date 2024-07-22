const toastOptions = {
  text: "Mensagem",
  duration: 4000,
  newWindow: true,
  close: true,
  gravity: "top",
  position: "right",
  stopOnFocus: true,
  style: {
    background: "#ecfdf3",
    color: "#008a2e",
    "border-radius": "0.8rem",
    padding: "2.4rem",
  },
  onClick: function () {},
}

export function toastSuccess(text = "Sucesso!") {
  toastOptions.text = text
  toastOptions.className = "toast-mobile toast-work"
  toastOptions.style = {
    ...toastOptions.style,
    background: "#ecfdf3",
    color: "#008a2e",
    "border-radius": "0.8rem",
  }

  Toastify(toastOptions).showToast()
}

export function toastError(text = "Ocorreu um erro.") {
  toastOptions.text = text
  toastOptions.className = "toast-mobile toast-fail"
  toastOptions.style = {
    ...toastOptions.style,
    background: "#e60000",
    color: "#fff0f0",
  }

  Toastify(toastOptions).showToast()
}
