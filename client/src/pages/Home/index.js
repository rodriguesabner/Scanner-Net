import React from 'react'
import HeaderMenu from "../../components/Header";
import TestPort from "../../components/TestPort";
import CurrentIp from "../../components/CurrentIp";
import Tips from "../../components/Tips";
import {Layout} from "../../styles/styles";

function Home() {
    return (
        <Layout>
            <HeaderMenu/>
            <TestPort/>
            <CurrentIp/>
            <Tips/>
        </Layout>
    )
}

export default Home