

const wordTopdf = async (req, res) => {
    const inputFile = req.file
    const inputFileBuffer = inputFile.buffer
    const fileNameAray = req.file.originalname.split('.')
    const fileName = fileNameAray[0]
    try {
        const convetBase64 = inputFileBuffer.toString('base64')
        console.log(convetBase64)
        res.status(200).json({
            data: convetBase64,
            fileName: fileName
        })
    } catch {
        res.status(400).json({
            message: 'server Problem'
        })
    }
}

module.exports = {
    wordTopdf
}