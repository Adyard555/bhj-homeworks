const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
const clicker__speed = document.getElementById("clicker__speed");
let targetClick = Number(clicker__counter.textContent);
let speedClick = Number(clicker__speed.textContent);
let lostTime = 0;
let nowTime = 0;
let isStart = false;

function changeSizes() {
   if (isStart) {
      targetClick++;
      nowTime = new Date();
      let seconds = (nowTime - lostTime) / 1000;
      speedClick = (1 / seconds).toFixed(2);
      if (cookie.width === 200) {
         cookie.width = cookie.width + 50;
         clicker__counter.textContent = targetClick;
         clicker__speed.textContent = speedClick;
      } else {
         cookie.width = 200;
         clicker__counter.textContent = targetClick;
         clicker__speed.textContent = speedClick;
      }
      lostTime = new Date();
   } else {
      targetClick++;
      clicker__counter.textContent = targetClick;
      lostTime = new Date();
      isStart = true;
   }
}

cookie.onclick = changeSizes;