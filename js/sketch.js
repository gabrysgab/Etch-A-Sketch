var rows = 30;
var columns = 30;
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

$('.square').hover(
	function(){
	$(this).css({"background-color":"black"});
},
	function() {
	$(this).css({"background-color":"black"});

}
);

//$(".row").css({"width":y});

});