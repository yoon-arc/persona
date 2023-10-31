var mouseMoved;

document.onmousemove = function(){
    mouseMoved = new Date();
    toggleVisibility('persona', 'landingPage');
}

setInterval(() => {
    var now = new Date();
    if (mouseMoved) {  // mouseMoveed 가 정의된 경우에만 아래 코드 실행
        var timeDiff = (now.getTime() - mouseMoved.getTime()) / 1000;
        if (timeDiff > 120){
            toggleVisibility('landingPage', 'persona');
        }
    }
}, 1000);

function toggleVisibility(showId, hideId){
    document.getElementById(showId).style.opacity = '1';
    document.getElementById(showId).style.display = 'block';
    document.getElementById(hideId).style.opacity = '0';

    // 'transitionend' 이벤트를 사용하여 트랜지션이 끝난 후에 display 속성을 변경합니다.
    document.getElementById(hideId).addEventListener('transitionend', function() {
        if(document.getElementById(hideId).style.opacity == '0') {
            document.getElementById(hideId).style.display = 'none';
        }
    });
}

