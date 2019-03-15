var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'Write your thinking above:';
document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function(){
	var listItem = document.createElement('li');
	var listContent = prompt('Your thinking');
	listItem.textContent = listContent;
	list.appendChild(listItem);

	listItem.onclick = function(e){
		e.stopPropagation();
		var listContent = prompt('Change your opintion');
		this.textContent = listContent;
	}
}