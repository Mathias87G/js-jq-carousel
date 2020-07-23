$(document).ready(function() {
    // Richiamo funzione Prev al click sulla freccia
  $('.prev').click(function(){
      prevImage();
  });
  // Richiamo funzione Next al click sulla freccia
  $('.next').click(function(){
      nextImage();
  });
  $('.nav i').click(function(){
      var selectCircle = $(this);
      select(selectCircle);
  // Richiamo funzione select
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

  // FUNZIONE CLICK AL PALLINO E VISUALIZZAZIONE RELATIVA IMMAGINE
  function select(x){
    // var immagini, cerchi e indice posizione
    var activeCircle = $('.nav i.active');
    var activeImage = $('.images img.active');
    var position = x.index();
    // rimuovi classe active
    activeCircle.removeClass('active');
    activeImage.removeClass('active');
    // aggiungi classe active al cerchio selezionato
    $(x).addClass('active');
    $('.images img').eq(position).addClass('active');
  }
});
