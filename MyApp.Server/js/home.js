$(document).ready(function() {
  var app = app || {};
  
  addDonutChart();
  newNoteListeners();

  function addDonutChart() {
    let div = $("#doughnut-container"),
        height = $('#advantages-container').height();

    // div.attr('height', height);
    // div.attr('width', height);
    
    var myPieChart = new Chart(div,{
      type: 'doughnut',
      data: {
        labels: ["Brain", "Body"],
        datasets: [
          {
            label: "Brain",
            backgroundColor: ["#3e95cd", "#29d626"],
            data: [25, 75]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Usage of the body metabolic energy in percentages.'
        }
      }
    });
  }

  function newNoteListeners() {
    $('.add-note-container').click(function () { 
      $('#new-note-input').focus(); 
    });

    $('#new-note-input').on('input', function(){
      $(this).height("23.4px");
      var totalHeight = $(this).prop('scrollHeight') - parseInt($(this).css('padding-top')) - parseInt($(this).css('padding-bottom'));
      $(this).height(totalHeight);

      if(totalHeight > $('.add-note-container').height()) 
        $('.new-note-content').perfectScrollbar();      
    });

    $('#add-note-btn').click(function () {
      alert("Oshte ne si gotow!");
    });

    $('#note-reminder-btn').click(function() {
      noteManager.notePriorityDialog();
    });
  }

  
});