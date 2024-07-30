import React from 'react'
import ProductBlitz from "../../components/Cards"

function Produtos() {
    const products = [
        {
            cod: 1,
            name: 'Placa de video NVIDIA MSI GTX 1650',
            image: 'src/assets/produtos/gtx1650.png',
            price: 'R$ 950',
        },
        {
            cod: 2,
            name: 'Placa de video NVIDIA MSI RTX 4060 TI',
            image: 'src/assets/produtos/rtx4060ti.png',
            price: 'R$ 950',
        }, 
        {
            cod: 3,
            name: 'Placa de video AMD RX 6600',
            image: 'src/assets/produtos/rx6600.png',
            price: 'R$ 950',
        },
        {
            cod: 4,
            name: 'Radeon™ RX 6750 XT GAMING OC 12G',
            image: 'src/assets/produtos/rx7650xt.png',
            price: 'R$ 950',
        },             
    ]

    return (
        <div className="produtos">
            {products.map((product) => (
                <ProductBlitz key={product.cod} product={product} />
            ))}
        </div>
    );
}
    export default Produtos