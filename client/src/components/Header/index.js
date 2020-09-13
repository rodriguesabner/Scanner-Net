import React from 'react'
import {Face, Insta, Whats} from "../../styles/Icons";
import {Header} from "./styles";

function HeaderMenu() {
    return (
        <>
            <Header>
                <div>
                    <p style={{margin: '7px 20px'}}>
                        Teste de Portas Abertas
                    </p>
                </div>

                <div style={{margin: 'auto 20px'}}>
                    <a href="https://www.facebook.com/rodriguesabner2" target="_blank" rel="noopener noreferrer">
                        <Face/>
                    </a>
                    <a href="https://www.instagram.com/rodriguesabner_" target="_blank" rel="noopener noreferrer">
                        <Insta/>
                    </a>

                    <a href="https://wa.me/5511982743910" target="_blank" rel="noopener noreferrer">
                        <Whats/>
                    </a>
                </div>
            </Header>
        </>
    )
}

export default HeaderMenu