


var
salesData = [],
salesData1 = [],
salesData2 = []


var ctx = document.getElementById('salesChart').getContext('2d');
document.querySelectorAll('.data_encrypted').forEach(dt=>{
    salesData.push(dt.innerHTML)
})
document.querySelectorAll('.data_encrypted1').forEach(dt=>{
    salesData1.push(dt.innerHTML.split('/')[1])
    salesData2.push(dt.innerHTML.split('/')[0])
})
var salesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
        'Day 30', 'Day 29', 'Day 28', 'Day 27', 'Day 26', 'Day 25', 'Day 24',
        'Day 23', 'Day 22', 'Day 21', 'Day 20', 'Day 19', 'Day 18', 'Day 17',
        'Day 16', 'Day 15', 'Day 14', 'Day 13', 'Day 12', 'Day 11', 'Day 10',
        'Day 9', 'Day 8', 'Day 7', 'Day 6', 'Day 5', 'Day 4', 'Day 3',
        'Day 2', 'Day 1'
    ],
    datasets: [{
      label: 'المبيعات',
      data: salesData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(20, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});






var ctx = document.getElementById('productChart1').getContext('2d');
      var productData = {
        labels: salesData2,
        datasets: [{
          data: salesData1,

          backgroundColor: [
            '#14c0c0', '#1c3945', '#14c0c0', '#1c3945', '#14c0c0',
            '#1c3945', '#14c0c0', '#1c3945', '#14c0c0', '#1c3945',
            '#14c0c0', '#1c3945', '#14c0c0', '#1c3945', '#14c0c0',
            '#1c3945', '#14c0c0', '#1c3945', '#14c0c0', '#1c3945',
            '#14c0c0', '#1c3945', '#14c0c0', '#1c3945', '#14c0c0',
            '#1c3945', '#14c0c0', '#1c3945', '#14c0c0', '#1c3945'
            ],

          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      };
      var productChart = new Chart(ctx, {
        type: 'doughnut',
        data: productData,
        options: {
          legend: {
            position: 'bottom'
          }
        }
      });

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'pie',
  data: productData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});





