function print(text){
    var message = document.createTextNode(text);
    var cursor = document.getElementById("cursor");
    document.getElementById("firstLine").removeChild(cursor);
    document.getElementById("firstLine").appendChild(message);
    document.getElementById("firstLine").appendChild(cursor);
}

function animation(){
    var runs = 0;
    var interval = 250;
    function run(){
	switch(runs){
	case 0: setTimeout(function(){ print('e')}, interval); runs++; break;
	case 1: setTimeout(function(){ print('c')}, 2*interval); runs++; break;
	case 2: setTimeout(function(){ print('h')}, 3*interval); runs++; break;
	case 3: setTimeout(function(){ print('o')}, 4*interval); runs++; break;
	case 4: setTimeout(function(){ print(' ')}, 5*interval); runs++; break;
	case 5: setTimeout(function(){ print('\'')}, 6*interval); runs++; break;
	case 6: setTimeout(function(){ print('H')}, 7*interval); runs++; break;
	case 7: setTimeout(function(){ print('e')}, 8*interval); runs++; break;
	case 8: setTimeout(function(){ print('l')}, 9*interval); runs++; break;
	case 9: setTimeout(function(){ print('l')}, 10*interval); runs++;  break;
	case 10: setTimeout(function(){ print('o')}, 11*interval); runs++; break;
	case 11: setTimeout(function(){ print(' ')}, 12*interval); runs++; break;
	case 12: setTimeout(function(){ print('W')}, 13*interval); runs++; break;
	case 13: setTimeout(function(){ print('o')}, 14*interval); runs++; break;
	case 14: setTimeout(function(){ print('r')}, 15*interval); runs++; break;
	case 15: setTimeout(function(){ print('l')}, 16*interval); runs++; break;
	case 16: setTimeout(function(){ print('d')}, 17*interval); runs++; break;
	case 17: setTimeout(function(){ print('!')}, 18*interval); runs++; break;
	case 18: setTimeout(function(){ print('\'')}, 19*interval); runs++; break;
	}
    }

    for(var i = 0; i < 19; i++){
	run();
    }
}

function animationPartTwo(){
    function run(){
	var cursor = document.getElementById("cursor");
	document.getElementById("firstLine").removeChild(cursor);
	var location = document.getElementById("secondLine");
	var para = document.createElement("p");
	var message = document.createTextNode('Hello World!');
	para.appendChild(message);
	para.setAttribute("class", "terminal");
	location.appendChild(para);
    }
    
    setTimeout(run, 4750);
}

function animationPartThree(){
    
    function run(){
	var location = document.getElementById("thirdLine");
	var p = document.createElement("p");
	var node = document.createTextNode("njdupoux@stanford.edu$");
	p.setAttribute("id", "userInfo");
	p.setAttribute("class", "terminal");
	p.appendChild(node);
	location.appendChild(p);
    }

    setTimeout(run, 4750);

}

function runningAnimation(){
    var run = 1;
    function blinkingCursor(){
	function removeCursor(){
	    var location = document.getElementById("thirdLine");
	    var userInfo = document.getElementById("userInfo");
	    while(location.lastChild != userInfo){
		location.removeChild(location.lastChild);
	    }
	}

	function addCursor(){
	    var location = document.getElementById("thirdLine");
	    var cursor = document.createElement("p");
	    var text = document.createTextNode("_");
	    cursor.appendChild(text);
	    cursor.setAttribute("id", "cursor");
	    cursor.setAttribute("class", "terminal");
	    if(!document.contains(cursor)) location.appendChild(cursor);
	}

	if(run === 1){
	    addCursor();
	    run++;
	} else{
	    removeCursor();
	    run--;
	}  
    }

    function startBlinking(){
	setInterval(blinkingCursor, 500);
    }

    setTimeout(startBlinking, 4750);
}