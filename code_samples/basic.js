var ball = document.querySelector('[data-js="ball"]'),
  	keyFrames = [
  		{transform: 'translateY(0) scale(1)', offset:0},
  		{transform: 'translateY(25px) scale(1)', offset:.2},
      {transform: 'translateY(90px) scale(.9,1)', offset:.5},
  		{transform: 'translateY(175px) scale(.7,1)', offset:.8},
  		{transform: 'translateY(200px) scale(1, .5)', offset:1},
    ],
    timing = {
      duration: 500,
      iterations: Infinity,
      directions: ‘alternate’,
      easing: ‘cubic-bezier(.845, 0.0, 1.0, 1.0)’
    };

ball.animate(keyFrames, timing);
