import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

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
    const listItems = interiors.map(i => {
        return `
        <li>
            <input type="radio" name="interior" value="${i.id}" /> ${i.type}
        </li>
        `
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

