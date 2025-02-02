const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    const filesDirectory = path.join(__dirname, '..', 'public', 'files'); // Path to the files directory

    try {
        // Read the files from the 'files' directory
        const files = fs.readdirSync(filesDirectory);

        // Return the list of files as a JSON response
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                files: files // List of file names
            })
        };
    } catch (err) {
        // In case of an error (e.g., unable to read the files)
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: 'Unable to read files'
            })
        };
    }
};
