import { getColors, setColor } from "./database.js"

const colors = getColors()

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target.id

        if (itemClicked.startsWith("color")) {
            const [, colorId] = itemClicked.split("--")

            for (const color of colors) {
                if (color.id === parseInt(colorId)) {
                    window.alert(`You selected ${color.color}.`)
                }
            }    
        }
    }
)

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
            <input type="radio" name="color" id="color--${c.id}" /> ${c.color}
        </li>
        `
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

