const inputbox = document.getElementsById("input-box");
const listContainer = document.getElementsById("list-container");

function addTask(){
	if(inputbox.value === ''){
		alert("You must write something!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7"
		li.appendChild(span);
	}
	inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
	if(e.target.tagnName === "LI"){
		e.target.classList.toggle("checked");
	}
else if(e.target.tagName === "SPAN"){
	e.target.parentElement.remove();
}
},false);
