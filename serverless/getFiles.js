const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    console.log('Function invoked');
    const directoryPath = path.join(__dirname, '..', 'static', 'files'); // Pointing to static/files
    console.log('Directory path:', directoryPath);

    try {
        const files = fs.readdirSync(directoryPath); // Reading files in the directory
        console.log('Files found:', files);

        const downloadableFiles = files.map(file => ({
            name: file,
            url: `/static/files/${file}` // Dynamic URL creation
        }));

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
                message: 'Failed to load files.',
                error: error.message
            }),
        };
    }
};