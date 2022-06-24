let displayCounter = document.querySelector(".counter");
let starter = document.querySelector(".starter");
let reset = document.querySelector(".reseter");
let btns = document.querySelector(".btns");
let [millisecond, second, minutes, hours] = [0, 0, 0, 0];
let interval;

//? In Here, applied capturing method for adding start and reset buttons' event
btns.addEventListener('click', (e) => {
    if (e.target.classList.contains('starter')) {
        if (e.target.innerHTML !== 'Pause') {
            e.target.innerHTML = 'Pause';
            interval = setInterval(timer, 10);
        }
        else {
            e.target.classList.add('starter');
            e.target.innerHTML = 'Start';
            clearInterval(interval);
        }
    }
    if (e.target.classList.contains('reseter')) {
        starter.innerHTML = 'Start';
        clearInterval(interval);
        [millisecond, second, minutes, hours] = [0, 0, 0, 0];
        displayCounter.innerHTML = '00 : 00 : 00 : 00';
    }
});


//* In Here, first, created a function to increase millisecond, second, minute and hour; second, controlled digits of time block and then, finally added time in displayCounter div.
function timer() {
    //* first part of function
    millisecond += 1;
    if (millisecond == 100) {
        millisecond = 00;
        second++;
        if (second == 60) {
            second = 00;
            minutes++;
            if (minutes == 60) {
                minutes = 00;
                hours++;
            }
        }
    }

    //* second part of function
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + second : second;
    let ms = millisecond < 10 ? "0" + millisecond : millisecond;
    //* fourth part of function
    displayCounter.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
};