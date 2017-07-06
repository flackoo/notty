$(document).ready(function() {
  addDonutChart();

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
});