// On Click Toggles class
document.querySelector('.wrapper').addEventListener(
    'click', (e) => {
        e.currentTarget.classList.toggle('is-active');
    });