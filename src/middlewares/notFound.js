function notFoundHandler(req, res, next){
    return res.json({
        state: 404,
        method: req.method,
        path: req.url,
        message: 'Not found'
    })
}
export default notFoundHandler