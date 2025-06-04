const select = document.querySelector('.select');
const optionBtn = select.querySelector('.btn_option');
const options = select.querySelector('.select_option');
const selectItems = select.querySelectorAll('.select_item');
const activeItem = select.querySelector('.select_item.is_active');

if (activeItem) {
  optionBtn.textContent = activeItem.querySelector('.select_link').textContent;
}

optionBtn.addEventListener('click', () => {
  options.classList.toggle('is_show');
});

document.addEventListener('click', (e) => {
  if (!select.contains(e.target)) {
    optionBtn.classList.remove('is_show');
    options.classList.remove('is_show');
  }
});

selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedText = item.querySelector('.select_link').textContent;

    // Update active state
    select.querySelector('.select_item.is_active')?.classList.remove('is_active');
    item.classList.add('is_active');

    // Update button text and close dropdown
    optionBtn.textContent = selectedText;
    optionBtn.classList.remove('is_show');
    options.classList.remove('is_show');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    optionBtn.classList.remove('is_show');
    options.classList.remove('is_show');
  }
});
