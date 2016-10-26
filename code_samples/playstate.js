var anim = element.animate(/* animation */);
console.log(anim.playState); // running

anim.pause(); // paused
anim.play(); // running
anim.cancel(); // idle
anim.finish(); // finished
