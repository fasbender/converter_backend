const multer = require('multer')
const { v4 } = require('uuid')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public")
    },
    filename: function(req, file, cb) {
        const parts = file.originalname.split(".")
        cb(null, `${file.fieldname}${v4()}.${parts[1]}`)
    }
})

const upload = multer({storage: storage})

module.exports = upload

// const mongoose = require('mongoose')
// const path = require('path')
// const crypto = require('crypto')
// const multer = require('multer')
// const { GridFsStorage } = require('multer-gridfs-storage')
// const Grid = require('gridfs-stream')

// const connect = mongoose.createConnection(process.env.URL)

// let gfs

// connect.once('open', () => {
//     gfs = Grid(connect.db, mongoose.mongo)
//     gfs.collection('uploads')
// })

// const storage = new GridFsStorage({
//   url: process.env.URL,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage: storage });

// module.exports = upload