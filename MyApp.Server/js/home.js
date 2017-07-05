$(document).ready(function() {
  addDonutChart();

  function addDonutChart() {
    let div = $("#doughnut-container");
    var myPieChart = new Chart(div,{
      type: 'doughnut',
      data: {
        datasets: [{
          data: [10, 20, 30]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Red',
          'Yellow',
          'Blue'
        ]
      },
      options: []
    });
  }
});