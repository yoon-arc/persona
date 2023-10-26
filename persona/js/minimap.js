const minimapDots = document.querySelectorAll(".mapIcon");

minimapDots.forEach(dot => {
    dot.addEventListener("click", () => {
        const targetId = dot.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        // 스크롤 위치 계산
        if (targetSection) { // target section이 존재하는지 확인
            const elementRect = targetSection.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const absoluteElementLeft = elementRect.left + window.pageXOffset;
            const middlePositionY = absoluteElementTop - (window.innerHeight / 2) + 300;
            const middlePositionX = absoluteElementLeft - (window.innerWidth / 2); + 300;

            window.scrollTo({
                top: middlePositionY,
                left: middlePositionX,
                behavior: "smooth"
              });
        }
    });
});



