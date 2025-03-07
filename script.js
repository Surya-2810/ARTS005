document.getElementById("restoreButton").addEventListener("click", function () {
    let fileInput = document.getElementById("imageUpload").files[0];

    if (!fileInput) {
        alert("Please upload an image first.");
        return;
    }

    let formData = new FormData();
    formData.append("file", fileInput);

    // Show original image preview
    document.getElementById("originalImage").src = URL.createObjectURL(fileInput);

    // Send image to backend for restoration
    fetch("http://localhost:8080/restore", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("restoredImage").src = data.restored_image_url;
    })
    .catch(error => console.error("Error:", error));
});
