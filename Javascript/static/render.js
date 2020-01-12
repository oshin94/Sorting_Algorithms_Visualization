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
	
	speed = document.getElementById("speed").value;
	runLoop = async () => {
		k=0
		m=0
		while(swapd){
			swapd=false;
			console.log("\n\nIteration: ", k);
			m++
			for(var j=0; j<num_of_bar; j++){
				m++
				await new Promise( resolve => setTimeout( resolve, speed ) )
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
			k++
			}
		}
	console.log("Sorting done in ",m," iterations");
	var l = document.getElementById("info");
	l.innerHTML = "The bars have been bubble sorted in an ascending manner..!\n HURRAY...!!!\n Iterations: "+m;
	}
	runLoop()
}


function insertion_sort(){
	speed = document.getElementById("speed").value;
	console.log("Speed is: ",speed);
	runLoop = async () => {
		k=0
		//for i in range(1, len(x)-1):
		for (var i=0; i<num_of_bar; i++){
			k++;
			console.log("i is: ",i)
			//for j in range(i,0,-1):
			for (var j=i;j>0;j--){
				k++
				console.log("j is: ", j)
				await new Promise( resolve => setTimeout( resolve, speed ) )
				if (height[j]<height[j-1]){
					ele = document.getElementById(j);
					console.log("\nelement before change: ",ele);
					prev_ele = document.getElementById(j-1);
					console.log("Next element before change: ",prev_ele);
					
					
					temp = height[j]
					temp_svg = ele.getAttribute('x');
					temp_id = ele.getAttribute('id')
					
					height[j] = height[j-1]
					ele.setAttribute("x", prev_ele.getAttribute("x"));
					ele.setAttribute("id", prev_ele.getAttribute("id"));
					
					height[j-1] = temp
					prev_ele.setAttribute("x", temp_svg);
					prev_ele.setAttribute("id", temp_id);
					
					
					ele = '';
					prev_ele = '';
					ele = document.getElementById(j);
					console.log("\nelement after change: ",ele);
					next_ele = document.getElementById(j-1);
					console.log("Previous element after change: ",next_ele);
					console.log(height)
				}
				else{
					break
				}
			}
		}
	console.log("Sorted array is: ", height)
	console.log("Total iterations: ", k);
	
	var l = document.getElementById("info");
	l.innerHTML = "The bars have been Insertion Sorted in an ascending manner..!\n HURRAY...!!!\n Iterations: "+k;
	
	}
	runLoop();
}

function randomize(){
svg = document.getElementsByTagName('svg')[0]; //Get svg element
	
	//id=0;
	height=[];
	num_of_bar = 50
	width_of_bar = 10
	act_width_of_bar = width_of_bar-2
	for (var i=0;i<50;i++){
		h = Math.floor(Math.random() * 200) + 1
		y = 200-h;
		height.push(h);
		ele = document.getElementById(i);
		console.log("\nelement before change: ",ele);
		//var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
		//newElement.setAttribute("width",act_width_of_bar);
		ele.setAttribute("height",h);
		//newElement.setAttribute("x",i);
		ele.setAttribute("y",y);
		//newElement.setAttribute("style","fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)");
		//newElement.setAttribute("id",id);
		//svg.appendChild(newElement);
		//id++;
	}
}
	


