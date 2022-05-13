module.exports = {
    index (req, res, next) {
        console.log(req.query)
        res.send({ title: 'Express' });
    },
    demo (req, res, next) {
        res.send('哈哈哈')
    },
    caonima (req, res, next) {
        res.send({ name: 'Jack Ma', age: 50, sex: 1 })
    }
}