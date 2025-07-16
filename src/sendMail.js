// sending email

import emailjs from "@emailjs/browser";

const service_key = process.env.PARCEL_EMAILJS_SERVICE_KEY;
const template_key = process.env.PARCEL_EMAILJS_TEMPLATE_KEY;
const public_key = process.env.PARCEL_EMAILJS_PUBLIC_KEY;

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById("senderName").value,
      email: document.getElementById("senderEmail").value,
      message: document.getElementById("message").value,
    };

    console.log("FormData:", formData);

    emailjs
      .send(service_key, template_key, formData, public_key)
      .then(() => {
        alert("Email sent successfully!");
        document.getElementById("senderName").value = "";
        document.getElementById("senderEmail").value = "";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      });
  });

document
  .getElementById("contactForm")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const formData = {
        name: document.getElementById("senderName").value,
        email: document.getElementById("senderEmail").value,
        message: document.getElementById("message").value,
      };

      console.log("FormData:", formData);

      emailjs
        .send(service_key, template_key, formData, public_key)
        .then(() => {
          alert("Email sent successfully!");
          document.getElementById("senderName").value = "";
          document.getElementById("senderEmail").value = "";
          document.getElementById("message").value = "";
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        });
    }
  });
