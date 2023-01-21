require('dotenv').config()

const { PDFNet } = require('@pdftron/pdfnet-node')

//pdf to office
const pdfoffice = (req, res) => {
    
        async function main() {
            try {
                await PDFNet.addResourceSearchPath('./lib/');

        // check if the module is available
            if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
                return;
            }

            await PDFNet.Convert.fileToWord('H:/projects/file-conversion/server/public/image.pdf', 'H:/projects/file-conversion/server/file/download.docx');

            res.status(200).json('success')
            } catch (error) {
                res.status(500).json('failed')
                console.log(error.message)
            }
        }
        PDFNet.runWithCleanup(main, process.env.YOUR_LICENSE_KEY)
}

module.exports = {
    pdfoffice
}