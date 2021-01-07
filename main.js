// carica il codice dopo il caricamento del documento
$(document).ready(function() {

  // mostra il menu cliccando sull'icona
  $(".header-right i").click(function() {
    $('.hamburger-menu').show();
  });

  // nasconde il menu cliccando sull'icona
  $('.hamburger-menu i').click(function() {
    $('.hamburger-menu').hide();
  });

});
