let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/cat.jpg'){
		myImage.setAttribute('src','images/css.jpg');
	}else{
		myImage.setAttribute('src','images/cat.jpg')
	}
}

function setHeading(name){
	let myHeading = document.querySelector('h4');
	myHeading.textContent = 'My Cat ' + name + ' is so Cute';	
}

function setUserName(){
	let myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
	setUserName();
}else{
	setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;