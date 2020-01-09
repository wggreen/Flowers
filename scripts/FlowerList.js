import { useFlowers } from "./FlowerProvider.js"
import Flower from "./Flower.js"

const contentTarget = document.querySelector(".flowers")

export const FlowerList = () => {
    const flowers = useFlowers()

    const render = () => {
        contentTarget.innerHTML = flowers.map(flower => {
            // Get HTML representation of product
            const html = Flower(flower)

            return html
        }).join("")
    }

    render()
}

export default FlowerList