const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    // Define the directory to look for files
    const directoryPath = path.join(__dirname, '..', 'static', 'files');

    try {
        // Read files from the directory
        const files = fs.readdirSync(directoryPath);

        // Create downloadable links for each file
        const downloadableFiles = files.map(file => {
            return {
                name: file,
                url: `/static/files/${file}` // Adjust the URL as needed for your setup
            };
        });

        // Send back the file names in JSON format
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                files: downloadableFiles
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