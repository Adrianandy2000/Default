let sound = document.getElementById("audioId");
sound.currentTime = 0;
sound.loop = true;
sound.play();
autostart= true;
loop= true;
object data="EEEAAAOOO.mp3" type="audio/mpeg" width="0" height="0"
    <param name="filename" value="sound.wav">
    <param name="autostart" value="1">
    <param name="playcount" value="true"> 
var x = document.getElementById("myAudio").autoplay;