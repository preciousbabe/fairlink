document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("fileContainer");

    try {
        const response = await fetch('/.netlify/functions/getFiles', {
            method: 'GET',
            headers: { Accept: "application/json" }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success && data.files.length > 0) {
            data.files.forEach(file => {
                const card = document.createElement("div");
                card.className = "file-card";
                card.innerHTML = `
                    <span class="file-name">${file.name}</span>
                    <a href="${file.url}" download class="download-icon" title="Download ${file.name}">
                        📥 <!-- Unicode download icon -->
                    </a>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = "<p>No files available.</p>";
        }
    } catch (error) {
        console.error("Error fetching files:", error);
        container.innerHTML = "<p>Error loading files. Please try again later.</p>";
    }
});
