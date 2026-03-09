const text = document.querySelector('.scroll-text');
const letters = text.textContent.split('');
text.textContent = '';

letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter === ' ' ? '\u00A0' : letter;
    span.style.position = 'relative';
    span.style.display = 'inline-block';
    span.style.transition = 'transform 0.1s';
    span.style.transform = `translateY(${Math.sin(index) * 20}px)`;
    text.appendChild(span);
});

window.addEventListener('wheel', (e) => {
    const spans = text.querySelectorAll('span');
    spans.forEach((span, index) => {
        const offset = e.deltaY * 0.1;
        span.style.transform = `translateY(${Math.sin(index + offset) * 20}px)`;
    });
});

window.addEventListener('mousemove', (e) => {
    const spans = text.querySelectorAll('span');
    const mouseX = e.clientX / window.innerWidth;
    spans.forEach((span, index) => {
        const offset = mouseX * (index % 2 === 0 ? 1 : -1) * 10;
        span.style.transform = `translateY(${Math.sin(index + offset) * 20}px)`;
    });
});
