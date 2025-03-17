//data handling
const form = document.getElementById("formInput");
const nameInput = document.getElementById("fullnameInput");
const emailInput = document.getElementById("mailInput");
const passwordInput = document.getElementById("passwordInput");
const phoneInput = document.getElementById("phoneInput");
const resultContainer = document.getElementById("customerResult");
const userList = document.getElementById("list");
const resetButton = document.getElementById("resetButton");

let users = JSON.parse(localStorage.getItem("users")) || [];
let editingUserIndex = -1;

// Render the user list
const renderUserList = () => {
  userList.innerHTML = users.map(
    (user, index) => `
      <div class="usersli">
        <span>${user.email}</span>
        <div>
          <button class="custom-button" onclick="editUser(${index})">Edit</button>
          <button class="custom-button" onclick="removeUser(${index})">Remove</button>
        </div>
      </div>
    `
  ).join('');
};

//  submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!fullname || !email || !password || !phone) {
    alert("Please fill in all the fields.");
    return;
  }

  const updatedUser = { fullname, email, password, phone };

  if (editingUserIndex >= 0) {
    users[editingUserIndex] = updatedUser;
    editingUserIndex = -1;
  } else {
    users.push(updatedUser);
  }

  localStorage.setItem("users", JSON.stringify(users));
  form.reset();
  renderUserList();
});

// Remove user
const removeUser = (index) => {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUserList();
};

// Edit user
const editUser = (index) => {
  const user = users[index];
  nameInput.value = user.fullname;
  emailInput.value = user.email;
  passwordInput.value = user.password;
  phoneInput.value = user.phone;
  editingUserIndex = index;
};

// Reset data
resetButton.addEventListener("click", () => {
  users = [];
  localStorage.removeItem("users");
  renderUserList();
});


renderUserList();
