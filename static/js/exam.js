document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('/.netlify/functions/getFiles', { // Corrected here
            method: 'GET',
            headers: {
                Accept: "application/json"
            }
        });
        
        const data = await response.json();
        const container = document.getElementById("fileContainer");

        if (data.success) {
            data.files.forEach(file => {
                const card = document.createElement("div");
                card.className = "file-card";
                card.innerHTML = `
                    <span class="file-name">${file.name}</span>
                    <a href="${file.url}" download class="download-icon">
                        &#x1F4E5; <!-- Download Icon -->
                    </a>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = "<p>Failed to load files.</p>";
        }
    } catch (error) {
        console.error("Error fetching files:", error);
        const container = document.getElementById("fileContainer");
        container.innerHTML = "<p>Error loading files. Please try again later.</p>";
    }
});