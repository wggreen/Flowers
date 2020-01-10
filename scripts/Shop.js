const Shop = (shop, distributor, nurseries, flowersArray) => {
    return `
        <section class="shop">
            <header>
                <h2>${shop.name}</h2>
            </header>
            <div>
                ${shop.address}
                <br>
                ${shop.city}, ${shop.state}
            </div>
            <div>
                Distributor purchased from: 
                <br>
                ${distributor.name}
            </div>
            <div>
                <h1>Sourcing from:</h1>
                <ol>
                    ${
                        nurseries.map(nursery => 
                        {
                            return `<li>${nursery.name}</li>`
                        }).join("")
                    }
                </ol>
            </div>
            <div>
                <h1>Offers these flowers:</h1>
                <ol>
                    ${
                        flowersArray.map(
                            flowers => {
                               return flowers.map(
                                    flower => {
                                        return `<li>${flower.name}<br>color: ${flower.color}</li>`
                                    }
                                ).join("")
                            }
                        ).join("")
                    }
        </section>
    `
}

export default Shop