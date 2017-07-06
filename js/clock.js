// clocks
;(function(global, $){
  'use strict';

  var dblclick_frag = false;
  var interval = null;

  function init() {
    var today = new Date();
    var hours = today.getHours();

    if(hours >= 12) {
      dblclick_frag = false;
      interval = setInterval(setTime24hr);
    } else {
      dblclick_frag = true;
      interval = setInterval(setTime12hr);
    }
  }

  init();

  function checkTime(i) {
  if(i < 10) {
    i = '0' + i; // 숫자가 10보다 작을 경우 앞에 0을 삽입
  }
  return i;
  }

  var clock = document.querySelector('.clock_box').firstElementChild;

  function setTime24hr() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    // var seconds = today.getSeconds();

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    // seconds = checkTime(seconds);

    clock.innerHTML = hours + ':' + minutes;

  }


  function setAmPm(time) {
      var am = document.createElement('span');
      var am_text = document.createTextNode(time.toUpperCase());
      am.setAttribute('class', time)
      am.append(am_text);
      clock.append(am);
  } 
  function setTime12hr() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    // var seconds = today.getSeconds();
    minutes = checkTime(minutes);  

    clock.innerHTML = hours + ':' + minutes;

    if(hours <= 12) {
      setAmPm('am');
    }
    else {
      setAmPm('pm');
    }
  }

  clock.addEventListener("dblclick", function(){
    
    clearInterval(interval);
    if(!dblclick_frag) {
      interval = setInterval(setTime24hr, 500);
      dblclick_frag = true;
    }
    else {
      interval = setInterval(setTime12hr, 500);
      dblclick_frag = false;
    }
  });

})(window, window.document);



