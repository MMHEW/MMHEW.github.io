  
var counter = 0;

document.addEventListener('DOMContentLoaded', function(){
	console.log("This method will be executed once the browser render all the objects ");
	console.log("Hello world :D");
})

function countingUp(){

	
	counter = counter + 1;
	console.log("The value of counter is " + counter);
    
    

    if(counter<=10){
	
    
	var myContainer = document.getElementById('mycontainer');

	var dynamicparagraph = "<p> this is easy! you pressed the button "+counter+ " times right?</p>";
	myContainer.insertAdjacentHTML('beforeend', dynamicparagraph);

    }

    else{

        var myContainer = document.getElementById('mycontainer');

        var secondChoice = "<p> let me take off my socks</p>";
	    myContainer.insertAdjacentHTML('beforeend', secondChoice);
    }

    
}

function ouch(){
    alert('that hurt!');
}
