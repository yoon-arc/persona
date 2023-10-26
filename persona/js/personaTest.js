const entireSite = document.querySelector('.personaTest');
const redDot = document.getElementById('red-dot');

let mousePos = { x: 0, y: 0 };
let dotPos = { x: 0, y: 0 };
var body = document.body,
    html = document.documentElement;

/*function lerp(start, end, factor) {
    return (1 - factor) * start + factor * end;
}*/

entireSite.addEventListener('mousemove', function(e) {
    updateRedDot(e);
});

entireSite.addEventListener('wheel', function(e) {
    updateRedDot(e);
});

function updateRedDot(e){
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
    const xRatio = e.pageX / 8000;
    const yRatio = e.pageY / 8000;

    //mousePos.x = xRatio * 1000; // "400" is the width of .minimap.
    //mousePos.y = yRatio * 1000; // "400" is the height of .minimap.
    mousePos.x = xRatio * 400 + 5;
    mousePos.y = yRatio * 400 + 5;
}

function update() {
    //dotPos.x = lerp(dotPos.x, mousePos.x, 0.1);
    //dotPos.y = lerp(dotPos.y, mousePos.y, 0.1);
    dotPos.x = mousePos.x;
    dotPos.y = mousePos.y;
    redDot.style.left = `${dotPos.x}px`;
    redDot.style.top = `${dotPos.y}px`;

   requestAnimationFrame(update);
}

update();
