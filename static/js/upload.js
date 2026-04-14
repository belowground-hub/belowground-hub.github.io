// REPLACE THIS URL WITH YOUR NEW WEB APP URL
//https://script.google.com/macros/s/AKfycbxTLBPHegkWFRDJAKTdDYXdYAm3DbA4M9Vdg6dcY8ZT_K_F2xlLCEvXfJrRfPLmigxD/exec
var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTLBPHegkWFRDJAKTdDYXdYAm3DbA4M9Vdg6dcY8ZT_K_F2xlLCEvXfJrRfPLmigxD/exec";

async function handleUpload() {
    const fileInput = document.getElementById('fileInput');
    const btn = document.querySelector('.btn');
    if (!fileInput.files.length) return alert("Select a file.");

    const file = fileInput.files[0];
    const reader = new FileReader();
    btn.innerText = "UPLOADING...";

    reader.onload = async () => {
        const base64 = reader.result.split(',')[1];
        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({ base64: base64, type: file.type, name: file.name })
            });
            alert("Upload Complete!");
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Upload failed. Check console.");
        } finally {
            btn.innerText = "PUSH TO DRIVE";
        }
    };
    reader.readAsDataURL(file);
}