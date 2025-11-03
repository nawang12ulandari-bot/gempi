(function() {
    emailjs.init("qKyLoZ-mgP-XvcO4v"); // Public Key EmailJS
  })();
  
  const btn = document.getElementById("contact-btn");
  const popup = document.getElementById("popup-form");
  const closeBtn = document.getElementById("close-popup");
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("success-message");
  
  btn.onclick = () => popup.style.display = "flex";
  closeBtn.onclick = () => popup.style.display = "none";
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_x1izriz", "template_psmeioc", this)
      .then(() => {
        successMsg.textContent = "Terima kasih, pesan kamu sudah terkirim!";
        successMsg.style.display = "block";
        form.reset();
        setTimeout(() => popup.style.display = "none", 2000);
      }, (error) => {
        alert("Gagal mengirim pesan: " + JSON.stringify(error));
      });
  });