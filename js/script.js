var cinemaHall1 = {
    row: [5, 9, , 13, 13, 13, 13, 13, 13, 13]
  },
  cinemaHallMap = '';
$.each(cinemaHall1.row, function(row, numberOfSeats) {
  cinemaHallRow = '';
  for (i = 1; i <= numberOfSeats; i++) {
    cinemaHallRow += '<div class="seat" data-row="' +
      i + '" data-seat="' +
      i + '">&nbsp;</div>';
  }
  cinemaHallMap += cinemaHallRow + '<div class="passageBetween">&nbsp;</div>';
});
$('.zal1').html(cinemaHallMap);
$('.seat').on('click', function(e) {
  $(e.currentTarget).toggleClass('bay');
});

function fun() {  
  alert ("Оплата прошла успешно");  
} 
  
