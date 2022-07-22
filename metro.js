// var a, b;

function selectOption()
{
    let arr=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(let i=0; i<arr.length; i++)
    {
        document.getElementById('Source').innerHTML+=`<option value=${i+1}>${arr[i]}</option>`
        document.getElementById('Destination').innerHTML+=`<option value=${i+1}>${arr[i]}</option>`
    }
}
selectOption();
// function fun(data)
// {
//   a=arr[data];
//   console.log(a);
// }
// function done(data)
// {
// 	b=arr[data];
// 	console.log(b);
// }





 function fareCalculation()
 {
	let x=document.getElementById('Source').value;
	let y=document.getElementById('Destination').value;
	
	let snumber=(Math.abs(Number(x-y)));

	console.log(snumber)
    // let arr=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // let station=[];


	// for(let i=0; i<arr.length; i++)
	// {
		// station.push[i];
		// let cardpayment=false;
		
		// let source= 6;
		// let destination=8;
		// let sC=destination-source;//sC=station covered
		let fare=0;
		if(snumber>0 && snumber<=4)
		{
			fare=10;
		}
		 else if(snumber>4 && snumber<=8)
		{
			fare=20;
		}
		else if(snumber>8 && snumber<=12)
		{
			fare=30;
		}
		else if(snumber>12 && snumber<=16)
		{
			fare=40;
		}
		else if(snumber>16 && snumber<=20)
		{
			fare=50;
		}
		else if(snumber>20 && snumber<=24)
		{
			fare=60;
		}
		else if(snumber>24)
		{
			fare=70;
		}
		// if(cardpayment)
		// {
		// 	fare=fare*10/100;
		// }
		if(document.getElementById('Boxes').value==='Card payment' && snumber>=5){
			fare=fare-(10/100*fare);
		}
	
	console.log(fare);
            
			document.getElementById('totalfare').value=fare;
    
	}

 fareCalculation();