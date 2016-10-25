
ball.animate(
  [
    {offsetDistance: '100%', motionOffset: '100%', transform: 'scale(1)'},
    {offsetDistance: 0, motionOffset: 0, transform: 'scale(.1)'},
  ],{
    duration: 9000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out',
    delay: 0
  }
);
