class video {
  constructor() {

  }

}
// var fs = require('fs');
// var files = fs.readdirSync('.');
// var files = document.getElementById("get-files");
// console.log(files.value);
var vid = document.getElementsByClassName("vid");
// console.log(vid);
  function Play() {
    // console.log(vid);
    for (var i = 0; i < 12; i++) {
      vid[i].play();
    }
    // vid[0].play();
  }

  function Pause() {
    for (var i = 0; i < 12; i++) {
      vid[i].pause();
    }
  }

  function seekF() {
      for (var i = 0; i < 12 ;i++){
          vid[i].currentTime += 10
      }
  }

  function seekB() {
      for (var i = 0; i < 12 ;i++){
          vid[i].currentTime -= 10
      }
  }

  function seektoM() {
    var tm = document.getElementById('st').value;
    // console.log(tm);
      for (var i = 0; i < 12 ;i++){
          vid[i].currentTime = tm*60;
      }
  }

  function seektoS() {
    var ts = parseInt(document.getElementById('sts').value);
    // console.log(tm);
      for (var i = 0; i < 12 ;i++){
          console.log(vid[i].currentTime);
          vid[i].currentTime += ts;
      }
  }

  function playspd() {
    // console.log(vid);
    for (var i = 0; i < 12; i++) {
      if (vid[i].playbackRate === 1){
        vid[i].playbackRate = 1.5;
      }
      else if (vid[i].playbackRate === 1.5) {
        vid[i].playbackRate = 2.0;
      }
      else {
        vid[i].playbackRate = 1;
      }
    }
  }

  function seekcurrent() {
      for (var i = 0; i < 12 ;i++){
        if (vid[i].paused === false) {
              vid[i].currentTime += 10
              console.log(vid[i]);
        }
      }
  }
