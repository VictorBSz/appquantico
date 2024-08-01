import React from "react";
import Nav from "../../components/Nav/index";
import white from "../../assets/imgbr.jpg"
import Produtos from "../../routes/Produtos/index"
import Carrossel from "../../components/Carrossel/index"
import "./styles.scss"

export default function Home() {
    return (
    <>
         <div>
            <Nav />
            
                <div className="border-home">
                <Carrossel/>
                
                    <section className='section-home'>
                    
                        <h1> Testando cards de produtos:</h1>
                        <Produtos />
                    </section>
                </div>
        </div>
    </>
          
    )
}