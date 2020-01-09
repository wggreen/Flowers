const Shop = (shop, distributor) => {
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
                Distributor: ${distributor.name}
            </div>
        </section>
    `
}

export default Shop