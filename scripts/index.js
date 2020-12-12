let Motion = document.querySelector(".lottie");
var animation = lottie.loadAnimation({
  container: Motion,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "data.json",
});
