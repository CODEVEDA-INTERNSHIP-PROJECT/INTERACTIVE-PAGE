// Dropdown functionality
const dropdown = document.querySelector("select");
const dropdownoutput=document.getElementById("dropdown-output");
dropdown.addEventListener("change", () => {
  // alert(`You selected: ${dropdown.value}`);
  dropdownoutput.innerText=dropdown.value;
});

// Modal functionality
const modalButton = document.querySelector("#modal-button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModal = document.querySelector("#close-modal");

modalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
});

modalOverlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

// closeModal.addEventListener("click", () => {
//   modal.style.display = "none";
//   modalOverlay.style.display = "none";
// });

// Form validation
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const errorElement = document.querySelector(".error"); // Matches the added .error paragraph

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let messages = [];

  if (nameInput.value.trim() === "") {
    messages.push("Name is required");
  }

  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    messages.push("Please enter a valid email");
  }

  if (messages.length > 0) {
    event.preventDefault();
    errorElement.textContent = messages.join(", ");
  } else {
    errorElement.textContent = ""; // Clear error messages if validation passes
  }
});

