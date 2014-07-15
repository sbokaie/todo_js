var form = document.getElementById("task_form");
var list = document.getElementById("task_entry");
var listContent = document.getElementById("task_list");


form.onsubmit = function(event){
	event.preventDefault();

	var newTextNode = document.createTextNode(list.value);
	var newElement = document.createElement("li");
	newElement.appendChild(newTextNode);
	listContent.appendChild(newElement);
	var rmBtn = document.createButton('rm');

	var rm = document.getElementById('rm');
	rm.onclick = function() {
		listContent.appendChild(newElement);
	};
};

this.reset();