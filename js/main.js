$(document).ready(function() {
    // Richiamo funzione Prev al click sulla freccia
  $('.prev').click(function(){
      prevImage();
  });
  // Richiamo funzione Next al click sulla freccia
  $('.next').click(function(){
      nextImage();
  });

  // FUNZIONE NEXT
  function nextImage(){
    // var immagini e cerchi
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');
    // rimuovi classi active
    activeImage.removeClass('active');
    activeCircle.removeClass('active');
    // aggiunta classe active con caso di ritorno al first
    if (activeImage.hasClass('last')) {
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    } else {
      activeImage.next().addClass('active');
      activeCircle.next().addClass('active');
    }

  }

  // FUNZIONE PREV
  function prevImage(){
    // var immagini e cerchi
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');
    // rimuovi classi active
    activeImage.removeClass('active');
    activeCircle.removeClass('active');
    // aggiunta classe active con caso di ritorno al last
    if (activeImage.hasClass('first')) {
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    } else {
      activeImage.prev().addClass('active');
      activeCircle.prev().addClass('active');
    }

  }

});
