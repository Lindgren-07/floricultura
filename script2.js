
  let count = 0;
  let slideTotal = 4;
  document.getElementById("radio1").checked = true;

  setInterval(function() {
    nextImage();
  }, 4000);

  function nextImage() {
    count++;
    if (count >= slideTotal) {
      count = 0;
    }
    document.getElementById("radio" + (count + 1)).checked = true;
  }