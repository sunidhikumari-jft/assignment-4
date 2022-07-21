var a, b;

function selectOption()
{
    let arr=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(let i=0; i<arr.length; i++)
    {
        document.getElementById('Source').innerHTML+=`<option onclick="fun(${i})">${arr[i]}</option>`
        document.getElementById('Destination').innerHTML+=`<option onclick="done(${i})">${arr[i]}</option>`
    }
}
selectOption();
function fun(data)
{
  a=arr[data];
  console.log(a);
}
function done(data)
{
	b=arr[data];
	console.log(b);
}



 function fareCalculation()
 {
    let arr=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let station=[];
	for(let i=0; i<arr.length; i++)
	{
		station.push[i];
		let cardpayment=false;
		let source= 6;
		let destination=8;
		let sC=destination-source;//sC=station covered
		let fare=0;
		if(0<=sC<=4)
		{
			fare=10;
		}
		 else if(5<=sC<=8)
		{
			fare=20;
		}
		else if(9<=sC<=12)
		{
			fare=30;
		}
		else if(13<=sC<=16)
		{
			fare=40;
		}
		else if(17<=sC<=20)
		{
			fare=50;
		}
		else if(21<=sC<=24)
		{
			fare=60;
		}
		else (sC>24)
		{
			fare=70;
		}
		if(cardpayment)
		{
			fare=fare*10/100;
		}
	}
	console.log(fare);
            
			document.getElementById('totalfare').innerHTML=fare;
    
 }
 fareCalculation();