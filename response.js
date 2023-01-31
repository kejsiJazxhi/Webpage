console.log("response.js loaded");
document.querySelector(".submit").addEventListener("click", function () {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let department = document.querySelector(".dep").value;
  let doctor = document.querySelector(".dec").value;
  let date = document.querySelector(".date").value;
  let phone = document.querySelector(".phone").value;
  if (
    name != "" &&
    email != "" &&
    department != "" &&
    doctor != "" &&
    date != "" &&
    phone != "" &&
    email.includes("@")
  ) {
    console.log("done");
    alert("Form is submitted successfully!");
  }
});
