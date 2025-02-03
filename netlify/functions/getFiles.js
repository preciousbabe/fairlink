const fs = require('fs');
const path = require('path');

exports.handler = async () => {
    const filesDirectory = path.join(__dirname, 'files'); // Adjusted path

    try {
        // Read the files from the 'files' directory
        const files = fs.readdirSync(filesDirectory);

        // Return the list of files as a JSON response
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Fix CORS issue
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
