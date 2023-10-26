const map = document.querySelector('.map');
const redDot = document.getElementById('red-dot');

let mousePos = { x: 0, y: 0 };
let dotPos = { x: 0, y: 0 };

function lerp(start, end, factor) {
    return (1 - factor) * start + factor * end;
}

map.addEventListener('mousemove', function(e) {
    const xRatio = e.clientX / document.documentElement.clientWidth;
    const yRatio = e.clientY / document.documentElement.clientHeight;

    mousePos.x = xRatio * 1000; // "400" is the width of .minimap.
    mousePos.y = yRatio * 1000; // "400" is the height of .minimap.
});

function update() {
    dotPos.x = lerp(dotPos.x, mousePos.x, 0.1);
    dotPos.y = lerp(dotPos.y, mousePos.y, 0.1);

    redDot.style.left = `${dotPos.x}px`;
    redDot.style.top = `${dotPos.y}px`;

   requestAnimationFrame(update);
}

update();
