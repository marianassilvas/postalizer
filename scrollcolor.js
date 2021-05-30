$(document).ready(function () {
  var back = ["#eeaeca","#94bbe9","#cae994", "#527e5e", "#d66e6e", "#6ed6d2","#6ea2d6","#a74492","#38c0f1"];
  var rand = back[Math.floor(Math.random() * back.length)];
  $('html').css('background',rand);
})
