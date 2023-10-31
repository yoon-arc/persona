const minimapDots = document.querySelectorAll(".mapIcon");

minimapDots.forEach(dot => {
    dot.addEventListener("click", () => {
        const targetId = dot.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        // 스크롤 위치 계산
        if (targetSection) {
            const elementRect = targetSection.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const absoluteElementLeft = elementRect.left + window.pageXOffset;
            const middlePositionY = absoluteElementTop - (window.innerHeight / 2) + 300 + 200;
            const middlePositionX = absoluteElementLeft - (window.innerWidth / 2) + 300 + 500;

            // 먼저 y축으로 이동
            window.scrollTo({
                top: middlePositionY,
                behavior: "smooth"
            });

            let lastScrollTop = window.pageYOffset; // 이전 스크롤 위치 저장

            // 스크롤 이동이 완료되었는지 확인하는 함수
            function checkScrollEnd() {
                const currentScrollTop = window.pageYOffset;
                if (lastScrollTop === currentScrollTop) {
                    // 스크롤 이동이 완료되었으므로 x축으로 이동
                    window.scrollTo({
                        left: middlePositionX,
                        behavior: "smooth"
                    });
                } else {
                    // 스크롤 이동이 완료되지 않았으므로 다음 화면을 그리기 전에 다시 확인
                    lastScrollTop = currentScrollTop; // 이전 스크롤 위치 업데이트
                    window.requestAnimationFrame(checkScrollEnd);
                }
            }

            // 다음 화면을 그리기 전에 스크롤 이동이 완료되었는지 확인
            setTimeout(() => {window.requestAnimationFrame(checkScrollEnd)}, 500);
        }
    });
});
