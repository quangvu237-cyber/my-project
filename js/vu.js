function addSkill() {
  const newSkill = prompt("Nhập kỹ năng mới:");
  if (newSkill) {
    const li = document.createElement("li");
    li.textContent = newSkill;
    document.getElementById("skills-list").appendChild(li);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("message").textContent =
    `Cảm ơn bạn, ${name}, mình sẽ liên hệ sớm nhất có thể!`;
  event.target.reset(); // Xóa form
  return false;
}
