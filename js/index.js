// clocks
;(function(global, $){
  'use strict';

  // function checkTime(i) {
  // if(i < 10) {
  //   i = '0' + i; // 숫자가 10보다 작을 경우 앞에 0을 삽입
  // }
  // return i;
  // }

  // var clock = document.querySelector('.clock_box').firstElementChild;

  // function setTime() {
  //   var today = new Date();
  //   var hours = today.getHours();
  //   var minutes = today.getMinutes();
  //   // var seconds = today.getSeconds();

  //   hours = checkTime(hours);
  //   minutes = checkTime(minutes);
  //   // seconds = checkTime(seconds);

  //   clock.innerHTML = hours + ':' + minutes;

  // }

  // global.setInterval(setTime, 500);

})(window, window.document);



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
    // var am = document.createElement('span');
    // var am_text = document.createTextNode('AM');
    // am.setAttribute('class', 'am')
    // am.append(am_text);
    // clock.append(am);
    setAmPm('am');
  }
  else {
    // var pm = document.createElement('span');
    // var pm_text = document.createTextNode('pm');
    // pm.setAttribute('class', 'pm')
    // pm.append(pm_text);
    // clock.append(pm);
    setAmPm('pm');
  }
}

// setInterval(setTime12hr, 500);





//   var one_click_flag = false;

//   clock.addEventListener("dblclick", function amPm(){
//     this.classList.toggle
//     if(!one_click_flag && hours <= 12) {
//       // var am = document.createElement('span');
//       var am_text = document.createTextNode('AM');
//       am.setAttribute('class', 'am')
//       am.append(am_text);
//       clock.firstElementChild.append(am);
//       one_click_flag = true;
//     }
//   }, false);



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