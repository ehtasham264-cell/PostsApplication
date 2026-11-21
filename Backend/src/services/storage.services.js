const Imagekit = require('@imagekit/nodejs')

const imageKit = new Imagekit ({
    privateKey:process.env.IMAGE_PRIVATE_KEY

})

async function upload(buffer) {
    const result = await imageKit.files.upload({
        file: buffer.toString("base64"),
        fileName:'image.jpg'

    })
    return result
}

module.exports = upload;