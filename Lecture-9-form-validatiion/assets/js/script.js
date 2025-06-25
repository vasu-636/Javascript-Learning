$(document).ready(function () {
    let nameElement = document.getElementById("floatingName");
    let emailElement = document.getElementById("floatingEmail");
    let passwordElement = document.getElementById("floatingPassword");
    let confirmElement = document.getElementById("floatingConfirm");
    let dobElement = document.getElementById("floatingDOB");

    $("#submit").on("click", function (e) {
      e.preventDefault();

      let name = nameElement.value.trim();
      let email = emailElement.value.trim();
      let password = passwordElement.value;
      let confirm = confirmElement.value;
      let dob = dobElement.value;
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

      if (name === "") {
        Swal.fire("Please enter your full name.");
        return;
      }

      if (!emailRegex.test(email)) {
        Swal.fire("Invalid Email. Please enter a valid email address.");
        return;
      }

      if (!passwordRegex.test(password)) {
        Swal.fire("Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
        return;
      }

      if (password !== confirm) {
        Swal.fire("Passwords do not match.");
        return;
      }

      if (dob === "") {
        Swal.fire("Please select your date of birth.");
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Account created successfully.",
      });
      
    });
  });