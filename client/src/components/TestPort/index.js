import React, {useEffect, useState} from 'react'
import {
    Button,
    Container,
    Form,
    Image,
    Input,
    LeftDiv,
    ListPort,
    Port,
    RepeaterPort,
    RigthDiv,
} from "./styles";
import online from "../../assets/undraw_content_team_3epn.svg";
import {Loading} from "../../styles/Icons";
import api from "../../services/api";
import {Description, Title} from "../../styles/styles";

function TestPort() {
    const [ip, setIp] = useState('')
    const [ipOld, setOldIp] = useState('')
    const [portaOld, setPortaOld] = useState('')
    const [porta, setPorta] = useState('')
    const [result, setResult] = useState('')
    const [visible, setVisible] = useState('none')
    const [loading, setLoading] = useState('none')

    useEffect(() => {
        async function getIp() {
            const response = await api.get('ip')
            setIp(response.data.ip)
            setOldIp(response.data.ip)
        }

        getIp()

        return () => {
            setIp('')
        }
    }, [])

    async function checkPort() {
        const params = new FormData()
        params.append('ip', ip)
        params.append('port', porta)
        setPortaOld(porta)
        setOldIp(ip)

        setLoading('block')
        setVisible('none')
        const response = await api.post('scan', params)
        await setResult(response.data.status)
        setLoading('none')
        setVisible('block')
    }

    return (
        <>
            <Container>
                <LeftDiv>
                    <Title>
                        Defina um servidor (IP ou Domínio)<br/> e a porta que deseja verificar se está aberta.
                    </Title>

                    <Description role="img" aria-label="smile">
                        É simples, basta digitar o IP e a Porta nos campos abaixo 🙂
                    </Description>

                    <Form>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label>
                                IP
                            </label>
                            <Input placeholder="IP" id="ip" value={ip} onChange={(e) => setIp(e.target.value)}/>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <label>
                                Porta
                            </label>

                            <Port placeholder="Porta" id="port" value={porta}
                                  onChange={(e) => setPorta(e.target.value)}/>
                        </div>
                        <Button type="button" onClick={() => checkPort()}>
                            Testar
                        </Button>
                    </Form>
                </LeftDiv>

                <RigthDiv>
                    <Image
                        src={online}
                        alt={"ax"}/>
                </RigthDiv>
            </Container>

            <div style={{display: `${loading}`, margin: '0 auto'}}>
                <Loading/>
            </div>

            <div style={{display: `${visible}`, marginTop: -70}}>
                {
                    result === false ? (
                        <Title style={{textAlign: 'center'}}>
                            A porta <b>{portaOld}</b> do servidor <b>{ipOld}</b> está:<br/>
                            <b style={{color: '#ff7777'}}>Inacessível</b>
                        </Title>
                    ) : (
                        <Title style={{textAlign: 'center'}}>
                            A porta <b>{portaOld}</b> do servidor <b>{ipOld}</b> está:<br/>
                            <b style={{color: '#35a837'}}>Aberta</b>
                        </Title>
                    )
                }

            </div>

            <ListPort>
                <Title style={{fontSize: 16, textAlign: 'center', cursor: 'default', fontWeight: 400}}>
                    Lista das principais portas de seu servidor ou roteador para verificar se estão abertas ou
                    fechadas:
                </Title>

                <RepeaterPort>
                    <p className="title">
                        <b>FTP</b><br/>21
                    </p>

                    <p className="title">
                        <b>SSH</b><br/>22
                    </p>

                    <p className="title">
                        <b>Telnet</b><br/>23
                    </p>

                    <p className="title">
                        <b>SMTP</b><br/>25
                    </p>

                    <p className="title">
                        <b>DNS</b><br/>53
                    </p>

                    <p className="title">
                        <b>HTTP</b><br/>80
                    </p>

                    <p className="title">
                        <b>HTTPS</b><br/>443
                    </p>

                    <p className="title">
                        <b>POP3</b><br/>110
                    </p>

                    <p className="title">
                        <b>SFTP</b><br/>115
                    </p>

                    <p className="title">
                        <b>IMAP4</b><br/>143
                    </p>

                    <p className="title">
                        <b>SQL</b><br/>156
                    </p>

                    <p className="title">
                        <b>SMTP</b><br/>465
                    </p>

                    <p className="title">
                        <b>SMTP</b><br/>587
                    </p>

                </RepeaterPort>
            </ListPort>
        </>
    )
}

export default TestPort