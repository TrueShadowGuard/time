const $clock = document.querySelector(".clock");
const $time = document.getElementById("time");

setInterval(clockTick, 1000 / 60);
setInterval(timeTick, 1000);

clockTick();
timeTick();

function clockTick() {
    const date = new Date();

    $clock.style.cssText = `
    --seconds: ${date.getSeconds() + date.getMilliseconds() / 1000}; 
    --minutes: ${date.getMinutes() + date.getSeconds() / 60}; 
    --hours: ${date.getHours() - 12 + date.getMinutes() / 60}
    `;
}

function timeTick() {
    const date = new Date();
    $time.innerText = date.toTimeString().split(" ")[0];
}