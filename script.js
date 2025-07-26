function generateQR() {
  const amount = document.getElementById('amount').value;
  const qrBox = document.getElementById('qrBox');
  const statusDiv = document.getElementById('status');

  if (!amount || amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }

  const upiID = "8904556907@upi"; // Replace this
  const name = "Paisa bhej 💸";     // Your store/brand name
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

  qrBox.innerHTML = '';
  QRCode.toCanvas(document.createElement('canvas'), upiLink, function (error, canvas) {
    if (error) console.error(error);
    qrBox.appendChild(canvas);
  });

  const successLines = [
  "Bhai paisa aagaya! Ab party kis din hai?",
  "Yeh hui na baat! UPI ne finally izzat rakh li!",
  "Ab bolo... bhai ne bola tha paisa ayega!",
  "Bhai paisa aaya hai... ab chai samosa ho jaye?",
  "Arre arre! UPI ne toh kamaal kar diya, paisa turant!",
  "Chaandi ho gayi bhai! Paise ne entry maar di!",
  "Kya baat hai! Iss baar UPI ne record tod diya!",
  "Jai ho UPI Maharaj ki! Paise ki leela apar hai!"
];

const randomSuccess = successLines[Math.floor(Math.random() * successLines.length)];
statusDiv.innerHTML = `✅ ₹${amount} received! ${randomSuccess}`;

}
