import { getColors, getInteriors, getOrders, getTechnologies, getWheels } from "./database.js"

const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}