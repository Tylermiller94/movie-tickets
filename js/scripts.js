//Business Logic

function Ticket(movie, time, age){
  var price = movie + time + age;
  return price;

}





//Interface Logic
$(document).ready(function() {
  $("#movies-form").submit(function(event){
    event.preventDefault();

    var movie = parseInt($("#movies").val());
    var time =  parseInt($("#times").val());
    var age =   parseInt($("#age").val());
  });
});
