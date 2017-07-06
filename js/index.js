(function(global, $){
  'use strict';
  
  // 현재 시각 
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  
  if(minutes < 10) {
    return '0'+minutes;
  }

  var current_time = hours + ':' + minutes;


  var clock_box = document.querySelector('.clock_box');
  var time = clock_box.firstElementChild;
  time.textContent = current_time;

  console.log(minutes);

})(window, window.document);
