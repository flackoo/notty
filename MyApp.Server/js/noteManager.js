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

      noteManager.closePriorDialog();
    },
    notePriorityDialog: function() {
      let window = $('<div class="alert alert-primary dialog-box priority-dialog">'),
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
    closePriorDialog: function() {
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
      let window = $('<div class="alert alert-info dialog-box reminder-dialog">').append('<h2>Set reminder</h2>'),
          picker = $('<div class="input-group date" id="reminder-date-input">')
                      .append([
                        $('<input type="text" data-format="yyyy-MM-dd hh:mm:ss" class="form-control">'),
                        $('<span class="input-group-addon">').append($('<i class="fa fa-calendar">'))
                      ]);

      window.append(picker).appendTo($('body'));
      $('#reminder-date-input').datetimepicker();
    },
    closeRemindDialog: function() {
      let remDialog = $('.reminder-dialog'),
          value = $('#reminder-date-input').find('.form-control').val();

      remDialog.css({
        'transition': 'all 0.2s ease-in-out',
        'overflow': 'hidden'
      });

      remDialog.css({
        'transform': 'translateX(-50%) translateY(-' + (remDialog.height() + 20) + 'px)',
        'padding': '0px'
      });

      $('.add-note-container').attr('data-remind', value);
      $('#note-reminder-btn').css('background', '#e5f442');
      
      setTimeout(function() {
        remDialog.remove();
      }, 250);
    },
    addNote: function(){
      let noteContainer = $('.add-note-container');
      
      let values = {
        content: noteContainer.find('#new-note-input').val(),
        reminder: noteContainer.attr('data-remind'),
        priority: noteContainer.attr('data-prior')
      };

      if(values.content.length < 5)
        helpers.showMessage('warning', 'Note content should be long at least 5 symbols', true);

      // $.ajax({
      //   method: 'GET',
      //   url: '/notes/add',
      //   data: values,
      //   success: function() {
      //   },
      //   error: function(msg){
      //     helpers.showMessage('error', msg, true);
      //   }
      // });
    }
  }
  return funcs;
})();