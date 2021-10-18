  
var counter = 0;
var counter2 = 0;

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

    else if(counter == 11){

        var myContainer = document.getElementById('mycontainer');

        var secondChoice = "<p> hang on! let me take off my socks</p>";
	    myContainer.insertAdjacentHTML('beforeend', secondChoice);
    }

    else if (counter <= 20){

        var myContainer = document.getElementById('mycontainer');

        var thirdChoice = "<p> this is getting more difficult but your pressed the button "+counter+ " times right?</p>";
	    myContainer.insertAdjacentHTML('beforeend', thirdChoice);

    }

    else{

        var myContainer = document.getElementById('mycontainer');

        var fourthChoice = "<p> I can't count higher then 20!!! </p>";
	    myContainer.insertAdjacentHTML('beforeend', fourthChoice);

    }

    

    
}

function ouch(){

    counter2 = counter2 + 1;

    if (counter2 == 1){
    alert('that hurt!');
    }

    else if (counter2==2){
        alert('seriously stop thats annoying!');
        }
    else if (counter2==3)
    {
        alert('press that button one more time and see what happens!');
    }

    else if (counter2==4){
        alert('thats it! im done! i will no longer work. I QUIT');
     }

    else if (counter2 >= 7)
    {
        alert('you know what im actually enjoying this...keep doing it')
    }

}
