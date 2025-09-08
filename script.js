// ===============================
// Custom Form Validation
// ===============================
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting automatically

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("formError");

  // Basic custom validation (not just HTML5)
  if (name === "" || email === "" || message === "") {
    errorMsg.textContent = "⚠️ All fields are required!";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsg.textContent = "⚠️ Please enter a valid email address.";
    return;
  }

  errorMsg.textContent = ""; // clear error
  alert("✅ Thank you for your feedback, " + name + "!");
  document.getElementById("feedbackForm").reset();
});

// ===============================
// Interactive Feature #1: Task Manager
// ===============================
document.getElementById("addTaskBtn").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("⚠️ Please enter a task!");
    return;
  }

  // Create a new task item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add a "remove" button for each task
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "10px";
  removeBtn.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  
  taskInput.value = ""; // clear input
});

// ===============================
// Interactive Feature #2: Random Background Color
// ===============================
document.getElementById("colorBtn").addEventListener("click", function() {
  const colors = ["#f4a261", "#2a9d8f", "#e76f51", "#264653", "#a8dadc", "#ffb703"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
