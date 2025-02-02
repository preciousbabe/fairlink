const fs = require("fs");
const path = require("path");

exports.handler = async function(event, context) {
    const filesDirectory = path.join(__dirname, "../public/files");

    return new Promise((resolve, reject) => {
        fs.readdir(filesDirectory, (err, files) => {
            if (err) {
                resolve({
                    statusCode: 500,
                    body: JSON.stringify({ success: false, message: "Unable to read files" }),
                });
            } else {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({ success: true, files }),
                });
            }
        });
    });
};
