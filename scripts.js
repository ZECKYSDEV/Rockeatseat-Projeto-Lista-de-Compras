const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")
const error = document.getElementById("errormessage")

const validateInput = () => input.value.trim().length > 0

const addNewItem = () => {
    if (!validateInput()) {
        input.classList.add("danger")
        error.classList.replace("delet", "error")
        return
    }

    const li = document.createElement("li")
    li.classList.add("item")
    li.style.marginBottom = ".75rem"

    const content = document.createElement("div")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const itemName = document.createElement("span")
    itemName.textContent = input.value.trim()

    const removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.setAttribute("aria-label", "Remover item")
    removeButton.innerHTML = '<img src="./assets/icons/Frame-3.svg" alt="">'

    content.append(checkbox, itemName)
    li.append(content, removeButton)
    ul.append(li)

    input.value = ""
    input.classList.remove("danger")
    error.classList.replace("error", "delet")

    removeButton.addEventListener("click", () => {
        const warning = document.createElement("small")
        warning.innerHTML = '<img src="./assets/icons/warning-circle-filled.svg" alt="">'
        content.prepend(warning)
        checkbox.remove()
        removeButton.remove()

        const confirmRemoveButton = document.createElement("button")
        confirmRemoveButton.type = "button"
        confirmRemoveButton.setAttribute("aria-label", "Excluir item")
        confirmRemoveButton.innerHTML = '<img src="./assets/icons/delete-small.svg" alt="">'

        itemName.textContent = "O item foi removido da lista"
        li.classList.replace("item", "alert")
        li.append(confirmRemoveButton)

        confirmRemoveButton.addEventListener("click", () => li.remove())
    })
}

input.addEventListener("input", () => {
    if (validateInput()) {
        input.classList.remove("danger")
        error.classList.replace("error", "delet")
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    addNewItem()
})
