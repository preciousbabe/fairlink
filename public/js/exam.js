document.addEventListener("DOMContentLoaded", () => {
    const files = [
        "UGOBEST UTME PHYSICS_111916.pdf",
        // "Mathematics_101.pdf",
        // "English_Literature.pdf",
        // "Biology_Handbook.pdf",
        // "History_Guide.pdf",
        // "Computer_Science_Basics.pdf",
        // "Economics_Principles.pdf",
        // "Geography_Textbook.pdf"
    ];

    const container = document.getElementById("fileContainer");

    files.forEach(file => {
        const card = document.createElement("div");
        card.className = "file-card";

        card.innerHTML = `
            <span class="file-name">${file}</span>
            <a href="/files/${file}" download class="download-icon">
                &#x1F4E5; <!-- Download Icon -->
            </a>
        `;

        container.appendChild(card);
    });
});
