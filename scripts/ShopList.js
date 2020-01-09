import { useShops } from "./ShopProvider.js"
import { useDistributors } from "./DistributorProvider.js"
import Shop from "./Shop.js"

const contentTarget = document.querySelector(".shops")

export const ShopList = () => {
    const shops = useShops()
    const distributors = useDistributors()

    const render = () => {
        contentTarget.innerHTML = shops.map(shop => {

            const distributor = distributors.find(
                distributor => distributor.id === shop.distributorId
            )            // Get HTML representation of product
            const html = Shop(shop, distributor)

            return html
        }).join("")
    }

    render()
}

export default ShopList