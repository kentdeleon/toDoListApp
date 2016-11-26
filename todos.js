var ul = document.querySelector("ul");
var input = document.querySelector("input");


// Check off specific todos by checking
ul.addEventListener("click",function(event){

	var childElement = event.target.nodeName.toLowerCase();
	if(childElement === "li"){ //check if li is click,  then toggle class comepleted to change li style
		event.target.classList.toggle("completed");
	}else if (childElement === "i"){ //check if delete icon is click, then change the li element opacity to 0 afterwards remove the element  
		var par = {
			fadeRemove : function (func){
				event.target.parentElement.parentElement.style.opacity = "0";
				setInterval(func,500); //delay the calling of callback function remove for 550ms before deleting parent element.
			}
		   };
		par.fadeRemove(function(){
		event.target.parentElement.parentElement.remove();
		changeBorder();
			});
	}else if (childElement === "span"){
		var par = {
			    	fadeRemove : function (func){
					event.target.parentElement.style.opacity = "0";
					setInterval(func,500); //delay the calling of callback function remove for 550ms before deleting parent element.
					}
			  };
		par.fadeRemove(function(){
		event.target.parentElement.remove();
		changeBorder();
		});		
	}
});

input.addEventListener("keypress",function(event){

	if(event.which === 13){ //execute if the user hit enter
		var todoSubj = this.value; //store the input value to todoSubj variable
		this.value = ""; //reset the value of input to blank after hitting enter
		var li = document.createElement("li"); //create a new li
		li.innerHTML = "<span><i class='fa fa-eraser' aria-hidden='true'></i></span> " + todoSubj + " "; //modify the li innerHTML and add the following
		ul.appendChild(li); //Then add to ul

	}
});

document.querySelector(".fa-plus").addEventListener("click", function(){
	this.classList.toggle("fa-clicked");
	input.classList.toggle("inputOpen");
	ul.classList.toggle("taskList");
	changeBorder();
});

//function to changeBorder radius of h1
function changeBorder(){

	if(document.querySelector("ul").querySelectorAll("li").length > 0 || document.querySelector("input").classList == "inputOpen"){
		document.querySelector("h1").classList.add("changeBorderRadius");
	}else{
		document.querySelector("h1").classList.remove("changeBorderRadius");
	}
}