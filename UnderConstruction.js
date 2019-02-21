document.addEventListener('DOMContentLoaded', function(){

	if( document.getElementById('UnderConstruction')){
		var UCEle = document.getElementById("UnderConstruction");
		var UCText = "In Maintainence" // Must be dynamic later

		var infoDiv = document.createElement("DIV");
		infoDiv.setAttribute("id", "infoDiv");
		//infoDiv.style.display = 'none';

			var infoBlock = document.createElement("DIV");
			infoBlock.setAttribute("id", "infoBlock");

				var infoSign = document.createElement("SPAN");
				infoSign.setAttribute("id", "infoSign");
				infoSign.innerText = "!";

				infoBlock.append(infoSign);

				var infoText = document.createElement("SPAN");
				infoText.setAttribute("id", "infoText");
				infoText.innerText = "In Maintainence";
				

				infoBlock.append(infoText);

			infoDiv.append(infoBlock);
      
      	document.getElementsByTagName('body')[0].append(infoDiv);

      	var info_Text = document.getElementById("infoText");
      	info_Text.style.position = "absolute";
      	info_Text.style.display = "block";
      	info_Text.style.visibility = "hidden";
      	info_Text.setAttribute("clientWidth", info_Text.clientWidth );
      	info_Text.style.position = "relative";
      	info_Text.style.width = "0px";
      	

      	var info_Sign = document.getElementById("infoSign");

      	info_Sign.addEventListener("click", function(){
      		if( info_Text.style.width == "0px" ){
      			info_Text.style.width = info_Text.getAttribute("clientWidth") + "px";
	      		info_Text.style.marginLeft = "5px";
	      		info_Text.style.visibility = "visible";
      		}else{
      			info_Text.style.width = "0px";
	      		info_Text.style.marginLeft = "0px";
	      		info_Text.style.visibility = "hidden";
      		}
      	});

      	//infoDiv.style.display = 'block';

      	var info_div = document.getElementById('infoDiv');

      	dragElement(info_div);

	}
}, false);

function dragElement(elem){
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

	elem.onmousedown = dragMouseDown;

	function dragMouseDown(e){
		e = e || window.event;
		e.preventDefault();

		pos3 = e.clientX;
		pos4 = e.clientY;

		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e){
		e = e || window.event;
		e.preventDefault();

		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		elem.style.top = ( elem.offsetTop - pos2 ) + "px";
		elem.style.left = ( elem.offsetLeft - pos1 ) + "px";
	}

	function closeDragElement(){
		document.onmouseup = null;
		document.onmousemove = null;
	}
}