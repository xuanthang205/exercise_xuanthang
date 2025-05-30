const ratings = document.querySelectorAll('.rating');

function updateRatingValue(input) {
  input.style.setProperty('--value', input.valueAsNumber);
}

ratings.forEach((input, index) => {
  const key = `rating-${index}`;
  // Get saved data (if any)
  const savedValue = localStorage.getItem(key);
  if (savedValue !== null) {
    input.value = savedValue;
  }
  // Initial UI Update 
  updateRatingValue(input);
  // Capture event when user changes
  input.addEventListener('input',() => {
    updateRatingValue(input);
    localStorage.setItem(key, input.value); // Lưu lại giá trị
  });
});


