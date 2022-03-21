function calcMiddleHeight() {
     matcherColumn1 = document.getElementById('about-column-matcher1').clientHeight;
     matcherColumn2 = document.getElementById('about-column-matcher2').offsetTop;
     height = matcherColumn1 + matcherColumn2;
     document.getElementById('about-column').setAttribute("style","height:"+height+"px;overflow-y: auto;");
}

window.addEventListener('load',
  function() {
    calcMiddleHeight();
  }, false);

$(window).on("resize", function () {
     calcMiddleHeight();
})


