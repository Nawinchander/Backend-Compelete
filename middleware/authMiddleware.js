module.export = (req,res, next) => {
    const apiKey = req.headers['x-api-key']

    if(apiKey !== process.env.apiKey){
        return res.status(401).json({message : 'Unauthorized'})
    }

    next()
}

