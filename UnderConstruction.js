document.addEventListener('DOMContentLoaded', function(){

	if( document.getElementById('UnderConstruction')){
		var UCEle = document.getElementById("UnderConstruction");
		var UCText = UCEle.innerText;

		var infoDiv = document.createElement("DIV");
		infoDiv.classList.add('info');

		var img = document.createElement("IMG");
		img.classList.add('infoSignImg');
		img.setAttribute("src", "/images/circle.png");
		

	}
}, false);