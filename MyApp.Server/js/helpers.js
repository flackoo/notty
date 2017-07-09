var helpers = (function() {
  return {
    isTarget: function(selector, target) {
      if($(selector).length && $(selector).has($(target)).length === 0 && !$(selector).is($(target)))
        return false;
      return true;
    }
  }
})();