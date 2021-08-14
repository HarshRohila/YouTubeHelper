(function () {
  var btns = document.getElementsByClassName("youtubeHelperShareBtn");
  const btnArr = Array.from(btns);
  btnArr.forEach((btn) => {
    btn.parentNode.removeChild(btn);
  });
})();
