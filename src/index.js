import './scss/main.scss';

$(document).ready(function () {
  // show products details popup
  // @todo !!!! додати дата атрибути до .details-click-block які потім зчитувати в click обробнику і вставляти за допомогою jquery їх значення в відповідні блоки попапа для продуктів #productsPopup
  $('.details-click-block').click(function () {
    // перед тим як показати попап спочатку зчитуємо значення дата атрибутів з $(this)
    // та вставляємо їх в попап елементи
    $('.popup-backdrop').addClass('show');
    $('#productsPopup').addClass('show');
  });
  $('[data-hide-popup]').click(function () {
    $('.popup-backdrop').removeClass('show');
    $('.popup-container').removeClass('show');
  });
});
