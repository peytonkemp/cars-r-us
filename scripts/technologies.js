import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technologies.map(t => {
        return `
        <li>
            <input type="radio" name="technology" value="${t.id}" /> ${t.package}
        </li>
        `
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

