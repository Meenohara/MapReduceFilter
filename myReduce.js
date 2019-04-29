Array.prototype.myReduce= function(functiontoApply){
var thisArray = this;
console.log("This Array is "+thisArray);
var tresult=thisArray[0];


	for(var i=1; i<thisArray.length; i++)
	{
		
		tresult=functiontoApply(tresult, thisArray[i]);	
		
	}
	console.log(tresult);
		
}

function summation(result, num)
{
		return result+num;
}

function biggest(num1, num2)
{
		if(num1>num2)
		{
			return num1;
		}
		else{
			return num2;
		}
}


let arr = [1, 2, 3, 4, 5];

arr.myReduce(summation);
firstname = ["M", "e", "e", "n", "a"];
firstname.myReduce(summation);
arr.myReduce(biggest);