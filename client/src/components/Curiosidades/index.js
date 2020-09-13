import React from 'react'
import {Description, Title} from "../../styles/styles";
import info from "../../assets/undraw_online_everywhere_cd90.svg";
import {FeatureItem, FixedImage, Layout} from "./styles";

function Curiosidades() {
    return (
        <Layout>
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

        </Layout>
    )
}

export default Curiosidades