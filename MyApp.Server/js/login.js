$(document).ready(function() {
  (function() {
    $('.login-form input#Username').focus(function(){
      let line = $(this).next();
      line.css('width', '100%');
    }).focusout(function() {
        let line = $(this).next();
        line.removeAttr('style');
    });

    $('.login-form input#Password').focus(function(){
      let line = $(this).next();
      line.css('width', '100%');
    }).focusout(function() {
        let line = $(this).next();
        line.removeAttr('style');
    });
  })();
});