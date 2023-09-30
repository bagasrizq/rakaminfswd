const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 1;
    navBar.classList.toggle
    ("scrolling-active", windowPosition);
});
