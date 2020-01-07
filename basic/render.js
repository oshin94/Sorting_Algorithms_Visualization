window.onload = function(){
	svg = document.getElementsByTagName('svg')[0]; //Get svg element
	
	id=0;
	height=[];
	num_of_bar = 50
	width_of_bar = 10
	act_width_of_bar = width_of_bar-2
	for (var i=0;i<500;i+=width_of_bar){
		h = Math.floor(Math.random() * 200) + 1
		y = 200-h;
		height.push(h);
		var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
		newElement.setAttribute("width",act_width_of_bar);
		newElement.setAttribute("height",h);
		newElement.setAttribute("x",i);
		newElement.setAttribute("y",y);
		newElement.setAttribute("style","fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)");
		newElement.setAttribute("id",id);
		svg.appendChild(newElement);
		id++;
	}
	
	console.log(svg);
	console.log("height array: ", height);
		
}


function bubble_sort(){
	swapd=true;
	
	runLoop = async () => {
		k=0
		while(swapd){
			swapd=false;
			console.log("\n\nIteration: ", k);
			for(var j=0; j<num_of_bar; j++){
				await new Promise( resolve => setTimeout( resolve, 1 ) )
				if ((j+1)<num_of_bar && height[j]>height[j+1]){
					ele = document.getElementById(j);
					console.log("\nelement before change: ",ele);
					next_ele = document.getElementById(j+1);
					console.log("Next element before change: ",next_ele);
					
					temp = height[j+1];
					temp_svg = next_ele.getAttribute('x');
					temp_id = next_ele.getAttribute('id')
					
					height[j+1] = height[j];
					next_ele.setAttribute("x", ele.getAttribute("x"));
					next_ele.setAttribute("id", ele.getAttribute("id"));
					
					height[j] = temp;
					ele.setAttribute("x", temp_svg);
					ele.setAttribute("id", temp_id);
					
					ele = '';
					next_ele = '';
					ele = document.getElementById(j);
					console.log("\nelement after change: ",ele);
					next_ele = document.getElementById(j+1);
					console.log("Next element after change: ",next_ele);
					console.log("Height is: ", height);
					swapd=true;
				}
				else{
					console.log("no change");
				}
			}
			k++
		}
	console.log("Sorting done");
	var l = document.getElementById("info");
	l.innerHTML = "The bars have been bubble sorted in an ascending manner..!\n HURRAY...!!!"
	}
	runLoop()
}


/* function bubble_sort(){
	//swapd=true;
	
	runLoop = async () => {
		for(var k=0; k<50; k++){
			console.log("\n\nIteration: ", k);
			for(var j=0; j<50; j++){
				await new Promise( resolve => setTimeout( resolve, 1 ) )
				if ((j+1)<50 && height[j]>height[j+1]){
					ele = document.getElementById(j);
					console.log("\nelement before change: ",ele);
					next_ele = document.getElementById(j+1);
					console.log("Next element before change: ",next_ele);
					
					temp = height[j+1];
					temp_svg = next_ele.getAttribute('x');
					temp_id = next_ele.getAttribute('id')
					
					height[j+1] = height[j];
					next_ele.setAttribute("x", ele.getAttribute("x"));
					next_ele.setAttribute("id", ele.getAttribute("id"));
					
					height[j] = temp;
					ele.setAttribute("x", temp_svg);
					ele.setAttribute("id", temp_id);
					
					ele = '';
					next_ele = '';
					ele = document.getElementById(j);
					console.log("\nelement after change: ",ele);
					next_ele = document.getElementById(j+1);
					console.log("Next element after change: ",next_ele);
					console.log("Height is: ", height);
				}
				else{
					console.log("no change");
				}
			}
		}
	}
	runLoop()
} */
	


