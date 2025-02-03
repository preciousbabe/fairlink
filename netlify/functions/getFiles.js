const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    const filesDirectory = path.join(__dirname, 'files'); // Adjust this path if needed

    try {
        const files = fs.readdirSync(filesDirectory);
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                success: true,
                files
            })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: 'Unable to read files'
            })
        };
    }
};