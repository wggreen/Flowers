let shops = []

export const useShops = () => shops.slice()

export const getShops = () => fetch("http://localhost:8088/shops")
    .then(res => res.json())
    .then(parsedShops => shops = parsedShops)