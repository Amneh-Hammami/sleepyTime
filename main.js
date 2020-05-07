 	
function each(array,f){
	for(var i=0; i<array.length; i++){
		f(array[i],i)
	}
}

  //	var x=[1,2,3,4,5,6,7,8,9,10,11,12];
//  	//var array=[];
 
 // var opt =  document.createElement("option");

// //array.push(z)
// //opt.appendChild();
// select.push(z);
// }


// function myFunction() {
// 	var x=[1,2,3,4,5,6,7,8,9,10,11,12];
// for(var i=0; i<x.length; i++) {
//    var z=document.getElementById("hour").innerHTML ="<option value= " + i + ">" + x[i] + "</option>" ;
//     document.getElementById("1").value = x[i];
// }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The average sleep cycle is 90 minutes long
// A typical night of sleep includes 5 full sleep cycles
// 90 x 5 = 450 minutes, or 7.5 hours
// Starting at your wake time, work back 7.5 hours to find your bedtime

//exp:
// if i set time to wake at 5:00am
//at least you have to sleep 4:30(270min) hour which means you have to sleep at (12:30)
//then it increase 90min every time to get better sleep (8:00/9:30/11:00)
function calculate(selectedValueH,selectedValueM){
	
	 selectedValueH = document.getElementById("hour").value;
	 selectedValueM = document.getElementById("minute").value;

//make the time in minute:(h*60)+min
var value1=parseInt(selectedValueH);
var value2=parseInt(selectedValueM);

var wa=((value1*60)+value2);

//you should have at least (4:30hr)270min to sleep so we will take time 'wa'and subtract 270 
// var least= wa-270;
//then to get typical sleep you have to sleep 450min(7:30hr)
// 90*5=450min so we subtract 450min from the wa
 var best= wa-450 ;
best=Math.abs(best);
// 720min = 12hr 
var beforlast=720-best;
result= Math.round(beforlast/60);
//if(result>=12){
//var times=[result,result-1.5,result-3,result-4.5]
//}
var AM="AM";
var times=[(result)+" "+AM,(result+1.5)+ " "+AM,(result+3)+" "+AM,(result+4.5)+" "+AM];
console.log("You should try to fall asleep at one of the following times:" )
each(times,function(element,i){
	if(element>=12){
   AM = "PM";
	}
console.log(element +" "+ "or"+ " ");
});

}
//onchange="calculate(this.id,'hour');"   onchange="calculate(this.id,'minute');"


function wakeUp(now){
var tm = new Date();
now = tm.getMinutes();

    var ab=now-450;
    var ab2=Math.abs(ab);
    ab2 = Math.round(ab2/60);
var times2=[ab2,ab2-1.5,ab2-3,ab2-4.5];
console.log("You should try to wake up at one of the following times:" )
each(times2,function(element,i){
console.log(element +" "+ "or"+ " ");
});
	}


