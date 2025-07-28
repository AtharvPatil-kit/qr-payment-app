function generateQR() {
  const upi = "8904556907@upi";
  const amount = document.getElementById("amount").value.trim();

  if (!amount) {
    alert("Please enter an amount.");
    return;
  }

  const upiLink = `upi://pay?pa=${upi}&pn=QR Payment&am=${amount}&cu=INR`;

  document.getElementById("upi-link").textContent = upiLink;
  document.getElementById("qr-img").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(upiLink);

  document.getElementById("result").style.display = "block";
}

function copyLink() {
  const text = document.getElementById("upi-link").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("UPI link copied to clipboard!");
  });
}