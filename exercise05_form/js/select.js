const selectItems = document.querySelectorAll('.select .select_item');
const optionBtn = document.querySelector('.select .btn_option');
const iconSelect = document.querySelector('.select .icon_arrow_down');
const options = document.querySelector('.select_option');

optionBtn.addEventListener('click', () => {
  options.classList.toggle('is_show');
  optionBtn.classList.toggle('is_show');
});

// Handling when selecting items
selectItems.forEach(function (item) {
  item.addEventListener('click', function () {
    const selectedText = this.querySelector('.select_link').textContent;
    // Remove old is_active
    document.querySelector('.select .is_active')?.classList.remove('is_active');
    // Assign new is_active
    this.classList.add('is_active');
    // Update main button content
    optionBtn.textContent = selectedText;
    optionBtn.classList.remove('is_show');
    options.classList.remove('is_show');
  });
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    optionBtn.classList.remove('is_show');
    options.classList.remove('is_show');
  }
});
