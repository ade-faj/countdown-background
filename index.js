
let countdownElement = document.getElementById('countdown');

let initialCountdownVal = countdownElement.innerHTML;

let bgImgElement = document.getElementById('bg-image');

let coutdow = setInterval(
    function(){
        initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0 ;
        countdownElement.innerHTML = initialCountdownVal;
        let backImgPath = initialCountdownVal % 2 === 0 ? './images/img1.jpeg' : './images/img2.jpeg';

        bgImgElement.src = backImgPath;

        console.log(initialCountdownVal)

        if (initialCountdownVal <= 0) {
            clearInterval(coutdow)
        }
    }, 1000
);
