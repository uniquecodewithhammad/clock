function updatedate() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let clock = document.getElementById("clock")
    clock.innerHTML = h + ":" + m + ":" + s
  }
  setInterval(updatedate, 1000)