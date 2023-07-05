document.getElementById("phone-icon").addEventListener("click", function () {
    var phoneNumber = document.querySelector(".mobile-hidden-text").textContent;
    if (phoneNumber) {
      navigator.clipboard.writeText(phoneNumber);
      alert("Phone number copied to clipboard: " + phoneNumber);
    }
  });