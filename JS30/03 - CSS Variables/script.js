const inputs = document.querySelectorAll('input');

['change', 'mousemove'].forEach(listenFor => {
    inputs.forEach(element => {
        element.addEventListener(listenFor, handleInput);
    });
});

function handleInput() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}