$(document).ready(function(event) {
  $("form#favorites").submit(function(event){
    event.preventDefault();
  var favoriteThings=[];

  var carInput = $("#car").val();
  var treeInput = $("#tree").val();
  var foodInput = $("#food").val();
  var flowerInput = $("#flower").val();
  var animalInput = $("#animal").val();

  favoriteThings.push(carInput, treeInput, foodInput, flowerInput, animalInput);

  $("#carResult").text(favoriteThings[0]);
  $("#treeResult").text(favoriteThings[1]);
  $("#foodResult").text(favoriteThings[2]);
  $("#flowerResult").text(favoriteThings[3]);
  $("#animalResult").text(favoriteThings[4]);

  console.log(favoriteThings);
  });
});
