// slipting texts into letters storing as span

const heroTextName = document.querySelector(".hero-text-name");
heroTextName.innerHTML = heroTextName.innerHTML.replace(
  /\S/g,
  "<span>$&</span>"
);

const heroTextTitle = document.querySelector(".hero-text-para");
heroTextTitle.innerHTML = heroTextTitle.innerHTML.replace(
  /\S/g,
  "<span>$&</span>"
);

const heroTextPara = document.querySelector(".hero-text-title");
heroTextPara.innerHTML = heroTextPara.innerHTML.replace(
  /\S/g,
  "<span>$&</span>"
);

// adding the animations

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: ".hero-text-para span",
    translateX: [10, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500,
    delay: anime.stagger(100),
  });

anime
  .timeline({
    loop: true,
  })
  .add({
    targets: ".hero-text-title span",
    translateX: [10, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(100),
  })
  .add({
    targets: ".hero-text-title span",
    translateX: [100, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(100),
  });

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: ".hero-text-name span",
    translateY: [-1000, 0],
    scale: [15, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(100),
  });
