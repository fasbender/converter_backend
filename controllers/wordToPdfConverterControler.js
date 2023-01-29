const toPdf = require("office-to-pdf")

const wordTopdf = async (req, res) => {
    const inputFileBuffer = req.file.buffer
    const fileNameAray = req.file.originalname.split('.')
    const fileName = fileNameAray[0]
    try{
        const pdfBuffer = await toPdf(inputFileBuffer)
        const convetBase64 = pdfBuffer.toString('base64')
        res.status(200).json({
            data:convetBase64,
            fileName:fileName
        })
        
    }catch{
        res.status(400).json({
            message:'server Problem'
        })
    }
}

module.exports = {
    wordTopdf
}