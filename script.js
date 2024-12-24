document.getElementById('generate-btn').addEventListener('click', function() {
    const dataInput = document.getElementById('data-input').value.trim();
	const sizeInput = parseInt(document.getElementById('size-input').value);
    const message = document.getElementById('message');
    const qrCanvas = document.getElementById('qr-code');

    // Clear previous messages
    message.textContent = '';

    if (dataInput) {
        // Create a new QRious instance
        const qr = new QRious({
            element: qrCanvas,
            value: dataInput,
            size: sizeInput,  // Size of the QR code canvas
            level: 'Q'  // Error correction level (L, M, Q, H) Recovery Capacity: -- LOW -- MEDIUM --Quartile -- HIGH
        });
		
		qrCanvas.style.display = 'block'; // Make the canvas visible
        
		// Provide success feedback
        message.style.color = 'green';
        message.textContent = 'QR Code generated successfully!';
    } else {
        // Provide error feedback
        message.style.color = 'red';
        message.textContent = 'Please enter some data.';
    }
});