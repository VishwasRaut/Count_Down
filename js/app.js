const endDate = "24 Februray 2024 06:00 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end - now) / 1000
    // console.log(diff);
    //days
    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    //hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //minuts
    inputs[2].value = Math.floor(diff / 60) % 60;
    //seconds
    inputs[3].value = Math.floor(diff) % 60;
    // console.log(Math.floor(diff) % 60);
}

clock();

setInterval(
    () => {
        clock()
    }, 1000
)