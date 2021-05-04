import { getColors, setColor } from "./database.js"

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = colors.map(c => {
        return `
        <li>
            <input type="radio" name="color" value="${c.id}" /> ${c.color}
        </li>
        `
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

