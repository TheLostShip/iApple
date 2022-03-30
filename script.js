score = 0;
cross = true;
document.onkeydown = function(e) {
    console.log("Key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        HP = document.querySelector(".HP");
        HP.classList.add("animateHP");
        setTimeout(() => {
            HP.classList.remove("animateHP");
        }, 700);
    }
    if (e.keyCode == 39) {
        HP = document.querySelector('.HP');
        HPX = parseInt(window.getComputedStyle(HP, null).getPropertyValue('left'));
        HP.style.left = HPX + 112 + "px";
    }
    if (e.keyCode == 37) {
        HP = document.querySelector('.HP');
        HPX = parseInt(window.getComputedStyle(HP, null).getPropertyValue('left'));
        HP.style.left = (HPX - 112) + "px";
    }
}

setInterval(() => {
    HP = document.querySelector('.HP');
    gameOver = document.querySelector('.gameOver');
    apple = document.querySelector('.apple');

    Hx = parseInt(window.getComputedStyle(HP, null).getPropertyValue('left'));
    Hy = parseInt(window.getComputedStyle(HP, null).getPropertyValue('top'));

    ax = parseInt(window.getComputedStyle(apple, null).getPropertyValue('left'));
    ay = parseInt(window.getComputedStyle(apple, null).getPropertyValue('top'));

    offsetX = Math.abs(Hx - ax);
    offsetY = Math.abs(Hy - ay);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - reload to play again";
        apple.classList.remove('obstacleAni')
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(apple, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            apple.style.animationDuration = aniDur + 's';
            console.log('New animation duration: ', newDur);
        }, 500);
    }
}, 10);

function updateScore(score) {
    scorecont.innerHTML = "Your Score: " + score
}