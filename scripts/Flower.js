const Flower = (flower) => {
    return `
        <section class="flower">
            <header>
                <h2>${flower.name}</h2>
            </header>
            <div>
                Price: $${flower.price}
            </div>
        </section>
    `
}

export default Flower