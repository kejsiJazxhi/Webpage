console.log("response.js loaded");
document.querySelector(".button").addEventListener("click", function () {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  if (
    name != "" &&
    email != "" &&
    email.includes("@")
  ) {
    console.log("done");
    alert("Your message was sent successfully!");
  }
});
