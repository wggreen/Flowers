import { useShops } from "./ShopProvider.js"
import { useDistributors } from "./DistributorProvider.js"
import { useNurseries } from "./NurseryProvider.js"
import { useFlowers } from "./FlowerProvider.js"
import { useNurseriesFlowers } from "./NurseriesFlowersProvider.js"
import { useNurseriesDistributors } from "./NurseriesDistributorsProvider.js"
import Shop from "./Shop.js"

const contentTarget = document.querySelector(".shops")

export const ShopList = () => {
    const shops = useShops()
    const distributors = useDistributors()
    const nurseries = useNurseries()
    const flowers = useFlowers()
    const nurseriesFlowers = useNurseriesFlowers()
    const nurseriesDistributors = useNurseriesDistributors()


    const render = () => {
        contentTarget.innerHTML = shops.map(shop => {

            // Find the distributor that this retailer buys from
            const distributor = distributors.find(
                distributor => distributor.id === shop.distributorId
            )
            
            const distroNurseryRelateds = nurseriesDistributors.filter(
                currentND =>
                    currentND.distributorId === distributor.id
            )

            const foundNurseriesArray = distroNurseryRelateds.map(
                currentObject => {
                    const foundNursery = nurseries.find(
                        nursery => {
                            return nursery.id === currentObject.nurseryId
                        }
                    )
                return foundNursery
                }
            )

            const foundFlowers = foundNurseriesArray.map(
                currentNursery => {
                    const nurseryFlowerRelateds = nurseriesFlowers.filter(
                        currentNF => {
                            return currentNF.nurseryId === currentNursery.id
                        }   
                    )
                    const FoundFlowersArray = nurseryFlowerRelateds.map(
                        currentNF => {
                            const foundFlowers = flowers.find(
                                flower => {
                                    return flower.id === currentNF.flowerId
                                }
                            )
                            return foundFlowers 
                        }
                    )
                    return FoundFlowersArray
                }
            )

            console.log(foundFlowers)

            // Get HTML representation of product
            const html = Shop(shop, distributor, foundNurseriesArray, foundFlowers)

            return html
        }).join("")
    }

    render()
}

export default ShopList