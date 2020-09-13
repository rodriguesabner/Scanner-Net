const net = require("net");
const extIP = require("external-ip");

function checkTcp(host, port) {
    return new Promise((resolve) => {
        const socket = net.createConnection(
            {
                port: port,
                host: host,
            },
            () => {
                resolve("OPEN");
            }
        );
        socket.on("error", (error) => {
            resolve(error.code);
        });
    });
}

function getExternalIp(host) {
    return new Promise((resolve, reject) => {
        if (host) {
            resolve(host);
        } else {
            let getIP = extIP({
                replace: true,
                services: ['https://ipinfo.io/ip', 'http://ifconfig.co/x-real-ip', 'http://ifconfig.io/ip'],
                timeout: 600,
                getIP: 'parallel',
                userAgent: 'Chrome 15.0.874 / Mac OS X 10.8.1'
            });

            getIP((err, ip) => {
                if (err) {
                    reject(err);
                }

                resolve(ip);
                console.log(ip);
            });
        }
    });
}

module.exports = {
    async index(req, res) {
        const ipReq = req.headers['x-forwarded-for']
        const ip = await getExternalIp();

        await res.status(200).json({
            ip: ip,
            ipReq: ipReq
        });
    },
    async scan(req, res) {
        const {ip, port} = req.body;

        if (ip) {
            await getExternalIp(ip);
            const status = await checkTcp(ip, port);

            await res.status(200).json({
                ip: ip,
                port: port,
                status: status,
            });

        } else {
            res.status(400).json({
                status: "Error",
                message: "O IP não foi informado.",
            });
        }
    },
};
