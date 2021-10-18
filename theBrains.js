  
var counter = 0;

document.addEventListener('DOMContentLoaded', function(){
	console.log("This method will be executed once the browser render all the objects ");
	console.log("Hello world :D");
})

function Pressed(){

	
	counter = counter + 1;
	console.log("The value of counter is " + counter);
	/*
	var myContainer = document.getElementById('mycontainer');

	var dynamicparagraph = "<p> Element "+counter+ " added dynamically</p>";
	myContainer.insertAdjacentHTML('beforeend', dynamicparagraph);
    */

    alert('that hurt!');
}
