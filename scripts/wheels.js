import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target.id

        if (itemClicked.startsWith("wheel")) {
            const [, wheelId] = itemClicked.split("--")

            for (const wheel of wheels) {
                if (wheel.id === parseInt(wheelId)) {
                }
            }
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(w => {
        return `<li class="choice-list-item wheel--list-item">
            <input type="radio" value="wheel--${w.id}" name="wheel">
                ${w.type}
                <div class="price">Price: $${w.price.toFixed(2)}</div>
            </li>`
    }
    )

    html += listItems.join("")
    html += "</ul>"

    return html
}

