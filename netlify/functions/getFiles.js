const fs = require("fs").promises; // Use promises version
const path = require("path");

exports.handler = async () => { // Use module.exports for compatibility
  const directoryPath = path.join(process.cwd(), 'static', 'files'); // Correct directory path
  
  try {
    // Read the files in the directory asynchronously
    const files = await fs.readdir(directoryPath);
    
    // Map files to include URLs for downloading
    const downloadableFiles = files.map(file => ({
      name: file,
      url: `/static/files/${file}` // Create dynamic URLs
    }));

    // Return the list of files as JSON
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        files: downloadableFiles
      }),
    };
  } catch (err) {
    // Handle errors
    return {
      statusCode: 422,
      body: JSON.stringify({
        success: false,
        message: 'Failed to load files.',
        error: err.stack
      }),
    };
  }
};