const Web3 = require('web3');

module.exports = {
    index (req, res, next) {
        console.log(req.query)
        res.send({ title: 'Express' });
    },
    demo (req, res, next) {
        const web3 = new Web3('ws://localhost:8545')
        console.log(web3.eth)
        res.send(web3.eth)
    },
    caonima (req, res, next) {
        res.send({ name: 'Jack Ma', age: 50, sex: 1 })
    }
}