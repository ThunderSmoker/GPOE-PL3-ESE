
function registerUser(event) {
  event.preventDefault();
  console.log("hello");
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  var registrations = localStorage.getItem('registrations');
  var users = registrations ? JSON.parse(registrations) : [];

  var user = { username: username, password: password };
  users.push(user);

  localStorage.setItem('registrations', JSON.stringify(users));

  alert('Registration successful!');
  window.location.href="login.html"
}

  

function loginUser(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var registrations = localStorage.getItem('registrations');
  var users = registrations ? JSON.parse(registrations) : [];
  
  var valid = false;
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.username === username && user.password === password) {
      valid = true;
      break;
    }
  }
  
  if (valid) {
    alert('Login successful!');
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password!');
  }
}
