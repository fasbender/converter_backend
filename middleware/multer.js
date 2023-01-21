const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public")
    },
    filename: function(req, file, cb) {
        const parts = file.originalname.split(".")
        cb(null, `${file.fieldname}.${parts[1]}`)
    }
})

const upload = multer({storage: storage})

module.exports = upload