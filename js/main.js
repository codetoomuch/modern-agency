const toggleButton = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggleButton.addEventListener("click", function toggleState() {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});
