import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target.id

        if (itemClicked.startsWith("technology")) {
            const [, technologyId] = itemClicked.split("--")

            for (const technology of technologies) {
                if (technology.id === parseInt(technologyId)) {
                    window.alert(`You selected ${technology.package}.`)
                }
            }
        }
    }
)

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
            <input type="radio" name="technology" id="technology--${t.id}" /> ${t.package}
        </li>
        `
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

