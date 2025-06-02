const monitor = document.getElementById('monitor');
const projector = document.getElementById('projector');
const projectorContent = document.getElementById('projector-content');
const windows = Array.from(document.querySelectorAll('.window'));

function spread() {
    projector.style.opacity = 1;
    projectorContent.innerHTML = '';
    windows.forEach((w, i) => {
        const clone = w.cloneNode(true);
        clone.style.transform = `translateY(0)`;
        projectorContent.appendChild(clone);
        w.style.transform = `translate(${(i - 1) * 120}px, 200px)`;
    });
}

function gather() {
    projector.style.opacity = 0;
    projectorContent.innerHTML = '';
    windows.forEach((w) => {
        w.style.transform = 'translate(0,0)';
    });
}

document.getElementById('spread').addEventListener('click', spread);
document.getElementById('gather').addEventListener('click', gather);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') spread();
    if (e.key === 'ArrowDown') gather();
});
