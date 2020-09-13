import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    Description,
    FeatureItem,
    FixedImage,
    Header,
    Image,
    Input,
    Layout,
    LeftDiv,
    RepeaterPort,
    RigthDiv,
    Title
} from "./styles";
import online from './assets/undraw_content_team_3epn.svg'
import info from './assets/undraw_online_everywhere_cd90.svg'
import api from "./services/api";
import {Face, Insta, Loading, Whats} from "./Icons";

function App() {
    const [ip, setIp] = useState('')
    const [myIp, setMyIp] = useState('')
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
            setMyIp(response.data.ip)
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
        <Layout>
            <Header>
                <div>
                    <p style={{margin: '7px 20px'}}>
                        Teste de Portas Abertas
                    </p>
                </div>
                
                <div style={{margin: 'auto 20px'}}>
                    <a href="https://www.facebook.com/rodriguesabner2" target="_blank">
                        <Face/>
                    </a>
                    <a href="https://www.instagram.com/rodriguesabner_" target="_blank">
                        <Insta/>
                    </a>

                    <a href="https://wa.me/5511982743910" target="_blank">
                        <Whats/>
                    </a>
                </div>
            </Header>

            <Container>
                <LeftDiv>
                    <Title>
                        Defina um servidor (IP ou Domínio)<br/> e a porta que deseja verificar se está aberta.
                    </Title>

                    <Description style={{marginTop: -20}}>
                        É simples, basta digitar o IP e a Porta nos campos abaixo 🙂
                    </Description>

                    <div style={{display: "flex"}}>
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

                            <Input placeholder="Porta" id="port" style={{width: 100}} value={porta}
                                   onChange={(e) => setPorta(e.target.value)}/>
                        </div>
                        <Button type="button" onClick={() => checkPort()}>
                            Testar
                        </Button>
                    </div>
                </LeftDiv>

                <RigthDiv>
                    <Image
                        src={online}
                        alt={"ax"}/>
                </RigthDiv>
            </Container>

            <div style={{display: `${loading}`}}>
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

            <div style={{padding: '50px 0', marginTop: -50}}>
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
            </div>

            <div style={{background: '#5B568A', width: '100%'}}>
                <Title style={{textAlign: 'center', color: '#fff'}}>
                    Seu IP é atual é:<br/>
                    {myIp}
                </Title>
            </div>

            <div style={{
                display: "flex",
                justifyContent: 'center',
                background: '#EFF1F4',
                flexDirection: 'column',
                width: '100%',
            }}>
                <Title style={{
                    fontSize: 48,
                    marginTop: 90,
                    textAlign: 'center'
                }}>
                    Curiosidades
                </Title>

                <div style={{display: "flex", maxWidth: 1440, margin: '0 auto'}}>

                    <div className="img_sticky">
                        <FixedImage src={info} alt={"info"}/>
                    </div>

                    <div style={{display: 'block', flexDirection: 'column'}}>
                        <FeatureItem>

                            <Title>
                                O que são portas em seu servidor?
                            </Title>

                            <Description style={{
                                fontSize: 18
                            }}>
                                Quando fala-se em portas de um <b>servidor</b>, ou mesmo de um <b>modem, roteador e
                                CFTV</b>, está
                                normalmente se referindo às portas <b>TCP</b> e <b>UDP</b>, que são protocolos
                                utilizados por softwares e serviços do
                                sistema
                                operacional para a comunicação em rede e, consequentemente, na internet.
                                Esses sistemas se conectam nestas portas e iniciam a comunicação com o servidor. Mas
                                para isso a
                                porta
                                desejada precisa estar aberta, caso contrário, o sistema não conseguirá se conectar,
                                resultando
                                em erro. <b>Por outro lado, manter abertas as portas que você não utiliza pode
                                significar uma falha
                                de
                                segurança, um
                                risco desnecessário, pois são estas portas que são exploradas por Hackers buscando
                                falhas no
                                sistema,
                                permitindo a invasão de servidores.</b>
                                Neste sentido, testar o roteador também é algo importante, pois se seu roteador estiver,
                                desnecessáriamente, com alguma porta aberta, esta também poderá ser utilizada para
                                ataques.
                            </Description>

                            {/*  2  */}
                            <Title>
                                Como proteger seu servidor?
                            </Title>

                            <Description style={{
                                fontSize: 18
                            }}>
                                Como falamos acima, as portas de um servidor são uma das principais vias de ataques de
                                hackers.
                                Um cyber
                                criminoso pode fazer um scaner completo, testando todas as possíveis portas de seu
                                servidor
                                (TCP, UDP,
                                HTTP, HTTPS, SMTP, etc). Ao encontrar uma porta aberta ele poderá tentar explorar
                                vulnerabilidades já
                                conhecidas em seu sistema operacional.
                                Por este motivo, uma ferramenta que tem sido muito utilizada são os <b>Web Application
                                Firewall</b>,
                                que é uma
                                barreira que fica entre o seu servidor e a internet.
                                Esses firewalls (ou WAF) conseguem bloquear uma infinidade de ataques. Eles podem, por
                                exemplo,
                                impedir
                                o acesso de IPs de outros países ou mesmo reconhecer padrões de ataques, bloqueando o
                                acesso do
                                hacker
                                ao servidor.
                            </Description>
                        </FeatureItem>
                    </div>

                </div>

            </div>
        </Layout>
    );
}

export default App;
