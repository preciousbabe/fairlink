const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    // Define the directory to look for files
    const directoryPath = path.join(__dirname, '../files'); // Adjust path as needed

    try {
        // Read files from the directory
        const files = fs.readdirSync(directoryPath);

        // Send back the file names in JSON format
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                files: files
            }),
        };
    } catch (error) {
        console.error('Error reading files:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: 'Failed to load files.'
            }),
        };
    }
};