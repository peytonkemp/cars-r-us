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
    // Check to see if the orderBuilder object has all the necessary properties
    if (
        "colorId" in database.orderBuilder &&
        "interiorId" in database.orderBuilder &&
        "technologyId" in database.orderBuilder &&
        "wheelId" in database.orderBuilder
    ) {
        // creating a copy of the orderBuilder object and storing that object in the newOrder variable
        const newOrder = {
            colorId: database.orderBuilder.colorId,
            interiorId: database.orderBuilder.interiorId,
            technologyId: database.orderBuilder.technologyId,
            wheelId: database.orderBuilder.wheelId
        }

        //* Use ternary statement to conditionally set the value of newOrder.id...
        // Are there any existing order objects in the orders array?
        newOrder.id = database.customOrders.length > 0
            // Yes? (length of orders array is greater than 0)
            // ---- Get the value of id of the the last order object from orders array.
            // ---- Set the newOrder.id equal to that value + one
            ? [...database.customOrders].pop().id + 1
            // No? (length of orders array is 0)
            // ---- Set newOrder.id equal to 1
            : 1

        //* This is the if..else way of writing the conditional logic above
        // if(database.orders.length > 0){
        //     newOrder.id = [...database.orders].pop().id + 1
        // } else {
        //     newOrder.id = 1
        // }

        // assigning the value of the newOrder.timestamp property to the current timestamp
        newOrder.timestamp = Date.now()

        // push the newOrder object into the orders array
        database.customOrders.push(newOrder)

        // set the value of orderBuilder to an empty object
        database.orderBuilder = {}

        // announce to the rest of the application that the state of our orders array has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))

        console.log(database.customOrders)
        // returning true when all properties exists
        return true
    }
    // returning false when there are missing properties ( user must complete selection )
    return false

}