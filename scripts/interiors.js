import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target.id
        if (itemClicked.startsWith("interior")) {
            const [, interiorId] = itemClicked.split("--")

            for (const interiorObj of interiors) {
                if (interiorObj.id === parseInt(interiorId)) {
                    window.alert(`You selected ${interiorObj.type}.`)
                }
            }
        }
    }
)

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map(taco => {
        return `
        <li>
            <input type="radio" name="interior" id="interior--${taco.id}" /> ${taco.type}
        </li>
        `
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

