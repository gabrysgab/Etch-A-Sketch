var rows = 16;
var columns = 16;
//var y = $(".square").outerWidth();
//var height = y * rows;
var $row = $("<div />", {class : 'row'});
var $square = $("<div />",{class : 'square'});



$(document).ready(function(){



for (var i = 0; i < columns; i++) {
	$row.append($square.clone());
}


for (var i = 0; i < rows; i++) {
	$("#container").append($row.clone());


}

//$(".row").css({"width":y});

});