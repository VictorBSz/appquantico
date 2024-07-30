import React from 'react'
import Nav from '../../components/Nav/index'
import Produtos from '../../routes/Produtos/index'

export default function PageProdutos() {
    return (
        <div>
            <Nav />
                <main>
                    <Produtos />
                </main>
        </div>
    )
}