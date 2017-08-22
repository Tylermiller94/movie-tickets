//Business Logic

//Interface Logic
$(document).ready(function() {
  $("#movies-form").submit(function(event){
    event.preventDefault();

    var movie = $("#movies").val();
    var time =  $("#times").val();
    var age =   $("#age").val();
    console.log(movie, time, age);



  });
});
