const passwordField = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const confirmPasswordField = document.getElementById("confirmPassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const iconEye = document.getElementById("icon-eye");

togglePassword.addEventListener("click", function () {
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;

  // Toggle the icon and button text
  if (type === "password") {
    togglePassword.innerHTML = `
<svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#3A3541" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#3A3541" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="3" stroke="#3A3541" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  } else {
    togglePassword.innerHTML = `<svg id="icon-eye" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 
      10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 
      17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 
      4.63 10.35 4.5 11 4.5Z" fill="#3A3541" fill-opacity="0.38"/>
    </svg>`;
  }
});

toggleConfirmPassword.addEventListener("click", function () {
  const type = confirmPasswordField.type === "password" ? "text" : "password";
  confirmPasswordField.type = type;

  // Toggle the icon and button text
  if (type === "password") {
    toggleConfirmPassword.innerHTML = `
<svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#3A3541" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#3A3541" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="3" stroke="#3A3541" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  } else {
    toggleConfirmPassword.innerHTML = `<svg id="icon-eye" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 
      10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 
      17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 
      4.63 10.35 4.5 11 4.5Z" fill="#3A3541" fill-opacity="0.38"/>
    </svg>`;
  }
});
