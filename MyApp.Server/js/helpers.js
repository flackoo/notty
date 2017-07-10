var helpers = (function() {
  return {
    isTarget: function(selector, target) {
      if($(selector).length && $(selector).has($(target)).length === 0 && !$(selector).is($(target)))
        return false;
      return true;
    },
    showMessage: function(type, message, dismissible){
      let window = $('<div class="alert system-message">');

      window.addClass('alert-' + type);
      if(dismissible) {
        window.addClass('alert-dismissible');
        window.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>');
      } 

      switch(type) {
        case 'warning':
          window.append('<h2>Warning!</h2><p>' + message + '</p>');
          break;

        default: break;
      }
      window.appendTo($('body'));

      setTimeout(function() {
        window.css({
          'transition': 'all 0.2s ease-in-out',
          'overflow': 'hidden'
        });

        window.css({
          'transform': 'translateX(-50%) translateY(-' + (window.height() + 20) + 'px)',
          'padding': '0px'
        });

        setTimeout(function() {
          remDialog.remove();
        }, 250);
      }, 5000);

    }
  }
})();