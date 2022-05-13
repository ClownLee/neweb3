module.exports = {
    index (req, res, next) {
        console.log(req.query)
        res.send({ title: 'Express' });
    },
    demo (req, res, next) {
        console.log(req.body)
        res.send('哈哈哈')
    }
}