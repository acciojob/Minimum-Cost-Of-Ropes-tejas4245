function CalculateMinCost(){
	var inputData= Document querySelector("#repo-lengths");
	var inputarr= inputData.split(",");
	
	for(i=0;i<inputArr.length;i++){
		inputArr[i]=Number(inputArr[i]);
	}
	var cost=0;
	inputArr.sort(function(a,b) {return a-b});
	while (inputArr.length>1) {
		var newRepo=inputArr[0]+inputArr[1];
		cost+=newRepo;
		inputArr.splice(0,2);
		inputArr.push(newRepo);
		inputArr.sort(function(a,b){return a-b});
		
	}
	document.querySelector(#result).Content=cost;
	})

