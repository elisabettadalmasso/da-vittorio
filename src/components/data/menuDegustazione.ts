interface MenuDegustazione {
    id : number
    name : string
    menuKey : string
    price : number
}

export const menuDegustazione: MenuDegustazione[] = [
        {
            id: 1,
            name: "Emozioni Locali",
            menuKey: "emozioni locali",
            price: 65,
        },
        {
            id: 2,
            name: "L’Essenza delle Origini",
            menuKey: "l'essenza delle origini",
            price: 55,
        },
        {
            id: 3,
            name: "Identità Vegetale",
            menuKey: "identità vegetale",
            price: 45,
        }
    ]