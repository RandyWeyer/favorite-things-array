$(document).ready(function(event) {
  $("form#favorites").submit(function(event){
    event.preventDefault();
  var favoriteThings=["car", "tree", "food", "flower", "animal"];

favoriteThings.forEach(function(favoriteThing) {
  var input = $("input#" + favoriteThing).val();
  $("." + favoriteThing).text(input);
});

 $("#results").show();

  console.log(favoriteThings);
  });
});
