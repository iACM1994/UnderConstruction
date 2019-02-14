document.addEventListener('DOMContentLoaded', function(){

	if( document.getElementById('UnderConstruction')){
		var UCEle = document.getElementById("UnderConstruction");
		var UCText = "In Maintainence" // Must be dynamic later

		var infoDiv = document.createElement("DIV");
      	infoDiv.setAttribute('id', 'UCBody' );
		infoDiv.classList.add('info');

		var infoSign = document.createElement("SPAN");
		infoSign.setAttribute('class', 'infoSign');
		infoSign.innerText = '!';
      
      	var infoText1 = document.createElement("SPAN");
      	infoText1.setAttribute('class', 'infoText1');
      	infoText1.innerText = UCText;
		
      	infoDiv.append(infoSign);
      	infoDiv.append(infoText1);
      
      	document.getElementsByTagName('body')[0].append(infoDiv);
	}
}, false);