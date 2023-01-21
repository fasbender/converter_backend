const router = require('express').Router()
const { pdfoffice } = require('../controllers/fileController')
const upload = require('../middleware/multer')

router.post('/pdfoffice', upload.single("image"), pdfoffice)

module.exports = router