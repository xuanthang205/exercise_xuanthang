const footerCols = document.querySelectorAll('.footer_wrap .col');

footerCols.forEach((col) => {
  const title = col.querySelector('.title');
  const list = col.querySelector('.footer_list');
  if (!title || !list) return;
  const titleText = title.textContent.trim();
  const shouldToggle = titleText === 'Page' || titleText === 'Info';
  if (shouldToggle) {
    title.addEventListener('click', () => {
      if (window.innerWidth <= 767.98) {
        title.classList.toggle('is_show');
        list.classList.toggle('is_show');
      }
    });
  }
});

// Use debounce to avoid calling multiple times when resizing
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (window.innerWidth > 767.98) {
      document.querySelectorAll('.footer_list.is_show, .footer_wrap .title.is_show').forEach((el) => el.classList.remove('is_show'));
    }
  }, 100); // 100ms delay to avoid lag
});
