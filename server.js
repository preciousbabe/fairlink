const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

// Folder where files are stored
const filesDirectory = path.join(__dirname, "public/files");

// Serve static files
app.use(express.static("public"));

// Endpoint to get the list of files
app.get("/files", (req, res) => {
    fs.readdir(filesDirectory, (err, files) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Unable to read files" });
        }
        res.json({ success: true, files });
    });
});

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
