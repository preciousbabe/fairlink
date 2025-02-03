const fs = require("fs").promises; // Use promises version
const path = require("path");

exports.handler = async () => {
  const files = ["UGOBEST UTME PHYSICS_111916.pdf", "BIOLOGY JAMB PAST QUESTION (2014- till date).docx"]; // List of available files

  const downloadableFiles = files.map(file => ({
    name: file,
    url: `${process.env.URL}/files/${file}` // Use Netlify-hosted URLs
  }));

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, files: downloadableFiles }),
  };
};
