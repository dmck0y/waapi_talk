addButton.addEventListener('click', function(e) {
  var newBall = document.createElement('div');

  newBall.classList.add('ball');
  playground.appendChild(newBall);
  basket.push(newBall.animate(keyframes, timing));
});

syncButton.addEventListener('click', function(e) {
  if (e.currentTarget.innerText === 'Sync') {
    e.currentTarget.innerText = 'Randomize';
    sync();
  } else {
    e.currentTarget.innerText = 'Sync';
    randomize();
  }
});

function sync () {
  basket.forEach(function(ball) {
    ball.currentTime = basket[0].currentTime;
  });
};

function randomize () {
  basket.forEach(function(ball) {
    ball.currentTime = Math.random() * 9000;
  });
};
