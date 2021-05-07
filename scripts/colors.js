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
        return `<li class="choice-list-item color--list-item">
            <input type="radio" value="color--${c.id}" name="color">
                ${c.color}
                <div class="price">Price: $${c.price.toFixed(2)}</div>
            </li>`
    }
)

    html += listItems.join("")
    html += "</ul>"

    return html
}

