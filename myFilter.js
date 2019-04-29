Array.prototype.myFilter= function(functiontoApply){
var thisArray = this;
console.log("This Array is "+thisArray);
var oparr =[];
	for(var i=0; i<thisArray.length; i++)
	{
			if(functiontoApply(thisArray[i]))
			{
			oparr.push(functiontoApply(thisArray[i]));
			
		}
		
	}
console.log(oparr);
}

function oddn(num)
{
	if(num%2==1) 
		{
			return num;
		}

}

let arr = [1, 2, 3, 4, 5];
let arr1 = [2, 4, 6, 8, 10, 11, 22, 33, 44];

arr.myFilter(oddn);
arr1.myFilter(oddn);