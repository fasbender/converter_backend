const router = require('express').Router()
const { wordTopdf } = require('../controllers/wordToPdfConverterControler')
const upload = require('../middleware/multer')

router.post('/word-to-pdf', upload.single("file"), wordTopdf)

module.exports = router