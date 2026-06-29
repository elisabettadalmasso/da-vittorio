interface MenuDegustazione {
    id : number
    name : string
    menuKey : string
    priceNoDrinks : number
    priceWithWine : number
}

export const menuDegustazione: MenuDegustazione[] = [
        {
            id: 1,
            name: "Una passeggiata nel Bosco ",
            menuKey: "una passeggiata nel bosco",
            priceNoDrinks: 70,
            priceWithWine: 105,
        },
        {
            id: 2,
            name: "Origini",
            menuKey: "origini",
            priceNoDrinks: 55,
            priceWithWine: 90,
        },
        {
            id: 3,
            name: "Impronte Vegetali",
            menuKey: "impronte vegetali",
            priceNoDrinks: 45,
            priceWithWine: 80,
        }
    ]