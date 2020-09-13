const isPortReachable = require('is-port-reachable');

async function checkTcp(host, port) {
    return await isPortReachable(port, {host: `${host}`, timeout: 5000})
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
