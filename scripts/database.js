const database = {
    colors: [
        {
            id: 1,
            color: "Silver",
            price: 2.00
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 3.00
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 4.00
        },
        {
            id: 4,
            color: "Spring Green",
            price: 5.00
        }
    ],
    interiors: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 3.00
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 4.00
        },
        {
            id: 3,
            type: "White Leather",
            price: 5.00
        },
        {
            id: 4,
            type: "Black Leather",
            price: 6.00
        }
    ],
    technologies: [
        {
            id: 1,
            package: "Basic Package",
            price: 10.00
        },
        {
            id: 2,
            package: "Navigation Package",
            price: 20.00
        },
        {
            id: 3,
            package: "Visibility Package",
            price: 30.00
        },
        {
            id: 4,
            package: "Ultra Package",
            price: 30.00
        }
    ],
    wheels: [
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 20.00,
        },
        {
            id: 2,
            type: "17-inch Pair Radial Black",
            price: 30.00,
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 40.00,
        },
        {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 50.00,
        },
    ],
    customOrders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}


export const getColors = () => {
    return [...database.colors]
}
export const getInteriors = () => {
    return [...database.interiors]
}
export const getTechnologies = () => {
    return [...database.technologies]
}
export const getWheels = () => {
    return [...database.wheels]
}
export const getOrders = () => {
    return [...database.customOrders]
}


export const setColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    newOrder.id = [...database.customOrders].pop().id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}