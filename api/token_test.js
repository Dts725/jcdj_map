module.exports = function (req,res,next) {
    // if(req.query.token) {

    //     res.send('token验证成功')
    // }


        res.send({
            status : 200,
            msg : 'token'
        })

}