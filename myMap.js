Array.prototype.myMap= function(functiontoApply){
var thisArray = this;
console.log(thisArray);
var oparr =[];
	for(var i=0; i<thisArray.length; i++)
	{
			oparr.push(functiontoApply(thisArray[i]));
			console.log(oparr);
	}
}

function squares(num)
{
		return num*num;
}

let arr = [1, 2, 3, 4, 5];
let arr1 = [2, 4, 6, 8, 10];

arr.myMap(squares);
arr1.myMap(squares);