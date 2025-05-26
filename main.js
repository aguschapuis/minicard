$(document).ready(function () {
  $(".banner__button").on("click", function () {
    $(this).toggleClass("is-active");
  });

  $(".banner__title").text("A partir de 12 meses");
  $(".banner__text").text("Pienso especializado saludable");
  $(".banner__button").text("¡Compra ahora!");
});
