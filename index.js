const heart = document.getElementById("heart");
const cartinhaAbertura = document.getElementById("cartinhaAbertura");
const cartinha = document.getElementById("cartinha");

heart.animate([{ transform: "scale(0.7)" }, { transform: "scale(0.8)" }], {
  duration: 200,
  iterations: Infinity,
  direction: "alternate-reverse",
  easing: "ease-in-out",
});

heart.addEventListener("click", runAnimate);
heart.addEventListener("touchstart", runAnimate);

function runAnimate() {
  cartinhaAbertura.animate(
    [
      { transform: "rotateX(0deg)" },
      { transform: "rotateX(-180deg", zIndex: 2 },
    ],
    {
      duration: 1400,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );

  cartinha.animate(
    [
      {
        transform: "translateY(0)",
      },
      {
        opacity: 1,
        zIndex: 2,
        transform: "translateY(-80px)",
      },
    ],
    {
      direction: "alternate",
      delay: 1800,
      duration: 3000,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );

  heart.animate(
    [
      {
        transform: "translateY(0)",
      },
      {
        transform: "translateY(-200px)",
      },
    ],
    {
      duration: 1400,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );
}
