let myImage = document.querySelector('img');

myImage.onclick = function()
{
	let imageSource = myImage.getAttribute('src');
	if(imageSource === 'pavan.jpg')
		myImage.setAttribute('src','hanuman.JPEG');
	else
		myImage.setAttribute('src','pavan.jpg');
}

let myHeader = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName()
{
	let userName = prompt("Please enter your name");
	if(!userName || userName==='null')
	{
		setUserName();
	}
	
	else
	{
		localStorage.setItem('name', userName);
		myHeader.textContent = "Welcome "+userName;
	}
	
}

if(!localStorage.getItem('name'))
{
	setUserName();
}
else
{
	let myName = localStorage.getItem('name');
	myHeader.innerHTML = 'Welcome '+myName;
}

myButton.onclick = function()
{
	setUserName();
}