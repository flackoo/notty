var noteManager = (function() {
  function resetStars() {
    $('.stars-container').find('.star').each(function(){
      $(this).removeClass('active');
    });
  }

  let funcs = {
    paintStars: function(id) {
      let before = $.map($('.priority-dialog .stars-container .star'), function(element){
                      if(parseInt($(element).attr('id')) <= id)
                        return $(element)
                    }),
          after = $.map($('.priority-dialog .stars-container .star'), function(element) {
                    if(parseInt($(element).attr('id')) > id)
                      return $(element);
                  });

      for(let i = 0; i < before.length; i++)
        before[i].addClass('active');
      
      for(i = 0; i < after.length; i++)
        after[i].removeClass('active');
    },
    choosePriority: function(index) {
      $('.stars-container').mouseleave(function(){
        funcs.paintStars($(this).find('.star[id="' + index + '"]').attr('id'));
      })
      $('.stars-container .star').each(function(){
        $(this).on('hover', 
          function() {},
          function() {}
        );
      });


      let bckgrnd = $('.stars-container .star[id="' + index + '"] i.fa.fa-star').css('color');
      // console.log(bckgrnd);
      $('.add-note-container').attr('data-prior', index);
      $('#note-priority-btn').css('background', bckgrnd);

      noteManager.closeDialog();
    },
    notePriorityDialog: function() {
      let window = $('<div class="alert alert-primary priority-dialog">'),
          starsContainer = $('<div class="stars-container">');
    
      window.html("<h2>Choose note priority</h2>");
      for(let i = 1; i < 6; i++) {
        let star = $('<div class="star" id="' + i + '">').append('<i class="fa fa-star"></i>');
        star.appendTo(starsContainer);
        
        star.find('i.fa.fa-star').hover( 
          function(){
            funcs.paintStars(i);
          },
          function() {}
        );

        star.click(function() { 
          $('.star.choosen').removeClass('choosen');
          star.addClass('choosen');         
          funcs.choosePriority(i);
        });

      }

      starsContainer.on('mouseleave', resetStars);
      window.append(starsContainer).appendTo($('body'));
      
      funcs.paintStars($('.add-note-container').attr('data-prior'));
    },
    closeDialog: function() {
      let prDialog = $('.priority-dialog');
      prDialog.css({
        'transition': 'all 0.2s ease-in-out',
        'overflow': 'hidden'
      });

      prDialog.css({
        'transform': 'translateX(-50%) translateY(-' + (prDialog.height() + 20) + 'px)',
        'padding': '0px'
      });
      
      setTimeout(function() {
        prDialog.remove();
      }, 250);
    },
    noteReminderDialog: function() {
      let window = $('<div class="alert reminder-dialog alert-info">').append('<h2>Set reminder</h2>'),
          picker = $('<div class="input-group date" id="reminder-date-input">')
                      .append([
                        $('<input type="text" class="form-control">'),
                        $('<span class="input-group-addon">').append($('<i class="fa fa-calendar">'))
                      ]);

      window.append(picker).appendTo($('body'));
      $('#reminder-date-input').datetimepicker();
    }
  }
  return funcs;
})();