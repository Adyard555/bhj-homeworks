const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const element = document.getElementById("link");
const download = document.getElementById("download");

const changeHour = function () {
   if (hour.textContent != 0) {
      hour.textContent -= 1;
      minute.textContent = 59;
      if (hour.textContent < 10) {
         hour.textContent = "0" + hour.textContent;
      }
      setTimeout(changeHour, 3600000);
      setTimeout(changeMinute, 60000);
      setTimeout(changeSeconds, 1000);
   }
}

const changeMinute = function () {
   if (minute.textContent != 0) {
      minute.textContent -= 1;
      second.textContent = 59;
      if (minute.textContent < 10) {
         minute.textContent = "0" + minute.textContent;
      }
      setTimeout(changeMinute, 60000);
      setTimeout(changeSeconds, 1000);
   }
}

const changeSeconds = function () {
   if (second.textContent != 0) {
      second.textContent -= 1;
      if (second.textContent < 10) {
         second.textContent = "0" + second.textContent;
      }
      setTimeout(changeSeconds, 1000);
      if (second.textContent === "00" && minute.textContent === "00" && hour.textContent === "00") {
         download.onclick = () => {
            alert("Вы победили в конкурсе!");
         };
         download.click();
      }
   }
}

if (hour.textContent != 0) {
   changeHour();
} else if (minute.textContent != 0) {
   changeMinute();
} else {
   changeSeconds();
}