const express = require('express')
const router = express.Router()

const {
    getClassified,
    createClassified
} = require('../controllers/ClassifiedController')

router.get('/classifieds', getClassified)
router.post('/classifieds', createClassified)

module.exports = router