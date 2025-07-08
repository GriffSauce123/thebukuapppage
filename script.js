const button = document.getElementById('theme-toggle');
const html = document.documentElement;

const current = localStorage.getItem('theme');
if (current) {
    html.setAttribute('data-theme', current);
} else {
    html.setAttribute('data-theme', 'system');
}

button.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    if (current === 'light') {
        var next = 'dark'
    }
    else {
        var next = 'light'
    }
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    console.log(current, next)
});
