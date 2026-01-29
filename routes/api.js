const express = require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware')

router.get('/public', (req,res) => {
    res.json({message : 'public API work'})
})

router.get('./private', (auth, (req,res) => {
    res.json({message : 'Private API works' })
}))

module.exports = router

