var mouseMoved;

document.onmousemove = function(){
    mouseMoved = new Date();
    showPersona();
}

setInterval(() => {
    var now = new Date();
    if (mouseMoved) {  // mouseMoveed 가 정의된 경우에만 아래 코드 실행
        var timeDiff = (now.getTime() - mouseMoved.getTime()) / 1000;
        if (timeDiff > 10){
            backToLanding();
        }
    }
}, 1000);

function backToLanding(){
    document.getElementById('landingPage').style.display = 'block';
    document.getElementById('persona').style.display = 'none';

}

function showPersona(){
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('persona').style.display = 'block';
}

function toggleVisibility(showId, hideId){
    document.getElementById(showId).classList.add('show');
    document.getElementById(hideId).classList.remove('show');
 }