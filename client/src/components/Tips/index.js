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
                Tips
            </Title>

            <div style={{display: "flex", maxWidth: 1440, margin: '0 auto'}}>

                <div className="img_sticky">
                    <FixedImage src={info} alt={"info"}/>
                </div>

                <div style={{display: 'block', flexDirection: 'column'}}>
                    <FeatureItem>

                        <Title>
                            What are ports on your server?
                        </Title>

                        <Description style={{
                            fontSize: 18
                        }}>
                            When talking about ports on a <b>server</b>, or even a <b>modem, router and CCTV</b> , it is
                            usually
                            referring to <b>TCP</b> and <b>UDP</b> ports, which are protocols used by software and
                            operating system
                            services for network communication and, consequently, on the Internet. These systems connect
                            to these ports and initiate communication with the server. But for this, the desired port
                            must be open, otherwise the system will not be able to connect, resulting in an error. <b>On
                            the other hand, keeping open ports that you don't use can mean a security breach, an
                            unnecessary risk, as these are the ports that are exploited by Hackers looking for system
                            flaws, allowing the invasion of servers.</b> In this sense, testing the router is also
                            important,
                            because if your router is unnecessarily open, it can also be used for attacks.
                        </Description>

                        {/*  2  */}
                        <Title>
                            How to protect your server?
                        </Title>

                        <Description style={{
                            fontSize: 18
                        }}>
                            As we mentioned above, the ports on a server are one of the main routes of hacker attacks. A
                            cyber criminal can make a complete scanner, testing all possible ports on your server (TCP,
                            UDP, HTTP, HTTPS, SMTP, etc.). When he finds an open door he can try to exploit
                            vulnerabilities already known in his operating system. For this reason, a tool that has been
                            widely used is the <b>Web Application Firewall</b>, which is a barrier between your server and the
                            internet. These firewalls (or WAF) are able to block a multitude of attacks. They can, for
                            example, prevent the access of IPs from other countries or even recognize attack patterns,
                            blocking the hacker's access to the server.
                        </Description>
                    </FeatureItem>
                </div>

            </div>

        </Layout>
    )
}

export default Curiosidades