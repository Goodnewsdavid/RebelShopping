
$(document).ready(function() {
  $('.custom-carousel').owlCarousel({
      autoWidth: true,
      loop: true,
  });
});




$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

$('input').on('change', function() {
  $('.main__card__container').toggleClass('blue');
});
