function generateQR() {
  const amount = document.getElementById('amount').value;
  const qrBox = document.getElementById('qrBox');
  const statusDiv = document.getElementById('status');

  if (!amount || amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }

  const upiID = "8904556907@upi"; // Replace this
  const name = "Atharv Patil";     // Your store/brand name
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

  qrBox.innerHTML = '';
  QRCode.toCanvas(document.createElement('canvas'), upiLink, function (error, canvas) {
    if (error) console.error(error);
    qrBox.appendChild(canvas);
  });

  statusDiv.innerHTML = '⏳ Waiting for payment (manual confirmation)...';
}
