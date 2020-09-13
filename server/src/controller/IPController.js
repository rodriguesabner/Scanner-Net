const net = require("net");

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

module.exports = {
    async index(req, res) {
        const ip = req.headers['x-forwarded-for']

        await res.status(200).json({
            ip: ip,
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
