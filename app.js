document.getElementById("open-transfer").addEventListener("click", () => {
  document.getElementById("home-screen").classList.add("hidden");
  document.getElementById("transfer-screen").classList.remove("hidden");
});

document.getElementById("go-back").addEventListener("click", () => {
  document.getElementById("transfer-screen").classList.add("hidden");
  document.getElementById("home-screen").classList.remove("hidden");
});

// login.html

function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }
  // Симуляция входа
  alert(`Welcome, ${username}!`);
  window.location.href = 'index.html';
}

// register.html

function registerUser() {
  const username = document.getElementById('regUsername').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  const errorMsg = document.getElementById('errorMsg');

  if (!username || !email || !password || !confirm) {
    errorMsg.textContent = 'All fields are required';
    return;
  }

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = 'Invalid email format';
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = 'Password must be at least 6 characters';
    return;
  }

  if (password !== confirm) {
    errorMsg.textContent = 'Passwords do not match';
    return;
  }

  alert(`Welcome, ${username}! Registration successful.`);
  window.location.href = 'login.html';
}
