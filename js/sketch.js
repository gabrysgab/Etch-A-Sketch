//var rows = 30;
//var columns = 30;
//var y = $(".square").outerWidth();
//var height = y * rows;




$(document).ready(function(){

Drawing(30,30);


//change of the square color by adding a new class with background-color 


$("#MyButton").click(function(){
	NewBoard();
});


/*change of the square color by using change of css value - background color
 $('.square').hover(
	function(){
	$(this).css({"background-color":"black"});
},
	function() {
	$(this).css({"background-color":"black"});

}
);*/

//$(".row").css({"width":y});

});

function Drawing(columns,rows) {

	var w = 600/columns;
	var h = 600/rows;

	var $row = $("<div />", {class : 'row'});
	var $square = $("<div />",{class : 'square'});

	$row.css({'height': h});
				

	$square.css({'height': h,
					'width': w,
					'display' : 'inline-block'});
	

	//$(".row").css({'width': w});
	

	for (var i = 0; i < columns; i++) {
	$row.append($square.clone());

	
}


for (var i = 0; i < rows; i++) {
	$("#container").append($row.clone());

}
Draw();
}



function NewBoard(){
	$('#container div').remove();
	

	var rows = prompt ("Please enter number of squares-vertical");
	var columns = prompt ("Please enter number of squares-horizontal");
	Drawing(columns,rows);


}

function Draw() {
$(".square").hover(function(){
	$(this).addClass("drawing");
});
}