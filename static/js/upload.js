var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwCzCIo5B1isazCkBT1MxfMDZSxa8ypJJPKpabXg27HnQxPP5Yp9UmEFyen8UwnOJhjqg/exec";

async function handleUpload() {
    const fileInput = document.getElementById('fileInput');
    const dateInput = document.getElementById('showDate');
    const venueSelect = document.getElementById('venueSelect');
    const customVenue = document.getElementById('customVenue');
    const btn = document.querySelector('.btn');

    if (!fileInput || !dateInput || !venueSelect) {
        console.error("Could not find one or more form elements!");
        return;
    }

    if (!fileInput.files.length || !dateInput.value || !venueSelect.value) {
        alert("Please fill out all fields.");
        return;
    }

    let venue = venueSelect.value === 'OTHER' ? customVenue.value : venueSelect.value;
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    btn.innerText = "UPLOADING...";
    btn.disabled = true;

    reader.onload = async () => {
        const base64 = reader.result.split(',')[1];
        
        const rawData = JSON.stringify({ 
            base64: base64, 
            type: file.type, 
            date: dateInput.value, 
            venue: venue 
        });

        // THE FIX: Wrap the data so it survives Google's redirect
        const params = new URLSearchParams();
        params.append("payload", rawData);

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', 
                body: params // Send the wrapper instead of the raw string
            });

            alert("Flyer sent! Checking Drive now...");
            window.location.href = "/";
            
        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Connection error.");
        } finally {
            btn.innerText = "PUSH TO DRIVE";
            btn.disabled = false;
        }
    };

    reader.readAsDataURL(file);
}