var helpers = (function() {
  return {
    isTarget: function(selector, target) {
      if($(selector).length && $(selector).has($(target)).length === 0 && !$(selector).is($(target)))
        return false;
      return true;
    },
    hideMessage: function(selector, timeout, callback) {
      let window = $(selector);
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
          window.remove();
        }, 250);
      }, timeout);
      
      if(callback !== undefined) callback();
    },
    showMessage: function(type, message, dismissible, timeout){
      if($('.system-message').length)  {
        helpers.hideMessage('.system-message', 2000, function() {
          setTimeout(function () {
            helpers.showMessage(type, message, dismissible, timeout);
          }, 500);
        });
      } 
      else {
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
          
          case 'success': 
            window.append('<h2>Success.</h2><p>' + message + '</p>');
            break;
          
          case 'danger':
            window.append('<h2>Error!</h2><p>' + message + '</p>');
            break;

          default: break;
        }
        window.appendTo($('body'));
        helpers.hideMessage('.system-message', timeout);
      }
    }
  }
})();