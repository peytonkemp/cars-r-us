import { getColors, getInteriors, getOrders, getTechnologies, getWheels } from "./database.js"

const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

// const buildOrderListItem = (order) => {
//     return `<li>
//         Order #${order.id} was placed on ${order.timestamp}
//     </li>`
// }

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    const arrayOfOrderHTMLStrings = orders.map(
        (order) => {
            let totalCost = 0

            // Find the matching protein
            const foundColor = colors.find(
                (colorObject) => {
                    if (colorObject.id === order.colorId) {
                        return true
                    }
                }
            )
            totalCost += foundColor.price

            // Find the matching bread
            const foundInterior = interiors.find(i => i.id === order.interiorId)
            totalCost += foundInterior.price

            const foundTechnology = technologies.find(t => t.id === order.technologyId)
            totalCost += foundTechnology.price

            const foundWheel = wheels.find(w => w.id === order.wheelId)
            totalCost += foundWheel.price




            // Return the HTML representation of the order
            return `
                <div class="order">
                    Order #${order.id} placed at
                    ${new Date(order.timestamp).toLocaleString()},
                    has the color of ${foundColor.color}
                    with a ${foundInterior.type} interior with 
                    ${foundTechnology.package} technology and 
                    ${foundWheel.type} wheels
                    for a total cost of ${totalCost.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}
                </div>
            `
        }
    )

    const html = arrayOfOrderHTMLStrings.join("")


    return html
}