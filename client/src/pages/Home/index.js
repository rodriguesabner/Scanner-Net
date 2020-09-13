import React from 'react'
import HeaderMenu from "../../components/Header";
import TestPort from "../../components/TestPort";
import IPAtual from "../../components/IPAtual";
import Curiosidades from "../../components/Curiosidades";
import {Layout} from "../../styles/styles";

function Home() {
    return (
        <Layout>
            <HeaderMenu/>
            <TestPort/>
            <IPAtual/>
            <Curiosidades/>
        </Layout>
    )
}

export default Home