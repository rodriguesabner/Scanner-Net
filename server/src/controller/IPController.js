const net = require("net");
const external_ip = require("external-ip");

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
            external_ip()((err, ip) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(ip);
                }
            });
        }
    });
}

module.exports = {
    async index(req, res) {
        const ip = await getExternalIp();

        await res.status(200).json({
            ip: ip,
        });
    },
    async scan(req, res) {
        const {ip, port} = req.body;

        console.log(req.body)

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
