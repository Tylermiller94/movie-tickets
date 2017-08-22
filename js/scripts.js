//Business Logic

function Ticket(movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
}

function cost(ticket) {
  var cost = 0;
  if(ticket.movie.includes("Hoarders") || ticket.movie.includes("Fast") || ticket.movie.includes("3D")) {
    cost += 15;
  } else {
    cost += 10;
  }
  if(ticket.time.includes("PM")){
    cost +=2;
  }else {
    cost -=1;
  }
  if(ticket.age.includes("Senior")){
    cost -=2;
  }
  return cost;
}


//Interface Logic
$(document).ready(function() {
  $("#movies-form").submit(function(event){
    event.preventDefault();

    var movie = $("#movies").val();
    var time =  $("#times").val();
    var age =   $("#age").val();
    var ticket =  new Ticket(movie, time, age);
    var price = cost(ticket);
    console.log(ticket);
    console.log(cost(ticket));
     $("#price").show();

     $("#movies-form").hide();
     $("#cost").append("$" + price);
     $("#price").append("Your ticket is for " + movie + " at " + time);
  });
});
