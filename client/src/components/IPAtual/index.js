import React, {useEffect, useState} from 'react'
import api from "../../services/api";
import {Title} from "../../styles/styles";

function IPAtual() {
    const [myIp, setMyIp] = useState('')

    useEffect(() => {
        async function getIp() {
            const response = await api.get('ip')
            setMyIp(response.data.ip)
        }

        getIp()

        return () => {
            setMyIp('')
        }
    }, [])

    return (
        <div style={{background: '#5B568A', width: '100%'}}>
            <Title style={{textAlign: 'center', color: '#fff'}}>
                Seu IP é atual é:<br/>
                {myIp}
            </Title>
        </div>
    )
}

export default IPAtual