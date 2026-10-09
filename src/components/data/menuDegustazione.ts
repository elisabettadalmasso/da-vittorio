interface MenuDegustazione {
    id : number
    name : string
    menuKey : string
    priceNoDrinks : number
    priceWithWine : number
    wineCount : number
}

export const menuDegustazione: MenuDegustazione[] = [
        {
            id: 1,
            name: "Oltre il Bosco",
            menuKey: "oltre il bosco",
            priceNoDrinks: 70,
            priceWithWine: 105,
            wineCount: 4,
        },
        {
            id: 2,
            name: "Memories",
            menuKey: "memories",
            priceNoDrinks: 55,
            priceWithWine: 85,
            wineCount: 3,
        },
        {
            id: 3,
            name: "Custodi della Terra",
            menuKey: "custodi della terra",
            priceNoDrinks: 45,
            priceWithWine: 75,
            wineCount: 3,
        }
    ]
