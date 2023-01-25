require('dotenv').config()

const { PDFNet } = require('@pdftron/pdfnet-node')
const fs = require('fs')
const fileSchema = require('../models/fileModel')

//pdf to office
const pdfoffice = async(req, res) => {

        const pdf = `./public/${req.file.filename}`
        const docx = `./file/${req.file.originalname.split('.pdf').join('.docx')}`
    
        async function main() {
            try {

                await PDFNet.addResourceSearchPath('./lib/');

        // check if the module is available
            if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
                return;
            }

            await PDFNet.Convert.fileToWord(pdf, docx);

            //MongoDB
            // const saveFile = await fileSchema.create({
            //     name: req.file.originalname,
            //     file: {
            //         data: fs.readFileSync('./file/' + req.file.originalname.split('.pdf').join('.docx')),
            //         contentType: "application/msword"
            //     }
            // })

            res.status(200).json('')
            console.log('conversion complete')

            setTimeout(() => {
                fs.unlinkSync(docx)
                fs.unlinkSync(pdf)
            }, 5000)

            } catch (error) {
                res.status(500).json('failed')
                console.log(error.message)
                fs.unlinkSync(docx)
                fs.unlinkSync(pdf)
            }
        }
        PDFNet.runWithCleanup(main, process.env.YOUR_LICENSE_KEY)
}

module.exports = {
    pdfoffice
}